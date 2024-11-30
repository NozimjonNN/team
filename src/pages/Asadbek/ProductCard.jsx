import React from "react";


const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <button className="shop-collection">Shop Collection</button>
    </div>
  );
};

export default ProductCard;
