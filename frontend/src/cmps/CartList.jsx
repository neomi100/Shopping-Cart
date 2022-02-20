import React, { useEffect } from "react";
import CartPreview from "./CartPreview";
export default function CartList({ products }) {
  console.log("products", products);

  // useEffect(()=>{

  // },[])
  let prices = products.map((product) => product.PriceLabel);
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  return (
    <>
      {products.length > 0 && (
        <div className="cart-list">
          <div>Total price: ${sum}</div>
          <ul className="list">
            {products.map((product, idx) => (
              <li key={idx} className="preview-cart preview-container">
                <CartPreview product={product} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
