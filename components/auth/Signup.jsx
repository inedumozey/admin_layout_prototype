import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styled from 'styled-components';
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Btn from '../../utils/components/Btn';
import axios from 'axios'
import { useRouter } from "next/router";
import Spinner from '../../utils/components/Spinner';
import Alart from '../../utils/components/Alart';
import { Form, InputWrapper, InputIcon, Title } from '../../styles/globalStyles';
import SocialLoginButton from './SocialLoginButton';

const APP_NAME = "Drophyte"

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export default function Signup() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [showCpassword, setShowCpassword] = useState(false);
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState({ msg: '', status: false });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [getProductUpdate, setGetProductUpdate] = useState(true);

    // submit form
    const submit = async (e) => {
        e.preventDefault();

        setSending(true)

        try {
            const { data } = await axios.post(`${BASE_URL}/auth/signup`, {
                getProductUpdate,
                email,
                password,
                cpassword
            });

            setSending(false);

            // redirect
            if (!data.isVerified) {
                router.push('/auth/email-verification-required')

                // save user email on local storage incase he wants to resend link
                localStorage.setItem('email', data.email)
                data.token ? localStorage.setItem('token', data.token) : ''
            }

            setMsg({ msg: data.msg, status: true });
            // clear input
            setEmail("");
            setPassword("");
            setCpassword("");
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

    return (

        <Wrapper>
            <Form onSubmit={submit}>
                <div>
                    <h2 style={{ textAlign: 'center', marginBottom: '10px', fontWeight: '600', color: 'var(--blue)' }}>
                        <Title>Sign up for {APP_NAME}</Title>
                    </h2>

                    <SocialLoginButton />

                    {
                        msg.msg ?
                            <div style={{ margin: '25px 0' }}>
                                <Alart onHide={setMsg} type={msg.status ? 'success' : 'error'}>{msg.msg}</Alart>
                            </div> : ''
                    }

                    <InputWrapper>

                        <InputIcon right="" left="0">
                            <EmailRoundedIcon className='icon' />
                        </InputIcon>
                        <input
                            autoFocus
                            type="text"
                            value={email || ''}
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <InputIcon right="" left="0">
                            <LockIcon className='icon' />
                        </InputIcon>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password || ''}
                            placeholder="Password"
                            onInput={(e) => setPassword(e.target.value)}
                        />
                        <InputIcon onClick={() => setShowPassword(!showPassword)} right="0" left="">
                            {showPassword ? <VisibilityOffRoundedIcon className='icon' /> : <RemoveRedEyeRoundedIcon className='icon' />}
                        </InputIcon>
                    </InputWrapper>

                    <InputWrapper>
                        <InputIcon right="" left="0">
                            <LockIcon className='icon' />
                        </InputIcon>
                        <input
                            type={showCpassword ? "text" : "password"}
                            value={cpassword || ''}
                            placeholder="Confirm Password"
                            onInput={(e) => setCpassword(e.target.value)}
                        />
                        <InputIcon onClick={() => setShowCpassword(!showCpassword)} right="0" left="">
                            {showCpassword ? <VisibilityOffRoundedIcon className='icon' /> : <RemoveRedEyeRoundedIcon className='icon' />}
                        </InputIcon>
                    </InputWrapper>

                    <div style={{ padding: '5px 0 15px 0', display: 'flex', alignItems: 'center' }}>
                        <input defaultChecked={getProductUpdate} type="checkbox" name="" id="email" onInput={(e) => setGetProductUpdate(e.target.checked)} />
                        <label htmlFor="email" style={{ marginLeft: '6px' }} > Email me about {APP_NAME} products' updates</label>
                    </div>

                    <InputWrapper>
                        <Btn
                            style={{ width: '100%' }}
                            disabled={sending}
                            color="var(--blue)">
                            {sending ? <Spinner size="sm" /> : "Sign Up"}
                        </Btn>
                    </InputWrapper>

                    <div style={{ padding: '0 0 10px 0' }}>
                        <div>By signing up you agree to our <Link href='/tc' target='_blank'>terms of service.</Link></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>
                            Have an account? <Link href='/auth' >Sign In</Link>
                        </span>
                    </div>

                </div>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`