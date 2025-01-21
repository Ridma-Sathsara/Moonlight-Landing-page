import React from "react";
import "../theme/SampleItems.css"; 
import goldNecklace from "../assets/gold-necklace.jpeg";
import silverBracelet from "../assets/silver-bracelet.jpeg";
import diamondRing from "../assets/diamond-ring.jpeg";
import emeraldEarrings from "../assets/emerald-earrings.jpeg";


const SampleItems = () => {
  const sampleItems = [
    {
      name: "Gold Necklace",
      image: goldNecklace, // Placeholder image URL
      price: "$499.99",
    },
    {
      name: "Silver Bracelet",
      image: silverBracelet, // Placeholder image URL
      price: "$299.99",
    },
    {
      name: "Diamond Ring",
      image: diamondRing , // Placeholder image URL
      price: "$999.99",
    },
    {
      name: "Emerald Earrings",
      image: emeraldEarrings, // Placeholder image URL
      price: "$699.99",
    },
  ];

  return (
    <div className="sample-items-container">
      <h2 className="text-center mb-12 text-4xl font-bold text-gray-800">
        Our Featured Jewelry Collection
      </h2>
      <div className="items-grid">
        {sampleItems.map((item, index) => (
          <div key={index} className="item-card">
            <img
              src={item.image}
              alt={item.name}
              className="item-image"
            />
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleItems;
