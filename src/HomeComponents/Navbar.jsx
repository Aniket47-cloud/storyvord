import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute z-20 max-w-[100vw] w-full bg-[#2B3A6340] bg-opacity-90 border border-[#2B3A6340] shadow-xl to-[#F197F4] flex justify-between items-center h-[90px]">
      <div className="mx-auto flex justify-between items-center w-[97%]">
        <NavLink to="/">
          <img className="w-[210px] mt-1" src="./images/logo.svg" alt="Logo" />
        </NavLink>

        {/* Desktop menu - always visible */}
        <ul className="flex font-semibold text-[22px] leading-[28px] text-white font-jura gap-5">
          <NavLink to='/'><li className="cursor-pointer">HOME</li></NavLink>
          <li className="cursor-pointer">FAQ</li>
        <a href="#features"><li className="cursor-pointer">FEATURES</li></a>  
         <a href="#about"><li className="cursor-pointer">ABOUT US</li></a> 
        <a href="#contact"> <li className="cursor-pointer">CONTACT US</li></a> 
        </ul>

        {/* Desktop buttons - always visible */}
        <div className="flex gap-3">
        <NavLink to="/login"><button className="font-jura bg-gradient-to-b from-[#2B3A63] to-[#B382D3] text-center rounded-[10px] border-white border p-2 px-3">
            <span className="text-white text-xl">Login</span>
          </button></NavLink>  
          <NavLink to="/sign">
            <button className="font-jura rounded-[10px] bg-gradient-to-b text-center from-[#2B3A63] to-[#B382D3] border-white border p-2 px-3 text-white text-xl">
              Sign up
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile menu and hamburger - only visible on small screens */}
      <div className="lg:hidden">
        <button className="text-white absolute top-7 right-5" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-[90px] left-0 right-0 bg-[#2B3A6340] bg-opacity-90">
            <ul className="flex flex-col font-semibold text-[18px] leading-[28px] text-white font-jura p-4">
              <NavLink to='/' onClick={toggleMenu}><li className="cursor-pointer py-2">HOME</li></NavLink>
              <li className="cursor-pointer py-2">FAQ</li>
              <li className="cursor-pointer py-2">FEATURES</li>
              <li className="cursor-pointer py-2">ABOUT US</li>
              <li className="cursor-pointer py-2">CONTACT US</li>
            </ul>
            <div className="flex flex-col gap-3 p-4">
              <button className="font-jura bg-gradient-to-b from-[#2B3A63] to-[#B382D3] text-center rounded-[10px] border-white border p-2 px-3">
                <span className="text-white text-lg">Login</span>
              </button>
              <NavLink to="/sign" onClick={toggleMenu}>
                <button className="font-jura rounded-[10px] bg-gradient-to-b text-center from-[#2B3A63] to-[#B382D3] border-white border p-2 px-3 text-white text-lg w-full">
                  Sign up
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;