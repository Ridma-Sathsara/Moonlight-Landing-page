import React, { useState, useEffect } from "react";
import b1 from "../assets/b1.jpg";  
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";

const Banner = () => {
  // Array of images
  const images = [ b1, b2, b3, b4];
  
  // State to hold the current image index and fade transition class
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);  
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);  
      }, 500);  
    }, 5000); 

    
    return () => clearInterval(interval);
  }, [images.length]);  // Add images.length as a dependency

  return (
    <div
      className={`relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-50"></div>

      {/* Banner Content */}
      <div className="relative z-10 px-6 sm:px-12 text-center">
        <h1 className="text-500 font-petit-formal-script text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Discover Timeless Elegance
        </h1>

        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
          Explore the finest gems and jewelry at Moonlight Gems & Jewellery.
          Find the perfect piece that speaks to you.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
