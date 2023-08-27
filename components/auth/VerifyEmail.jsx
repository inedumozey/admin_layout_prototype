import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import axios from 'axios'
import Loading from '../utils/Loading';
import Quotes from '../utils/Quotes';
import Card from '../utils/Card';
import authUtils from './utils';


export default function VerifyEmail() {
    const router = useRouter()
    const { token } = router.query;

    const [loading, setLoading] = useState(true)
    const [fetched, setFetched] = useState({
        msg: "",
        status: false,
        success: false
    })
    const time1 = 7000
    const time3 = 3000

    setTimeout(() => {
        setLoading(false)
    }, time1)

    setTimeout(() => {
        setLoading(false)
    }, time1)

    const sendToken = async () => {
        try {
            const { data } = await axios.get(`auth/verify-email/?token=${token}`);

            setFetched({
                status: true,
                msg: data.msg,
                success: true
            });
        }
        catch (err) {
            if (err.response) {
                setFetched({
                    status: true,
                    msg: err.response.data.msg,
                    success: false
                })
            }
            else {
                setFetched({
                    status: true,
                    msg: err.message,
                    success: false
                })
            }
        }
    }

    useEffect(() => {
        if (!loading) {
            // save tokens on cookie
            authUtils.storeCookie("accesstoken", data.accesstoken)
            authUtils.storeCookie("refreshtoken", data.refreshtoken)

            //redirect user to cpanel (user's dashboard)
            setTimeout(() => {
                router.push('/cpanel')
            }, 2000)
        }
    }, [loading])

    // if success, redirect to user cpanel (dashboard)
    useEffect(() => {
        if (fetched.success) {
            setTimeout(() => {
                router.push('/cpanel')
            }, 2000)
        }
    }, [fetched.success])

    return (
        <div className='auth py-[15px] px-[10px]'>
            <Card>
                {(function () {
                    // preparing to call verify api
                    if (loading) {
                        return (
                            <div>
                                <Loading title={"WELCOME BACK!"} subtitle={"Wait while we verify your email"} />
                            </div>
                        )
                    }

                    // start calling verify api
                    if (!loading && !fetched.status) {
                        return <>
                            <Loading title={"WELCOME BACK!"} subtitle={"Almost there!"} />
                        </>
                    }

                    // verification succeeded or failed
                    if (!loading && fetched.status) {
                        return fetched.success ?
                            <>
                                <Title>CONGRATULATIONS!</Title>

                                <Subtitle>You will be redirected to your dashboard in few seconds or <Link className='text-green-500' href="/cpanel">click here</Link> to continue</Subtitle>


                                <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img style={{ width: '50px', height: '50px%' }} src="/check2.png" />
                                </div>
                            </> :
                            fetched.msg.includes("Your account has already been verified") ?
                                (
                                    <>
                                        <Title>WELCOME BACK!</Title>

                                        <Subtitle>{fetched.msg} Please <Link href="/auth/signin">Login</Link></Subtitle>

                                        <div>
                                            <Quotes />
                                        </div>
                                    </>
                                ) :
                                (
                                    <>
                                        <div style={{ textAlign: 'center', margin: '15px 0 15px 0', color: 'red', fontSize: '1.3rem' }}>{fetched.msg}</div>

                                        <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img style={{ width: '50px', height: '50px%' }} src="/404-3.png" />
                                        </div>
                                        <div style={{ margin: '10px' }}>
                                            <Quotes />
                                        </div>
                                    </>
                                )
                    }
                }())}
            </Card>
        </div>
    )
}


function Title({ children }) {
    return <div className='ext-center font-[600] text-[1.3rem]'>{children}</div>
}

function Subtitle({ children }) {
    return <div className='text-color-blue-4 text-center my-[10px]'>{children}</div>
}
