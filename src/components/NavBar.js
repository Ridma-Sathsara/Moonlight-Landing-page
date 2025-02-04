import React, { useState, useEffect } from "react";
import moonlightLogo from "../assets/moonlightLogo.png";
import {
  FaSearch,
  FaUserAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={moonlightLogo} alt="Moonlight Gems" className="h-10" />
            <span className="text-xl transition-all text-black font-poppins">
            Moonlight Gems & Jewellery
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="px-3 py-2 text-lg font-medium text-black hover:text-gray-700 transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Search, User, Cart, Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative flex items-center">
              <button
                className="text-lg text-black"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <FaSearch />
              </button>
              {isSearchOpen && (
                <input
                  type="text"
                  className="absolute top-10 left-0 w-40 sm:w-56 bg-white border border-gray-300 px-3 py-2 rounded-md focus:outline-none shadow-md"
                  placeholder="Search..."
                />
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-lg text-black"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* User and Cart Icons */}
            <button className="hidden md:block text-lg text-black">
              <FaUserAlt />
            </button>
            <button className="hidden md:block text-lg text-black">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in Sidebar) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="w-64 bg-white h-full p-6 shadow-lg">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl text-gray-600 hover:text-black"
          >
            <FaTimes />
          </button>
          <div className="mt-6 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="text-lg font-medium text-black py-2 hover:bg-gray-100"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Search */}
          <div className="mt-6 flex items-center">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Search..."
            />
            <button className="text-lg text-black ml-2">
              <FaSearch />
            </button>
          </div>

          {/* Mobile User and Cart Icons */}
          <div className="mt-6 flex justify-between px-4">
            <button className="text-lg text-black">
              <FaUserAlt />
            </button>
            <button className="text-lg text-black">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
