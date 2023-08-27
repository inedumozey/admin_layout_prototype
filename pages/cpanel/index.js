import Cpanel from '../../components/cpanel/Cpanel'

import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
const isLoggedIn = Cookies.get('refreshtoken')

export default function Index() {
    const router = useRouter()

    useEffect(() => {
        if (!isLoggedIn) router.push('/')
    }, [])

    return <Cpanel />
}