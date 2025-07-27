'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'

const menuItems = [
    {
        title: 'Stationery',
        subItems: ['Pens', 'Notebooks', 'Highlighters']
    },
    {
        title: 'Office Supplies',
        subItems: ['Files & Folders', 'Desk Organizers']
    },
    {
        title: 'Art Supplies',
        subItems: ['Brushes', 'Paints', 'Sketchbooks']
    },
    {
        title: 'Craft Material',
        subItems: ['Glue', 'Paper Crafts']
    }
]

const Header = () => {
    const [openMenu, setOpenMenu] = useState(null)
    const timeoutRef = useRef(null)

    const handleMouseEnter = (index) => {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setOpenMenu(index)
        }, 150) // slight delay to open smoothly
    }

    const handleMouseLeave = () => {
        clearTimeout(timeoutRef.current)
        setOpenMenu(null) // instantly close
    }

    return (
        <div className="w-full bg-white shadow-sm">
            <div className="w-[1300px] mx-auto px-4 py-6 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <ul className="flex items-center gap-6 relative">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group">
                                <div
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(null)}
                                >
                                    <button className="flex items-center gap-1 font-medium hover:text-red-500">
                                        {item.title}
                                        <span>▼</span>
                                    </button>

                                    <div className={`absolute top-full  w-[200px] h-[200px] left-0 bg-white  rounded shadow-md z-50
        transition-all duration-300 ease-in-out
        transform ${openMenu === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                        <ul>
                                            {item.subItems.map((sub, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href="/"
                                                        className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                                                    >
                                                        {sub}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}


                        {/* No dropdown items */}
                        <li><Link href="/" className="hover:text-red-500">Best Sellers</Link></li>
                        <li><Link href="/" className="hover:text-red-500">Shop By Brand</Link></li>
                        <li><Link href="/" className="hover:text-red-500">Rakhi Special</Link></li>
                        <li><Link href="/" className="hover:text-red-500">Popular on Reels</Link></li>
                        <li><Link href="/" className="hover:text-red-500">Back to School</Link></li>
                        <li><Link href="/" className="hover:text-red-500">Clearance</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
