import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/Tab_logo.png';

const Navbar = () => {
  // State for mobile menu toggle (functionality preserved)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-[999] flex h-[100px] w-full items-center justify-center border-b border-[#f0f0f0] bg-white font-['Inter',_sans-serif]">
      <div className="flex w-full max-w-[1200px] items-center justify-between px-5">
        
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
        <h5 className="m-0 p-0 text-sm font-medium">Licensed Service Provider</h5>
        <a 
          href="tel:+1(877)321-XXXX" 
          className="m-0 p-2 text-[#2c3e50] transition-all duration-300 hover:text-[#0685B1]"
        >
          +1(877)321-XXXX
        </a>
      </div>
    </nav>
  );
};

export default Navbar;