import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/Create_a_full-size_l-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-[#2d3345] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xl italic">
                <img src={img} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quotes</span>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              <p>©2025 Conversion Matrix 360.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Features</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <Link to="/" className="hover:text-[#0685B1] transition-colors">Home</Link>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0685B1] transition-colors">Get Started</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0685B1] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0685B1] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#0685B1] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#0685B1] transition-colors">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-[#0685B1] transition-colors">Partners</Link>
              </li>
              <li>
                <Link to="/ccpa" className="hover:text-[#0685B1] transition-colors">CCPA</Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61587297926579" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0685B1] rounded-full flex items-center justify-center hover:bg-[#056a8c] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/conversionmatrix360official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0685B1] rounded-full flex items-center justify-center hover:bg-[#056a8c] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;