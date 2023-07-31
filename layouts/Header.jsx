import React from 'react'
import Logo from '../components/utils/Logo'

export default function Header() {
    return (
        <div
            className='
                leading-[calc(var(--header-height)-var(--header-height-ss))]
                text-center

            '
        >
            <Logo />            
        </div>
    )
}
