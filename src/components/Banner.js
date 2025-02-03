import React, { useState, useEffect } from "react";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import logo from "../assets/moonlightLogo.png";

const Banner = () => {
  // Array of images
  const images = [b1, b2, b3, b4];

  // State to hold the current image index and fade transition class
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
      <div className="relative z-10 px-6 sm:px-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight font-petit-formal-script transition-opacity duration-1000 opacity-100">
          Discover Timeless Elegance
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl mx-auto opacity-100 transition-opacity duration-1000">
          Explore the finest gems and jewelry at Moonlight Gems & Jewellery.
          Find the perfect piece that speaks to you.
        </p>

        {/* Shop Now Button */}
        <button className="px-6 py-2 md:px-8 md:py-3 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
          Shop Now
        </button>

        {/* Logo Positioned Below Button */}
        <div className="mt-6 md:mt-9 flex justify-center">
          <img
            src={logo}
            alt="Moonlight Logo"
            className="w-20 md:w-28 lg:w-36 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
