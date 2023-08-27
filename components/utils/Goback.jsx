import React from 'react'
import { useRouter } from 'next/router';

export default function Goback() {
    const router = useRouter()
    return (
        <div onClick={() => router.back()} className='p-[10px] border-[1px] border-[#ccc]-500 w-[100px] text-center mb-2 cursor-pointer hover:opacity-[.7]'>&larr; Go back</div>
    )
}
