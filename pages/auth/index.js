import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import PgaeLoader from '../../components/utils/PageLoader';
const isLoggedIn = Cookies.get('refreshtoken')

export default function Signup() {
    const router = useRouter()
    useEffect(() => {
        if (isLoggedIn) router.push('/cpanel')
        router.push('/auth/signin')
    }, [router])

    return (
        <PgaeLoader />
    )
}