import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'
import Alart from '../utils/Alart';
import Loading from '../utils/Loading';
import Card from '../utils/Card';
import Quotes from '../utils/Quotes';
import Goback from '../utils/Goback';
import authUtils from './utils';

export default function Oauth() {
    const router = useRouter()
    const { code } = router.query;
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState({ msg: '', status: false });

    const { error } = router.query

    const send_oauth_code = async (type, provider) => {
        setSending(true)
        try {
            // send the code to the backend
            const url = type == 'signup' ? '/auth/signup-social' : '/auth/signin-social'

            const { data } = await axios.post(url, { code, provider })
            setMsg({ msg: data.msg, status: true })
            setSending(false)

            // save tokens on cookie
            authUtils.storeCookie("accesstoken", data.accesstoken)
            authUtils.storeCookie("refreshtoken", data.refreshtoken)

            //redirect user to cpanel (user's dashboard)
            setTimeout(() => {
                router.push('/cpanel')
            }, 2000)
        }
        catch (err) {
            if (err.response) {
                setMsg({ msg: err.response.data.msg, status: err.response.data.status })
            }
            else {
                setMsg({ msg: err.message, status: false })
            }
            setSending(false);
        }
    }

    useEffect(() => {
        if (code) {
            const type = localStorage.getItem('type')
            const provider = localStorage.getItem('provider')

            send_oauth_code(type, provider)
        }
    }, [code]);

    useEffect(() => {
        if (error) setMsg({ msg: error, status: false })
    }, [error])

    return (
        <div className='auth py-[15px] px-[10px]'>
            <Goback />
            <Card>
                {
                    sending ?
                        <div>
                            <Loading title={'Authenticating...'} />
                        </div> :
                        <div>
                            {
                                msg.msg ?
                                    <div className='w-[80%] m-auto'>
                                        <div className='mb-[20px]'>
                                            <Alart onHide={setMsg} type={msg.status ? 'success' : 'error'}>{msg.msg}</Alart>
                                        </div>
                                        <Quotes />
                                    </div> : <Quotes />
                            }

                        </div>

                }
            </Card>
        </div>
    )
}
