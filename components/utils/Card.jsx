import React from 'react'

export default function Card({ children }) {

    return (
        <div className='w-full mx-auto py-[50px] bg-color-dark-0 rounded-md text-center shadow-all-sm'>
            {children}
        </div>
    )
}