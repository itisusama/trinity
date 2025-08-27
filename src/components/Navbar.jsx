import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-[80px] fixed w-full px-6 md:px-8 flex items-center justify-between z-20 bg-black/50 text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        {/* Logo */}
        <div className="flex gap-3">
          <Link to="/">
           <img src={assets.LogoTwo} alt="logo" className="h-[80px]" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex hidden text-xl items-center gap-10">
          <li>
            <a className="text-white transition" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-white transition" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="text-white transition" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-white transition" href="#">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button
          type="button"
          className="bg-[#157682] text-white px-4 border border-[#157682] md:inline hidden text-sm active:scale-95 transition-all h-11 rounded-md cursor-pointer"
        >
          Get a Free Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-btn inline-block md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="white"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <a href="#" className="text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Contact
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get a Free Consultation
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
