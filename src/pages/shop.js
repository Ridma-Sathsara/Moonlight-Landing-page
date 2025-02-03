import React, { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import "../theme/shop.css";

export function Products() {
  const [category, setCategory] = useState("all");

  
  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  
  const categories = ["all", ...new Set(products.map(product => product.category))];

 
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="container">
      <h1 className="text-4xl font-serif mb-8">Our Collection</h1>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`category-btn ${category === cat ? 'selected' : ''}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
