import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react'
// import { Link, useNavigate, useParams } from "react-router-dom";
import Link from 'next/link'
import { useRouter } from "next/router";
import { ContextData } from '../../contextApi/ContextApi';
import apiClass from '../../utils/data/api';
import axios from 'axios'

const api = new apiClass()
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

export default function VerifyEmail() {
    const { contact } = useContext(ContextData)
    const router = useRouter()
    const { token } = router.query;

    const [loading, setLoading] = useState(true)
    const [fetched, setFetched] = useState({
        msg: "",
        status: false,
        success: false
    })
    const time1 = 7000
    const time2 = 7000
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



    // redirect the user home after some time (at home, he will be redirected to dashboard if refreshtoken exist in cookies)
    useEffect(() => {
        if (fetched.success) {
            setTimeout(() => {
                router.push('/')
            }, time2)
        }
    }, [fetched.success])

    return (
        <VerifyWrapper>
            {(function () {
                // preparing to call verify api
                if (loading) {
                    return (
                        <div >
                            <h1 style={{ textAlign: 'center', color: 'var(--pri_color)' }}>Welcome Back!</h1>

                            <div style={{ textAlign: 'center', margin: '15px 0 15px 0' }}>Wait while we verify your email</div>

                            <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img style={{ width: '50px', height: '50px%' }} src="/verify-email1.gif" />
                            </div>
                        </div>
                    )
                }

                // start calling verify api
                if (!loading && !fetched.status) {
                    return <>
                        <h1 style={{ textAlign: 'center', color: 'var(--pri_color)' }}>Welcome Back!</h1>

                        <div style={{ textAlign: 'center', margin: '15px 0 15px 0' }}>Almost there!</div>

                        <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '50px', height: '50px%' }} src="/verify-email2.gif" />
                        </div>
                    </>
                }

                // verification succeeded or failed
                if (!loading && fetched.status) {
                    return fetched.success ?
                        <>
                            <h1 style={{ textAlign: 'center', color: 'var(--pri_color)' }}>Congratulations!</h1>

                            <div style={{ textAlign: 'center', margin: '15px 0 15px 0' }}>You will be redirected to your dashboard in few seconds or <Link href="/dashboard">click here</Link> to continue</div>


                            <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img style={{ width: '50px', height: '50px%' }} src="/check2.png" />
                            </div>
                        </> :
                        fetched.msg.includes("Your account has already been verified") ?
                            (
                                <>
                                    <h1 style={{ textAlign: 'center', color: 'var(--pri_color)' }}>Welcome Back!</h1>

                                    <div style={{ textAlign: 'center', margin: '15px 0 15px 0' }}>
                                        {fetched.msg} Please <Link href="/auth/signin">Login</Link>
                                    </div>
                                </>
                            ) :
                            (
                                <>

                                    <h1 style={{ textAlign: 'center', color: 'var(--pri_color)' }}>Welcome Back!</h1>

                                    <div style={{ textAlign: 'center', margin: '15px 0 15px 0', color: 'red' }}>{fetched.msg}</div>

                                    <div className="img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img style={{ width: '50px', height: '50px%' }} src="/404-3.png" />
                                    </div>
                                </>
                            )
                }
            }())}

        </VerifyWrapper >
    )
}


const VerifyWrapper = styled.div`
    height: 100%;
    font-weight: 600;
    color: #625f5f;
    // flex-direction: column;
    // padding: 50px ${({ theme }) => theme.lg_padding};
    // @media (max-width: ${({ theme }) => theme.md_screen}){
    //     padding: 50px ${({ theme }) => theme.md_padding};
    // }
    // @media (max-width: ${({ theme }) => theme.sm_screen}){
    //     padding: 50px ${({ theme }) => theme.sm_padding};
    // }

    a {
        color: blue;
         &:hover {
            opacity: .3;
         }
    }
`

