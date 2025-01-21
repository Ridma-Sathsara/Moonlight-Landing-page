import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Social icons
import mapImage from "../assets/map.png"; // Import the map image

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Moonlight Gems Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Moonlight Gems</h3>
            <p className="text-lg">
              Discover elegant and timeless jewelry for every occasion. Find the perfect gem with us!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/shop" className="hover:text-yellow-500">Shop</a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Moonlight Gems & Jewellery. All rights reserved.</p>
        </div>
      </div>

      {/* Map Image Positioned in the Right Corner with Clickable Link */}
      <div className="absolute bottom-0 right-0 p-4">
        <a href="https://maps.app.goo.gl/CXbJ1zz6wybvji4J7" target="_blank" rel="noopener noreferrer">
          <img
            src={mapImage}
            alt="Moonlight Gems Location"
            className="max-w-xs rounded-lg shadow-lg cursor-pointer"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
