import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Social icons
import mapImage from "../assets/map.png"; // Import the map image
import logoImage from "../assets/moonlightLogo.png"; // Import the logo image
import "../theme/Footer.css"; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logoImage} alt="Moonlight Gems Logo" />
        </div>

        {/* Moonlight Gems Section */}
        <div className="footer-section">
          <h3>Moonlight Gem & Jewellery</h3>
          <p>
            Discover elegant and timeless jewelry for every occasion. Find the
            perfect gem with us!
          </p>
        </div>

        {/* Address Section */}
        <div className="footer-section address-section">
          <h3>Our Address</h3>
          <p>Next to hotel Mermaid, Jayanthi Mawatha, Maha Waskaduwa, Waskaduwa.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Moonlight Gems & Jewellery. All rights reserved.</p>
      </div>

      {/* Map Image */}
      <div className="map-container">
        <a
          href="https://maps.app.goo.gl/CXbJ1zz6wybvji4J7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mapImage} alt="Moonlight Gems Location" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
