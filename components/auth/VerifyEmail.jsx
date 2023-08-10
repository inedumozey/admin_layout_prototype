import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

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
            const { data } = await axios.get(`${BASE_URL}/auth/verify-email/?token=${token}`);

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

            // send token to backend
            setTimeout(() => {
                sendToken()
            }, time3)

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
            <div className='w-full mx-auto py-[50px] bg-color-dark-0 rounded-md text-center shadow-all-sm'>

                {(function () {
                    // preparing to call verify api
                    if (loading) {
                        return (
                            <div >
                                {/* title */}
                                <Title>WELCOME BACK!</Title>

                                <Subtitle>Wait while we verify your email</Subtitle>

                                <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img style={{ width: '50px', height: '50px%' }} src="/verify-email1.gif" />
                                </div>
                            </div>
                        )
                    }

                    // start calling verify api
                    if (!loading && !fetched.status) {
                        return <>
                            <Title>WELCOME BACK!</Title>

                            <Subtitle>Almost there!</Subtitle>

                            <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img style={{ width: '50px', height: '50px%' }} src="/verify-email2.gif" />
                            </div>
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
                                    </>
                                ) :
                                (
                                    <>
                                        <Title>WELCOME BACK!</Title>

                                        <div style={{ textAlign: 'center', margin: '15px 0 15px 0', color: 'red' }}>{fetched.msg}</div>

                                        <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img style={{ width: '50px', height: '50px%' }} src="/404-3.png" />
                                        </div>
                                    </>
                                )
                    }
                }())}

            </div>
        </div>
    )
}


function Title({ children }) {
    return <div className='ext-center font-[600] text-[1.3rem]'>{children}</div>
}

function Subtitle({ children }) {
    return <div className='text-color-blue-4 text-center my-[10px]'>{children}</div>
}