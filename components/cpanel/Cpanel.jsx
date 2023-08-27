import React, { useEffect, useState } from 'react'
import authUtils from '../auth/utils'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function Cpanel() {
    const [profile, setProfile] = useState('')
    const router = useRouter()

    async function getProfile() {
        const user = await authUtils.fetchProfile()
        setProfile(user)
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div>
            <div>Email: {profile.email}</div>
            <div>Username: {profile.username}</div>
            <div>Balance: {profile.total_balance}</div>
            <div>
                <img style={{ width: '100px', height: '100px' }} src={profile.profile_pic_url} alt="" />
            </div>

            <button onClick={() => authUtils.logout(router)}>Logout</button>
        </div>
    )
}
