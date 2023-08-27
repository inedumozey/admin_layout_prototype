import React, { useEffect, useState } from 'react'
import splashScreen from './svg_splash_screen';
import Image from 'next/image'
import Quotes from './Quotes';

export default function Loading({ duration = 8000, title, subtitle }) {

    return (
        <div>
            {title ? <div style={{ textAlign: 'center', fontWeight: 600, fontSize: '1.2rem' }}>{title}</div> : ''}
            {subtitle ? <div style={{ textAlign: 'center', fontWeight: 500 }}>{subtitle}</div> : ''}
            <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Image src={splashScreen.img2} width={280} height={100} alt='splash' />
            </div>

            <Quotes duration={duration} />
        </div>
    )
}


