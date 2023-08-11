import React, { useState, useEffect, useContext } from 'react';
import Link from "next/link";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import axios from 'axios'
import { useRouter } from 'next/router'
import Spinner from '../utils/Spinner';
import Alart from '../utils/Alart';
import { ContextData } from '../../context/Context';

export default function EmailVerificationRequired() {
    const router = useRouter()
    const { contact } = useContext(ContextData)

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState({ msg: '', status: false });
    const [localStore, setLocalStore] = useState({ email: '', token: '' })

    // redirect back to login page if email not found on local storage
    useEffect(() => {
        if (!localStorage.getItem("email")) {
            router.push('/auth/signin')
        }

    }, [localStore])

    // submit form
    const submit = async () => {
        setSending(true)

        try {
            const { data } = await axios.post(`auth/resend-verification-link`, { email: localStore.email });

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
                setMsg({ msg: err.response.data.msg, status: err.response.data.status })
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
        <div className='auth py-[15px] px-[10px]'>
            <div className='w-full mx-auto py-[50px] px-[10px] bg-color-dark-0 rounded-md text-center shadow-all-sm'>
                {/* title */}
                <div className='text-color-blue-4 font-[600] text-[1.3rem]'>EMAIL VERIFICATION</div>

                <div className='text-center'>Thank you for signing up for a {contact.name} account</div>

                {/* Error message */}
                {
                    msg.msg ?
                        <div className='mb-5'>
                            <Alart onHide={setMsg} type={msg.status ? 'success' : 'error'}>{msg.msg}</Alart>
                        </div> : ''
                }

                <div className="text-center w-[150px] h-[130px] relative my-[10px] mx-auto flex justify-center items-center">
                    <EmailRoundedIcon className='text-[10rem]' />
                    <div className='absolute top-0 right-0 w-[40px] h-[40px] p-[4px] rounded-full bg-white'>
                        <div className="w-full h-full rounded-full border-[4px] border-green-500 flex justify-center items-center text-[1.3rem] font-bold text-green-500 bg-white">1</div>
                    </div>
                </div>

                <h1>Verify your email address</h1>

                <br />

                {
                    localStore.email ?
                        <>
                            <div>Verification link has been sent to <span className='text-color-dark-3'>{localStore.email}</span></div>
                        </> : ''
                }
                <br />

                <div className='text-color-dark-3'>Click on the link in the email to activate your account</div>

                <br />

                {/* on development, token will be sent to the browser */}
                {
                    localStore.token ?
                        <span>
                            <div className='text-color-dark-3'>On dev mode</div>
                            <Link className='pb-[10px] block text-green-500' target='_blank' href={`/auth/verify-email?token=${localStore.token}`}>Verify your account</Link>
                        </span>
                        : ""
                }

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

            </div>
        </div>
    )
}
