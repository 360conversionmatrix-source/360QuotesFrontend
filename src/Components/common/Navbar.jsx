import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/Tab_logo.png';

const Navbar = ({ number,number2 }) => {
  // State for mobile menu toggle (functionality preserved)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-[999] md:flex h-[100px] w-full items-center justify-center border-b border-[#f0f0f0] bg-white font-['Inter',_sans-serif]">
      <div className="flex w-full max-w-[1200px] items-center justify-between px-5 ">
        
        {/* Logo Section */}
        <div className="flex h-[100px] w-[400px] cursor-pointer items-center justify-center text-[1.5rem] font-bold text-[#2c3e50]">
          <img src={img} alt="Logo" className="h-[60px] w-[60px]" />
          <span className="ml-2">
            <span className="text-[#0685B1]">QUOTES</span>
          </span>
        </div>

        {/* Navigation Links - Hidden on mobile, flex on md+ */}
        <ul className="hidden list-none items-center justify-center p-5 md:flex">
          <li>
            <Link to="/" className="px-4 py-2 text-[#2c3e50] transition-all duration-300 hover:text-[#0685B1]">
              Home
            </Link>
          </li>
          <li>
            <a href="#services" className="px-4 py-2 text-[#2c3e50] transition-all duration-300 hover:text-[#0685B1]">
              Services
            </a>
          </li>
          <li>
            <a href="#reviews" className="px-4 py-2 text-[#2c3e50] transition-all duration-300 hover:text-[#0685B1]">
              Reviews
            </a>
          </li>
          <li>
            <a href="#faq" className="px-4 py-2 text-[#2c3e50] transition-all duration-300 hover:text-[#0685B1]">
              FAQ
            </a>
          </li>
          <li>
            <a href="#services" className="ml-[15px] rounded-[5px] bg-[#0685B1] px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-[#056a8c]">
              Get a Quote
            </a>
          </li>
        </ul>
      </div>

      {/* Phone Number Section - Hidden on mobile, flex on md+ */}
      <div className="hidden flex-col items-center justify-start md:flex">
         

      <button className="relative flex rounded-full items-center gap-3 bg-[#0685B1] cursor-pointer hover:bg-[#066483] text-white font-semibold px-6 py-3  shadow-md transition duration-300 animate-[heartbeat_1.5s_ease-in-out_infinite]">
        {/* Headset Icon */}
        <span className="absolute inset-0 m-auto w-42 h-14 rounded-full bg-[#0685B1] animate-ping" />
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" viewBox="0 0 24 24" 
             strokeWidth={1.5} stroke="currentColor" 
             className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" 
                d="M12 1.5a9 9 0 00-9 9v3a3 3 0 003 3h1.5v-6H6a7.5 7.5 0 0115 0h-1.5v6H18a3 3 0 003-3v-3a9 9 0 00-9-9z" />
        </svg>

        {/* Text */}
        <span className="flex flex-col text-left">
          <span className="text-sm">Call us 24/7 for Support</span>
          <span className="text-lg font-bold">{number}</span>
        </span>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;