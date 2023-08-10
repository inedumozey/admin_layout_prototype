import React from 'react';
import Link from 'next/link'
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export default function SocialLoginButton({ type = 'signin' }) {
    const url = type == 'signup' ? `${BASE_URL}/auth/signup` : `${BASE_URL}/auth/signin`;

    const socials = [
        {
            title: 'Google',
            url: url + '/google',
            img: "/google.png"
        },
        {
            title: 'Twitter',
            url: url + '/twitter',
            img: "/twitter.png"
        }
    ]
    return (
        <div>
            <div className='flex justify-center items-center gap-10'>
                {
                    socials?.map((social, i) => {
                        return (
                            <Link key={i} href={social.url} className='border-1 border-[#cbcbcb] flex select-none items-center justify-center shadow-md p-[5px] rounded-[5px] text-[1.2rem] transition duration-[.3s] cursor-pointer no-underline font-[530] flex-1 hover:bg-color-dark-0'>
                                <img className='h-[25px] w-[25px]' src={social.img} />
                                <span className='ml-[3px]'>{social.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='py-[20px] relative mt-5'>
                <div className='absolute w-full h-[2px] bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
                    <div className='absolute w-[30px] h-[30px] bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-black rounded-full text-center flex justify-center items-center'>OR</div>
                </div>
            </div>
        </div>
    )
}