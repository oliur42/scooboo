'use client';
import React, { useState } from 'react';
import { FaMicrophone, FaChevronDown, FaUser, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

export default function HeaderSearch() {
  const [showDropdown, setShowDropdown] = useState(false);
  const categories = ['All', 'Stationery', 'Notebooks', 'Pens', 'Art Supplies'];

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="https://scooboo.in/cdn/shop/files/WhatsApp_Image_2025-07-31_at_20.28.30_af3bfd79.jpg?v=1753975105&width=260"
          alt="logo"
          width={250}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4 max-w-3xl w-full">
        <div className="flex rounded-full overflow-hidden bg-gray-200 h-10 items-center">
          {/* Dropdown Button */}
          <div
            className="relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <button className="px-4 py-2 w-[200px] mr-2 flex items-center gap-1 hover:bg-gray-300">
              <span className="text-sm font-medium">All</span>
              <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {showDropdown && (
              <ul className="absolute z-10 left-0 top-full mt-1 w-36 bg-white border rounded-md shadow-lg text-sm">
                {categories.map((item, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setShowDropdown(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search for products"
            className="flex-grow px-4 bg-transparent focus:outline-none text-sm"
          />

          {/* Mic Icon */}
          <button className="px-4 text-gray-600 hover:text-black">
            <FaMicrophone />
          </button>
        </div>
      </div>

      {/* Icons on Right */}
      <div className="flex items-center gap-4 px-10 ">
        <FaUser className="text-[25px] cursor-pointer" />
        <FaShoppingCart className="text-[25px] cursor-pointer" />
      </div>
    </header>
  );
}