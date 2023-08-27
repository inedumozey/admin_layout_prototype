import React from 'react';
import Oauth from '@mozeyinedu/oauth'
const oauth = new Oauth()

export default function SocialLoginButton({ type = '' }) {

    const googleLogin = () => {
        oauth.google.open_consent_screen({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI
        })

        // save type and provider on local storage
        localStorage.setItem('type', type)
        localStorage.setItem('provider', 'google')
    }

    const githubLogin = () => {
        oauth.github.open_consent_screen({
            client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI
        })

        // save type and provider on local storage
        localStorage.setItem('type', type)
        localStorage.setItem('provider', 'github')
    }

    const socials = [
        {
            title: 'Google',
            img: "/google.png",
            provider: 'google',
            click: () => googleLogin()
        },
        {
            title: 'Github',
            img: "/github.png",
            provider: 'github',
            click: () => githubLogin()
        }
    ]
    return (
        <div>

            <div className='flex justify-center items-center gap-1'>
                {
                    socials?.map((social, i) => {
                        return (
                            <div key={i} onClick={social.click} className='border-1 border-[#cbcbcb] flex select-none items-center justify-center shadow-md p-[5px] rounded-[5px] text-[1.2rem] transition duration-[.3s] cursor-pointer no-underline font-[530] flex-1 hover:bg-color-dark-0'>
                                <img className='h-[25px] w-[25px]' src={social.img} />
                                <span className='ml-[3px]'>{social.title}</span>
                            </div>
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

