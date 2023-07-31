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

export default function Signin() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [sending, setSending] = useState(false);
    const [keydown, setKeydown] = useState(false);
    const [msg, setMsg] = useState({ msg: '', status: false });

    const [email, setEmail] = useState("admin");
    const [password, setPassword] = useState("");

    // submit form
    const submit = async (e) => {
        e.preventDefault();

        setSending(true)
        try {
            const { data } = await axios.post(`/auth/admin/signin`, { email, password, });

            setSending(false);

            setMsg({ msg: data.msg, status: true })
            // clear input
            setPassword("");
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
        <form onSubmit={submit} className='relative bg-color-blue-5 m-auto max-w-[500px] min-w-[300px] w-[90%] shadow-md shadow-[rgba(0,0,0,0.5)] md:px-20 px-5 pb-20 rounded-2xl z-10 pt-[calc(100px/2)]'>
            <div className='w-[100px] h-[100px] rounded-full absolute left-[50%] -translate-x-[50%] bg-color-blue-4 -top-[calc(100px/2)] flex justify-center items-center'>
                {
                    keydown ?
                        //show animation
                        <VisibilityOffRoundedIcon className='text-white text-[3rem]' /> :
                        <PersonOutlineIcon className='text-white text-[3rem]' />
                }

            </div>

            <div className='text-center text-[1.5rem] font-semibold pt-2 pb-10'>
                Admin Login
            </div>

            {/* Error message */}
            {
                msg.msg ?
                    <div className='mb-5'>
                        <Alart onHide={setMsg} type={msg.status ? 'success' : 'error'}>{msg.msg}</Alart>
                    </div> : ''
            }

            <div className='group relative h-[35px] rounded-md mb-4'>
                <label className='group-focus-within:bg-color-blue-3 absolute left-0 w-[30px] bg-color-blue-4 h-full flex justify-center items-center rounded-tl-md rounded-bl-md top-0 '>
                    <PersonOutlineIcon className='text-white' />
                </label>
                <input
                    className='bg-transparent border-2 border-color-blue-4 text-color-blue-4 focus:outline-none focus:border-color-blue-3 pl-[35px] pr-[10px] w-full h-full rounded-md focus-input focus:text-color-blue-3'
                    type="text"
                    placeholder='Email/Username'
                    value={email || ''}
                    onInput={(e) => { setEmail(e.target.value) }}
                />
            </div>

            <div className='group relative h-[35px] rounded-md mb-4'>
                <label className='group-focus-within:bg-color-blue-3  absolute left-0 w-[30px] bg-color-blue-4 h-full flex justify-center items-center rounded-tl-md rounded-bl-md top-0 '>
                    <LockIcon className='text-white' />
                </label>
                <input
                    className='bg-transparent border-2 border-color-blue-4 text-color-blue-4 focus:outline-none focus:border-color-blue-3  pl-[35px] pr-[30px] w-full h-full rounded-md focus-input focus:text-color-blue-3'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password || ''}
                    onInput={(e) => { setPassword(e.target.value) }}
                    onFocus={() => setKeydown(true)}
                    onBlur={() => setKeydown(false)}
                />
                <div className='group-focus-within:text-color-blue-3 text-color-blue-4 absolute right-0 w-[30px] h-full flex justify-center items-center rounded-tr-md rounded-br-md top-0 '>
                    {
                        showPassword ?
                            <VisibilityOffRoundedIcon onClick={() => setShowPassword(!showPassword)} /> :
                            <RemoveRedEyeRoundedIcon onClick={() => setShowPassword(!showPassword)} />
                    }
                </div>
            </div>

            <div className='group relative h-[35px] rounded-md mb-2'>
                <button className={`bg-color-blue-4 border-2 border-color-blue-4 text-color-white w-full py-2 rounded-md focus-input focus:outline-none focus:border-color-blue-3 text-white font-bold cursor-[${sending ? 'default' : 'pointer'}] flex justify-center opacity-[${sending ? '.6' : '1'}]`} disabled={sending}>
                    {
                        sending ? <Spinner /> : "Login"
                    }
                </button>
            </div>

            <Link href="auth/forgot-password" className='text-green-500 '>
                Forgot password?
            </Link>
        </form >
    )
}

