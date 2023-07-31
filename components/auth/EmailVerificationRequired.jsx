import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styled from 'styled-components';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import axios from 'axios'
import { useRouter } from 'next/router'
import Spinner from '../../utils/components/Spinner';
import Alart from '../../utils/components/Alart';
import { Title } from '../../styles/globalStyles';
const APP_NAME = 'Drophtye'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export default function EmailVerificationRequired() {
    const router = useRouter()
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState({ msg: '', status: false });
    const [localStore, setLocalStore] = useState({ email: '', token: '' })

    // redirect back to login page if email not found on local storage
    useEffect(() => {
        if (!localStorage.getItem("email")) {
            router.push('/auth/signin')
        }
    }, [])

    // submit form
    const submit = async () => {
        setSending(true)

        try {
            const { data } = await axios.post(`${BASE_URL}/auth/resend-verification-link`, { email: localStore.email });

            setSending(false);

            // console.log(data)

            // save user email on local storage incase he wants to resend link
            localStorage.setItem('email', data.email)
            data.token ? localStorage.setItem('token', data.token) : ''

            setLocalStore({
                email: localStorage.getItem("email"),
                token: localStorage.getItem("token")
            });

            setMsg({ msg: data.msg, status: true })
        }
        catch (err) {
            if (err.response) {
                setMsg({ msg: err.response.data.msg, status: false })
            }
            else {
                setMsg({ msg: err.message, status: false })
            }
            setSending(false);
        }
    }

    // get email from local storage
    useEffect(() => {
        setLocalStore({
            email: localStorage.getItem("email"),
            token: localStorage.getItem("token")
        });
    }, [])

    return (
        <Wrapper>
            <div>
                <h2 className='title' style={{ textAlign: 'center', marginBottom: '10px', fontWeight: '600' }}>
                    <Title>EMAIL VERIFICATION</Title>
                </h2>
                <div style={{ textAlign: 'center' }}>Thank you for signing up for a {APP_NAME} account.</div>

                <Content>
                    {
                        msg.msg ?
                            <div style={{ margin: '25px 0' }}>
                                <Alart onHide={setMsg} type={msg.status ? 'success' : 'error'}>{msg.msg}</Alart>
                            </div> : ''
                    }

                    <div className="email-icon-wrapper">
                        <EmailRoundedIcon className='email-icon' />
                        <div className='item-wrapper'>
                            <div className="item">1</div>
                        </div>
                    </div>

                    <h1>Verify your email address</h1>

                    <br />
                    <br />

                    {
                        localStore.email ?
                            <>
                                <div>Verification link has been sent to:</div>
                                <div>{localStore.email}</div>
                            </> : ''
                    }
                    <br />
                    <br />
                    <br />

                    <div style={{ color: '#b3a9a9' }}>Click on the link in the email to activate your account</div>

                    <br />

                    {
                        localStore.token ?
                            <span>
                                On dev mode:
                                <Link style={{ paddingBottom: '10px', display: 'block' }} target='_blank' href={`/auth/verify-email?token=${localStore.token}`}>Verify your account</Link>
                            </span>
                            : ""
                    }

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ marginRight: '5px' }}>{"Didn't receive the email?"}</span>
                        <span>
                            {sending ? <Spinner size="sm" /> :
                                <span
                                    style={{ color: 'red', textDecoration: 'underline', fontStyle: 'italic', cursor: 'pointer' }}
                                    onClick={submit}
                                >
                                    Reset Email
                                </span>
                            }
                        </span>

                    </div>

                </Content>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px 10px;
`

const Content = styled.div`
    padding: 10px 10px 20px 10px;
    width: 100%;
    min-height: 30vh;
    background: #fff;
    max-width: 600px;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;

    .email-icon-wrapper{
        text-align: center;
        width: 150px;
        height: 130px;
        position: relative;
        margin: 10px auto;

        .email-icon{
            font-size: 10rem;
        }

        .item-wrapper{
            position: absolute;
            bottom: 10px;
            right: 0;
            width: 40px;
            height: 40px;
            padding: 4px;
            border-radius: 50%;
            background: #fff;

            .item{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 4px solid green;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.3rem;
                font-weight: bold;
                color: green;
                background: #fff;

            }
        }
    }
`