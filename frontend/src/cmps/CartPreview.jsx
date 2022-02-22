import React from "react";

export default function CartPreview({ product }) {
  return (
    <div className="product-preview">
      <img src={product.ProductImage} className="img" />
      <div className="preview">
        <div className="product-ditails">
          <p>{product.ProductTitle}</p>
          <p className="price">{product.Price}</p>
        </div>
        <p className="amount">+{product.amount}</p>
      </div>
    </div>
  );
}
