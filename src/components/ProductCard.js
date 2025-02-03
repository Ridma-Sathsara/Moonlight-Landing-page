import React from "react";
import { Link } from "react-router-dom";
import "../theme/shop.css";

export function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <img
        src={product.images[0]}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
