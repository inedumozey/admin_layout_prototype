import Oauth from '../../components/auth/Oauth.jsx';

import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
const isLoggedIn = Cookies.get('refreshtoken')

export default function Auth() {
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn) router.push('/cpanel')
    }, [router])

    return <Oauth />
}