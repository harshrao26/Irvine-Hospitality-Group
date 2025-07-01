'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import {  FiX } from 'react-icons/fi';
import { BiMenuAltLeft } from "react-icons/bi";

export default function Navbar() {
  const [menu, setMenu] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hideTimeout = useRef(null);

  useEffect(() => {
    fetch('/menu.json')
      .then(res => res.json())
      .then(setMenu);
  }, []);

  const handleMouseEnter = (index, hasSublinks) => {
    clearTimeout(hideTimeout.current);
    if (hasSublinks) {
      setHovered(index);
      setVisibleIndex(index);
    } else {
      setHovered(null);
      setVisibleIndex(null);
    }
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHovered(null);
      setTimeout(() => setVisibleIndex(null), 300);
    }, 500);
  };

  return (
    <div className="w-full fixed top-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent py-2 border- border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={60} height={40} priority />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-base text-white">
          {menu.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index, item.sublinks?.length)}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer transition-colors duration-200"
            >
              <span className={`hover:text-[#FF9D31] ${hovered === index ? 'text-[#FF9D31]' : ''}`}>
                {item.label}
              </span>

              {/* Dropdown */}
              {visibleIndex === index && item.sublinks?.length > 0 && (
                <div
                  onMouseEnter={() => clearTimeout(hideTimeout.current)}
                  onMouseLeave={handleMouseLeave}
                  className={`fixed left-0 top-24 w-full z-40 
                    transition-all duration-300 ease-in-out 
                    ${hovered === index
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-6 pointer-events-none'
                    }`}
                >
                  <div className="bg-white border-t border-gray-200 shadow-lg py-10 px-20 grid grid-cols-2 items-start">
                    
                    <ul className="grid grid-cols-2 gap-y-6 gap-x-12 text-[#002C52] text-base font-medium max-w-5xl">
                      {item.sublinks.map((link, i) => (
                        <li key={i} className="hover:text-[#FF9D31] transition-colors duration-150">
                          {link}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-end">
                      <Image src={logo} alt="Visual" width={100} height={60} />
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA & Lang */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#FF9D31] hover:bg-[#e8891d] text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-1 shadow-sm transition-all duration-200">
            Contact <span className="text-lg">›</span>
          </button>
          <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-sm text-white hover:border-[#FF9D31] transition-colors duration-200">
            EN
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <FiX className="text-white text-2xl" />
            ) : (
              <BiMenuAltLeft className="text-white text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-sm px-6 py-6">
          <ul className="flex flex-col gap-4 text-white text-lg font-medium">
            {menu.map((item, index) => (
              <li key={index}>
                <span className="block mb-1">{item.label}</span>
                {item.sublinks?.length > 0 && (
                  <ul className="ml-4 text-sm text-gray-300 space-y-1">
                    {item.sublinks.map((sublink, i) => (
                      <li key={i}>{sublink}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <div className="mt-6 flex flex-col gap-4">
              <button className="bg-[#FF9D31] text-white py-2 rounded-full text-sm font-semibold">
                Contact
              </button>
              <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-sm text-white">
                EN
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
