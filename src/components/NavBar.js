import React, { useState, useEffect } from "react";
import moonlightLogo from "../assets/moonlightLogo.png"; 
import { FaSearch, FaUserAlt, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom"; 

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const navigate = useNavigate(); 

  const menuItems = [
    { path: "/", label: 'Home' }, 
    { path: "/shop", label: 'Shop' },
    { path: "/about", label: 'About' },
    { path: "/contact", label: 'Contact' },
  ];

  const handleNavigate = (path) => {
    navigate(path); 
    setIsMobileMenuOpen(false); // Close the mobile menu on navigation
  };

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
    setIsSearchOpen(!isSearchOpen); 
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-[rgba(255,255,255,0.8)] shadow-md" : "bg-[rgba(255,255,255,0.4)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={moonlightLogo} alt="Moonlight Gems" className="h-10" />
            <span
              className={`text-xl font-bold font-major-mono transition-all duration-300 ease-in-out text-black`}
            >
              Moonlight Gem & Jewellery
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex space-x-8">
            {menuItems.map((item) => {
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`px-3 py-2 rounded-md text-lg font-medium font-major-mono transition-all duration-300 ease-in-out text-black hover:text-gray-700`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <button
            onClick={handleMobileMenuToggle}
            className={`sm:hidden text-lg transition-all duration-300 ease-in-out text-black`}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Search Bar, User Icon, and Cart Icon */}
          <div className="flex items-center space-x-5">
            {/* Search Icon */}
            <div className="relative">
              {isSearchOpen && (
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md w-48 md:w-64 focus:outline-none bg-transparent"
                  placeholder="Search..."
                />
              )}

              <button
                className={`text-lg transition-all duration-300 ease-in-out text-black`}
                onClick={handleSearchClick}
              >
                <FaSearch />
              </button>
            </div>

            {/* User and Cart Icons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                className={`text-lg transition-all duration-300 ease-in-out text-black`}
              >
                <FaUserAlt />
              </button>
              <button
                className={`text-lg transition-all duration-300 ease-in-out text-black`}
              >
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 bg-white py-4">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className="text-lg font-medium text-black py-2 px-4 hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
