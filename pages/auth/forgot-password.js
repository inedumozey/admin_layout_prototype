import ForgotPassword_ from '../../components/auth/ForgotPassword'

import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
const isLoggedIn = Cookies.get('refreshtoken')

export default function ForgotPassword() {
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn) router.push('/cpanel')
    }, [router])

    return <ForgotPassword_ />
}