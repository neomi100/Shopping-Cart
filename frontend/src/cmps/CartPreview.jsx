import React from "react";

export default function CartPreview({ product }) {
//  console.log(product.amount,'jf', product);
  return (
    <div>

      <img src={product.ProductImage} className="img" />
      <p>{product.ProductTitle}</p>
      <p>{product.Price}</p>
      {product.amount&&<div>{product.amount}</div>}
    </div>
  );
}
