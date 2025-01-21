import React from "react";
import "../theme/Categories.css";

const Categories = () => {
  
  const categories = [
    { name: "Gems from Renewable Energy", icon: "fas fa-gem" },
    { name: "Full Transparency of Origin", icon: "fas fa-search" },
    { name: "Only Recycled 18k and 14k Gold", icon: "fas fa-ring" },
    { name: "Designed in Sri Lanka", icon: "fas fa-map-marker-alt" },
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
