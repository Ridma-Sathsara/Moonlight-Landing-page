import React, { useState } from "react";
import "../theme/SampleItems.css"; 
import goldNecklace from "../assets/gold-necklace.jpeg";
import silverBracelet from "../assets/silver-bracelet.jpeg";
import diamondRing from "../assets/diamond-ring.jpeg";
import emeraldEarrings from "../assets/emerald-earrings.jpeg";

const SampleItems = () => {
  const sampleItems = [
    {
      name: "Gold Necklace",
      image: goldNecklace,
      price: "$499.99",
    },
    {
      name: "Silver Bracelet",
      image: silverBracelet,
      price: "$299.99",
    },
    {
      name: "Diamond Ring",
      image: diamondRing,
      price: "$999.99",
    },
    {
      name: "Emerald Earrings",
      image: emeraldEarrings,
      price: "$699.99",
    },
  ];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate the range of items to display
  const totalPages = Math.ceil(sampleItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sampleItems.slice(startIndex, startIndex + itemsPerPage);

  // Handle Pagination
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="sample-items-container">
      <h2 className="text-center mb-12 text-4xl font-major-mono text-gray-800">
        Our Featured Jewelry Collection
      </h2>
      <div className="items-grid">
        {currentItems.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              {/* <button className="buy-button">Buy Now</button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SampleItems;
