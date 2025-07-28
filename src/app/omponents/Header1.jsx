'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CgAdidas } from "react-icons/cg";
import { FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import { IoMdMic } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

function Header1() {
  const [showTitles, setShowTitles] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // to track the dropdown area

  const titles = [
    { label: "Title One", href: "/title-one" },
    { label: "Title Two", href: "/title-two" },
    { label: "Title Three", href: "/title-three" },
    { label: "Title Four", href: "/title-four" }
  ];

  const toggleTitles = () => setShowTitles(!showTitles);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTitles(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full px-4 py-4 bg-white shadow">
      <div className="max-w-[1300px] mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <CgAdidas className="text-red-800 text-[30px]" />
          <p className="text-[24px] font-bold text-gray-800">ScooBoo</p>
        </div>

        {/* Toggle Menu & Search */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
          {/* Dropdown Toggle */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleTitles}
              className="bg-gray-300 w-[180px] text-sm md:text-base rounded-l-2xl text-black px-4 py-2 flex items-center justify-between hover:bg-blue-600 hover:text-white transition"
            >
              <span>All</span>
              {showTitles ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>

            {showTitles && (
              <ul className="mt-2 space-y-2 bg-gray-100 p-4 rounded shadow w-[180px] absolute z-50">
                {titles.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-gray-700 hover:text-blue-600 block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search */}
          <div className="flex items-center justify-between flex-grow bg-gray-300 rounded-r-2xl px-4">
            <input
              type="text"
              placeholder="Search for collection"
              className="w-full md:w-[800px] py-2 px-3 outline-none bg-gray-300"
            />
            <Link href="/">
              <IoMdMic className="text-[26px] text-black" />
            </Link>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-[26px]">
          <Link href="/account"><FaUserEdit /></Link>
          <Link href="/cart"><PiShoppingCartSimpleDuotone /></Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden block">
          <button onClick={toggleMenu}>
            <FaBars className="text-[24px]" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (optional) */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <div className="bg-gray-200 p-3 rounded">
            {titles.map((item, index) => (
              <Link key={index} href={item.href} className="block text-gray-700 hover:text-blue-600">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header1;
