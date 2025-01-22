import React, { useState, useEffect } from "react";
import moonlightLogo from "../assets/moonlightLogo.png"; // Importing the logo image
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa"; // Importing the icons

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to control search bar visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search bar visibility
  };

  return (
    <nav className="fixed w-full z-10 shadow-md bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={moonlightLogo} alt="Moonlight Gems" className="h-10" />
            <span
              className={`text-xl font-bold font-major-mono ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Moonlight Gem & Jewellery
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex space-x-8">
            <a
              href="/"
              className={`px-3 py-2 rounded-md text-lg font-medium font-major-mono ${
                isScrolled
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Home
            </a>
            <a
              href="/shop"
              className={`px-3 py-2 rounded-md text-lg font-medium font-major-mono ${
                isScrolled
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Shop
            </a>
            <a
              href="/about"
              className={`px-3 py-2 rounded-md text-lg font-medium font-major-mono ${
                isScrolled
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              About
            </a>
            <a
              href="/contact"
              className={`px-3 py-2 rounded-md text-lg font-medium font-major-mono ${
                isScrolled
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Search Bar, User Icon and Cart Icon */}
          <div className="flex items-center space-x-5">
            {/* Search Icon and Search Bar */}
            <div className="flex items-center space-x-2 relative">
              
              {isSearchOpen && (
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md w-48 md:w-64 focus:outline-none bg-transparent"
                  placeholder="Search..."
                />
              )}

              <button
                className={`text-lg ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                onClick={handleSearchClick} // Toggle search bar visibility
              >
                <FaSearch />
              </button>
            </div>

            {/* User and Cart Icons */}
            <button
              className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
            >
              <FaUserAlt />
            </button>
            <button
              className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
