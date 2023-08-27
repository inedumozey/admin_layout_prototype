import React, { useEffect, useState } from 'react'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

export default function Alart({ children, type = "success", hide = true, onHide }) {
    const [show, setShow] = useState(hide)

    useEffect(() => {
        if (!show) {
            onHide ? onHide(false) : ''
        }
    }, [show])

    return show ?
        <div style={{
            width: '100%',
            wordBreak: 'break-all',
            padding: '8px 2px',
            position: 'relative',
            background: (function () {
                if (type === 'warning') {
                    return 'rgb(247 244 158 / 75%)'
                }
                else if (type === 'error') {
                    return 'rgb(255 152 152 / 30%)'
                }
                else {
                    return 'rgb(156 233 159 / 30%)'
                }
            }()),
            fontSize: '.8rem',
            color: (function () {
                if (type === 'warning') {
                    return 'rgb(199 166 8)'
                }
                else if (type === 'error') {
                    return 'rgb(227 6 6)'
                }
                else {
                    return 'rgb(86 159 3)'
                }
            }()),
            borderRadius: '5px',
            border: (function () {
                if (type === 'warning') {
                    return '1px solid rgb(199 166 8)'
                }
                else if (type === 'error') {
                    return '1px solid rgb(255 151 151 / 63%)'
                }
                else {
                    return '1px solid rgb(118 219 2)'
                }
            }()),
            display: 'flex',


        }}>
            <div style={{
                color: (function () {
                    if (type === 'warning') {
                        return '#b1a411'
                    }
                    else if (type === 'error') {
                        return '#ff0808a1'
                    }
                    else {
                        return '#87d5b8d1'
                    }
                }()),
                margio: '5px',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
                borderRadius: '50%',
                position: 'absolute',
                right: '2px',
                top: '2px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
            }}
                // {...snap()}
                onClick={() => setShow(!show)}
            >
                <div style={{
                    width: '12px',
                    height: '1.5px',
                    position: 'absolute',
                    transform: 'rotate(135deg)',
                    background: (function () {
                        if (type === 'warning') {
                            return '#b1a411'
                        }
                        else if (type === 'error') {
                            return '#ff0808a1'
                        }
                        else {
                            return '#87d5b8d1'
                        }
                    }()),
                }}></div>

                <div style={{
                    width: '12px',
                    height: '1.5px',
                    position: 'absolute',
                    transform: 'rotate(225deg)',
                    background: (function () {
                        if (type === 'warning') {
                            return '#b1a411'
                        }
                        else if (type === 'error') {
                            return '#ff0808a1'
                        }
                        else {
                            return '#87d5b8d1'
                        }
                    }()),
                }}></div>
            </div>
            <div style={{ marginRight: '5px' }}>
                {(function () {
                    if (type === 'warning') {
                        return <ReportGmailerrorredIcon />
                    }
                    else if (type === 'error') {
                        return <ReportGmailerrorredIcon />
                    }
                    else {
                        return <ReportGmailerrorredIcon />
                    }
                }())}
            </div>
            <div style={{ paddingRight: '25px' }}>{children}</div>
        </div> : ''
}
