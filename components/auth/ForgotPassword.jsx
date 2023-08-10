import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from 'axios'
import Spinner from '../utils/Spinner';
import Alart from '../utils/Alart';

export default function ForgotPassword() {
    const [sending, setSending] = useState(false);
    const [token, setToken] = useState("");
    const [isFieldEmpty, setIsFieldEmpty] = useState(true);
    const [msg, setMsg] = useState({ msg: '', status: false });
    const [email, setEmail] = useState("");


    // check against empty field
    useEffect(() => {
        email ? setIsFieldEmpty(false) : setIsFieldEmpty(true)
    }, [email])

    // submit form
    const submit = async (e) => {
        e.preventDefault();

        setSending(true)
        const data_ = { email }

        try {
            const { data } = await axios.post(`/auth/forgot-password`, { ...data_ });

            setSending(false);

            if (data.token) {
                setToken(data.token)
            }
            setMsg({ msg: data.msg, status: true })

            // clear input
            setEmail("");
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
        <div className='auth'>
            {/* title */}
            <div className='text-color-blue-4 font-[600] text-center text-[1.3rem]'>FORGOT PASSWORD</div>

            <form onSubmit={submit} className='relative m-auto max-w-[650px] min-w-[300px] w-[98%] md:px-20 py-10'>

                {/* Error message */}
                {
                    msg.msg ?
                        <div className='mb-5'>
                            <Alart onHide={setMsg} type={msg.status ? 'success' : 'error'}>{msg.msg}</Alart>
                        </div> : ''
                }

                <div className='form-wrapper group'>
                    <label className='form-label'>
                        <PersonOutlineIcon className='text-white' />
                    </label>
                    <input
                        className='form-input'
                        type="text"
                        placeholder='Email/Username'
                        value={email || ''}
                        onInput={(e) => { setEmail(e.target.value) }}
                    />
                </div>

                {/* if on development mode, token will be sent to the browser */}
                {
                    token ? <Link className='text-green-500' href={`/auth/verify-forgot-password/?token=${token}`} target='_blank'>Click to Reset Password</Link> : ''
                }

                <div className='form-wrapper group'>
                    <button className={`btn ${sending || isFieldEmpty ? 'opacity-pale cursor-default' : 'opacity-[1] cursor-default'}`} disabled={sending || isFieldEmpty}>
                        {
                            sending ? <Spinner size="sm" /> : "Continue"
                        }
                    </button>
                </div>


                <div className='flex justify-between'>
                    <Link href="/auth/signin" className='text-blue-500 underline'>
                        Sign In
                    </Link>
                </div>
            </form >

        </div>
    )
}
