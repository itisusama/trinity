import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
          <Link to="/">
            <a className="text-white transition" href="#">
              Home
            </a>
          </Link>
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
          <Link to="/contact">
            <a className="text-white transition">
              Contact
            </a>
          </Link>
        </ul>

        {/* Desktop Button */}
        <button
          type="button"
          className="bg-[#157682] text-white px-4 border border-[#157682] md:inline hidden text-sm active:scale-95 transition-all h-11 rounded-md cursor-pointer"
        onClick={()=>navigate("/contact")}
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
  {menuOpen ? (
    // Cross (X) Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="white"
    >
      <path d="M7 7 L23 23 M23 7 L7 23" stroke="white" strokeWidth="2" />
    </svg>
  ) : (
    // Hamburger Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="white"
    >
      <path d="M3 7h24M3 15h24M3 23h24" stroke="white" strokeWidth="2" />
    </svg>
  )}
</button>


        {/* Mobile Menu */}
        <div
          className={`mobile-menu absolute top-[80px] left-0 w-full bg-black/50 p-6 md:hidden transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col text-white space-y-4 text-lg">
            <Link to="/">
              <a className="text-sm">
                Home
              </a>
            </Link>
            <li>
              <a href="#" className="text-sm" id="#services">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm" id="#about">
                About
              </a>
            </li>
            <Link to="/contact">
              <a className="text-sm cursor-pointer">
                Contact
              </a>
            </Link>
          </ul>

          <button
          type="button"
          className="bg-[#157682] text-white px-4 border border-[#157682] md:inline text-sm active:scale-95 transition-all h-11 rounded-md cursor-pointer"
        onClick={()=>navigate("/contact")}
        >
          Get a Free Consultation
        </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
