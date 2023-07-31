import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ShrinkSidebar from './ShrinkSidebar';
import ExpandSidebar from './ExpandSidebar';
import Header from './Header';

export default function Cpanel({ children }) {
    const [scrollY, setScrollY] = useState(0)
    const [sidebarExpanded, setSidebarExpanded] = useState(false)
    const maxScrollY = 70

    useEffect(() => {
        window.onscroll = (e) => {
            setScrollY(Math.floor(window.pageYOffset))
        }
    }, [scrollY])

    return (
        <div>
            {/* {side bar} */}
            <div
                className={`
                    fixed
                    top-0
                    bottom-0
                    transition
                    bg-main
                    h-screen
                    shadow-lg
                    bg-color-blue-4
                    z-20

                    // mobile first
                    w-sidebar-extend-ss
                    ${sidebarExpanded ? 'translate-x-[0%]' : '-translate-x-[102%]'}

                    // desktop
                    md:translate-x-[0%]
                    ${sidebarExpanded ? 'md:w-sidebar-extend' : 'md:w-sidebar-shrink'}
                `}
            >
                {/* nav toggle */}
                <div
                    className='
                        h-[calc(var(--header-height)-var(--header-height-ss))]
                        w-[40px]
                        absolute
                        right-0
                        top-o
                        text-white
                        hover:opacity-pale

                        // hide on large screen
                        md:hidden

                        // shown on smaller screen (mobile first)
                        flex
                        items-center
                        justify-center
                    '
                >
                    <MenuIcon
                        onClick={() => setSidebarExpanded(!sidebarExpanded)}
                        className="
                        text-4xl
                        cursor-pointer
                    "
                    />
                </div>
                {/* shrink side bar */}
                <div
                    className={`
                        h-full
                        w-[var(--sidebar-shrink)]
                        ${sidebarExpanded ? 'hidden' : 'block'}
                        transition
                        hover-effect-sidebar-content
                    `}
                >
                    <ShrinkSidebar />
                </div>
                {/* expanded side bar */}
                <div
                    className='
                        h-full
                        w-[var(--sidebar-expand)]
                        transition
                    '
                >
                    <ExpandSidebar />
                </div>
            </div>

            {/* {header} */}
            <div
                className={`
                    transition
                    duration-75
                    h-header
                    top-0
                    right-0
                    left-0
                    z-10
                    
                    // desktop
                    ${sidebarExpanded ? 'md:ml-[var(--sidebar-extend)]' : 'md:ml-[var(--sidebar-shrink)]'}
                `}>

                <div className='w-[calc(100%-25px)]'><Header /></div>
                <div
                    className={`
                    transition
                    duration-75
                    flex
                    items-center
                    bg-color-blue-4
                    h-[var(--header-height-ss)]
                    ${scrollY >= maxScrollY ?
                        `fixed  ${sidebarExpanded ? 'md:ml-[var(--sidebar-extend)]' : 'md:ml-[var(--sidebar-shrink)]'}`: 
                        'static'} ${scrollY >= maxScrollY ? 'shadow-lg' : 'shadow-none'}

                    // desktop
                   
                    top-0
                    right-0
                    left-0
                    z-10
            
                `}>

                    <div className={`
                        cursor-pointer
                        transition
                        duration-75
                        text-white
                        px-2
                        md:px-0
                        font-semibold
                    `}>
                    <MenuIcon
                        onClick={() => setSidebarExpanded(!sidebarExpanded)}
                        className="text-4xl cursor-pointe hover:opacity-pale pr-2"
                    />
                    {
                        "Current Page"
                    }
                    </div>
                </div>

            </div>

            {/* overlay */}
            <div
                onClick={() => setSidebarExpanded(false)}
                className={`
                    fixed
                    top-0
                    bottom-0
                    left-0
                    right-0
                    bg-black
                    bg-opacity-25
                    z-10
                    md:hidden
                    ${sidebarExpanded ? 'block' : 'hidden'}
                `}
            >

            </div>

            {/* {main} */}
            <div
                className={`
                    relative
                    transition
                    duration-75
                    h-[calc(100vh-var(--header-height))]
            
                    // desktop
                    ${sidebarExpanded ? 'md:ml-[var(--sidebar-extend)]' : 'md:ml-[var(--sidebar-shrink)]'}
                    hover-effect
                `}
            >
                {children}
            </div>

        </div >
    )
}
