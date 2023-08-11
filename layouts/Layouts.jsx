import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import Cpanel from './Cpanel';
import { ContextData } from '../context/Context';
import Copyright from '../components/utils/Copyright';
import Logo from '../components/utils/Logo';


export default function Layouts({ children }) {

    const router = useRouter()
    const state = useContext(ContextData)
    const { contact } = state

    if (router.asPath == '/') {
        return <DefaultLayout contact={contact}>{children}</DefaultLayout>
    }
    else if (router.asPath.includes('/cpanel')) {
        return <Cpanel>{children}</Cpanel>
    }
    else if (router.asPath.includes('/auth')) {
        return <DefaultLayout contact={contact}>{children}</DefaultLayout>
    }
    else {
        return <>
            {children}
        </>
    }

}

function DefaultLayout({ children, contact }) {

    return (
        <div className='wrapper bg-color-blue-1'>
            {/* header */}
            <div className='h-[60px] pt-10'>
                <Logo />
            </div>

            {/* body */}
            <div className='min-h-[calc(100vh-60px-50px)] mt-[30px] mx-auto'>
                {children}
            </div>

            {/* footer */}
            <div className='h-[50px] text-[.7rem] text-color-blue-4'>
                <Copyright />
            </div>
        </div>
    )
}
