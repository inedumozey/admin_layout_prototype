import Signup_ from '../../components/auth/Signup'

import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
const isLoggedIn = Cookies.get('refreshtoken')

export default function Signup() {
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn) router.push('/cpanel')
    }, [router])

    return <Signup_ />
}