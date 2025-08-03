'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  {
    title: 'Stationery',
    subItems: ['Pens', 'Notebooks', 'Highlighters'],
  },
  {
    title: 'Office Supplies',
    subItems: ['Files & Folders', 'Desk Organizers'],
  },
  {
    title: 'Art Supplies',
    subItems: ['Brushes', 'Paints', 'Sketchbooks'],
  },
  {
    title: 'Craft Material',
    subItems: ['Glue', 'Paper Crafts'],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(index);
    }, 150);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(null);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 relative">
          <ul className="flex items-center gap-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-2 text-[15px] hover:text-red-500">
                    {item.title}
                    <span>▼</span>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 w-[200px] bg-white rounded shadow-md z-50 transition-all duration-200 ease-in-out
                    ${openMenu === index
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <ul>
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100"
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

            <li><Link href="/" className="hover:text-red-500">Best Sellers</Link></li>
            <li><Link href="/" className="hover:text-red-500">Shop By Brand</Link></li>
            <li><Link href="/" className="hover:text-red-500">Rakhi Special</Link></li>
            <li><Link href="/" className="hover:text-red-500">Popular on Reels</Link></li>
            <li><Link href="/" className="hover:text-red-500">Back to School</Link></li>
            <li><Link href="/" className="hover:text-red-500">Clearance</Link></li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-inner">
          <ul className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <details>
                  <summary className="cursor-pointer font-semibold py-2">
                    {item.title}
                  </summary>
                  <ul className="pl-4">
                    {item.subItems.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href="/"
                          className="block py-1 text-gray-600 hover:text-red-500"
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li><Link href="/" className="py-2 hover:text-red-500">Best Sellers</Link></li>
            <li><Link href="/" className="py-2 hover:text-red-500">Shop By Brand</Link></li>
            <li><Link href="/" className="py-2 hover:text-red-500">Rakhi Special</Link></li>
            <li><Link href="/" className="py-2 hover:text-red-500">Popular on Reels</Link></li>
            <li><Link href="/" className="py-2 hover:text-red-500">Back to School</Link></li>
            <li><Link href="/" className="py-2 hover:text-red-500">Clearance</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
