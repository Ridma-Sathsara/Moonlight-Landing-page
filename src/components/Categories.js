import React from "react";
import "../theme/Categories.css";

const Categories = () => {
  
  const categories = [
    { name: "Ethically Sourced Gems", icon: "fas fa-gem" },
    { name: "Certified Gemstones", icon: "fas fa-certificate" },
    { name: "Unique Jewelry Designs ", icon: "fas fa-ring" },
    { name: "Handcrafted in Sri Lanka", icon: "fas fa-map-marker-alt" },
  ];
  
  

  return (
    <div className="categories-container">
      <div className="collage-container">
        {categories.map((category, index) => (
          <div key={index} className="collage-item">
            <i className={`icon ${category.icon}`}></i> {/* Icon */}
            <p className="category-text">{category.name}</p> {/* Text */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
