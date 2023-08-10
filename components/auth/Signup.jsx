import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from 'axios'
import Spinner from '../utils/Spinner';
import Alart from '../utils/Alart';
import SocialLoginButton from './SocialLoginButton';

const p_icon_style = 'group-focus-within:text-color-blue-3 text-color-blue-4 absolute right-0 w-[30px] h-full flex justify-center items-center rounded-tr-md rounded-br-md top-0'

export default function Signup() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRevealIcon, setShowPasswordRevealIcon] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const [sending, setSending] = useState(false);
    const [isFieldEmpty, setIsFieldEmpty] = useState(true);
    const [msg, setMsg] = useState({ msg: '', status: false });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    useEffect(() => {
        setShowPasswordRevealIcon(true)
        setShowPassword(false)
        setShowCPassword(false)
    }, [password, cpassword])

    // check against empty field
    useEffect(() => {
        password && cpassword && email ? setIsFieldEmpty(false) : setIsFieldEmpty(true)
    }, [password, cpassword, email])

    // submit form
    const submit = async (e) => {
        e.preventDefault();
        setSending(true)

        try {
            const { data } = await axios.post(`/auth/signup`, {
                email,
                password,
                cpassword
            });

            setSending(false);

            // redirect
            if (!data.isVerified) {
                setTimeout(() => {
                    router.push('/auth/email-verification-required')
                }, 3000)

                // save user email on local storage incase he wants to resend link
                localStorage.setItem('email', data.email)
                data.token ? localStorage.setItem('token', data.token) : ''
            }

            setMsg({ msg: data.msg, status: data.status });
            // clear input
            setEmail("");
            setPassword("");
            setCpassword("");
        }
        catch (err) {
            if (err.response) {
                setMsg({ msg: err.response.data.msg, status: err.response.data.status })
            }
            else {
                setMsg({ msg: err.message, status: err.response.data.status })
            }
            setSending(false);
        }
    }

    return (
        <div className='auth'>
            {/* title */}
            <div className='text-color-blue-4 font-[600] text-center text-[1.3rem]'>Sign Up</div>

            <form onSubmit={submit} className='relative m-auto max-w-[650px] min-w-[300px] w-[98%] md:px-20 py-10'>

                {/* login with google and other social medial buttons */}
                <SocialLoginButton />

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
                        placeholder='Email'
                        value={email || ''}
                        onInput={(e) => { setEmail(e.target.value) }}
                    />
                </div>

                <div className='form-wrapper group'>
                    <label className='form-label '>
                        <LockIcon className='text-white' />
                    </label>
                    <input
                        className='form-input'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        value={password || ''}
                        onInput={(e) => { setPassword(e.target.value) }}
                    />
                    <div className={p_icon_style}>
                        {
                            showPasswordRevealIcon && password ?
                                showPassword ?
                                    <VisibilityOffRoundedIcon onClick={() => setShowPassword(!showPassword)} /> :
                                    <RemoveRedEyeRoundedIcon onClick={() => setShowPassword(!showPassword)} /> : ''
                        }
                    </div>
                </div>


                <div className='form-wrapper group'>
                    <label className='form-label'>
                        <LockIcon className='text-white' />
                    </label>
                    <input
                        className='form-input'
                        type={showCPassword ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        value={cpassword || ''}
                        onInput={(e) => { setCpassword(e.target.value) }}
                    />
                    <div className={p_icon_style}>
                        {
                            showPasswordRevealIcon && cpassword ?
                                showCPassword ?
                                    <VisibilityOffRoundedIcon onClick={() => setShowCPassword(!showCPassword)} /> :
                                    <RemoveRedEyeRoundedIcon onClick={() => setShowCPassword(!showCPassword)} /> : ''
                        }
                    </div>

                </div>
                <div>
                    By signing up, you accepted our <Link className='text-blue-500 italic' href="/tc">terms and conditions</Link>
                </div>
                <div className='form-wrapper group'>
                    <button className={`btn ${sending || isFieldEmpty ? 'opacity-pale cursor-default' : 'opacity-[1] cursor-default'}`} disabled={sending || isFieldEmpty}>
                        {
                            sending ? <Spinner size="sm" /> : "Sign Up"
                        }
                    </button>
                </div>


                <div className='flex justify-between'>
                    <Link href="/auth/signin" className='text-blue-500 underline'>
                        Sign in
                    </Link>
                </div>
            </form >

        </div>
    )
}
