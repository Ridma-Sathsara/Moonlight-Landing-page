import React from "react";
import moonlightLogo from "../assets/moonlightLogo.png"; // Importing the logo image

const NavBar = () => {
  return (
    <nav className="bg-transparent text-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Logo and Navigation links */}
          <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-center">
            <div className="flex-shrink-0">
              {/* Logo image */}
              <img
                src={moonlightLogo}
                alt="Moonlight Gems"
                className="h-10 mr-4"
              />
            </div>

            {/* Navigation buttons */}
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium font-major-mono">
                Home
              </button>
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium font-major-mono">
                Shop
              </button>
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium font-major-mono">
                About
              </button>
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium font-major-mono">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
