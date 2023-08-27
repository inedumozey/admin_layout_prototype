import React, { useState } from 'react'
import quotes from './randomQuotes';

export default function Quotes({ duration = 8000 }) {
    const MAX = quotes.length;
    const [quote, setQuote] = useState(quotes[0])

    setTimeout(() => setQuote(quotes[Math.floor(Math.random() * (MAX - 0) + 0)]), duration)

    return (
        <div style={{ width: '95vw', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <div style={{ fontSize: '.8rem' }}>{quote.text}</div>
            <div style={{ fontWeight: 'bold', fontSize: '.8rem', marginTop: '10px', fontStyle: 'italic' }}>{quote.author}</div>
        </div>
    )
}


