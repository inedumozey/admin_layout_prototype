import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import VerifyForgotPassword from '../../components/auth/VerifyForgotPassword';
const isLoggedIn = Cookies.get('refreshtoken')

export default function Verify_Forgot_Password() {
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn) router.push('/cpanel')
    }, [router])

    return <VerifyForgotPassword />
}