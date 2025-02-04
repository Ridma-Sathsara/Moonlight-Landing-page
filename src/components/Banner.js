import React, { useState, useEffect } from "react";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import logo from "../assets/moonlightLogo.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [b1, b2, b3, b4];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative bg-cover bg-center h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out", // Smooth transition for background image
      }}
    >
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-50"></div>

      {/* Banner Content */}
      <div className="relative z-10 px-6 sm:px-12 text-center pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight font-petit-formal-script transition-opacity duration-1000 opacity-100">
          Discover Timeless Elegance
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl mx-auto opacity-100 transition-opacity duration-1000">
         Moonlight Gems & Jewellery
         
        </p>

        {/* Shop Now Button */}
        <Link
          to="/shop"
          className="inline-flex items-center px-8 py-3 border-2 border-white text-lg text-white hover:backdrop-blur-sm transition duration-300 rounded-md shadow-md"
        >
          View Collection
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>

        {/* Logo Positioned Below Button */}
        <div className="mt-6 md:mt-9 flex justify-center">
          <img
            src={logo}
            alt="Moonlight Logo"
            className="w-20 md:w-28 lg:w-36 drop-shadow-lg transition-all duration-300 hover:scale-120 hover:drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
