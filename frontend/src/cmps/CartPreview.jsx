import React from "react";

export default function CartPreview({ product }) {
//  console.log(product.amount,'jf', product);
  return (
    <div className="product-preview">

      <img src={product.ProductImage} className="img" />
      <p>{product.ProductTitle}</p>
      <p className="">{product.Price}</p>
      <p>{product.amount}</p>
    </div>
  );
}
