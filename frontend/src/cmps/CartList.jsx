import React from "react";
import CartPreview from "./CartPreview";
export default function CartList({ products }) {
  console.log('products', products)

  // let prices = products.map((product) => product.PriceLabel);
  // let sum = 0;

  // for (let i = 0; i < prices.length; i++) {
  //   sum += prices[i];
  // }

  return (
    <div className="cart-list">
      <ul className="list">
        {products.length > 0 ? (
          products.map((product, idx) => (
            <li key={idx} className="preview-cart">
              <CartPreview product={product} />
            </li>
          ))
          
        ) : (
          <div>kiling~~</div>
        )}
      </ul>
        {/* <div>Total price: ${sum}</div> */}
    </div>
  );

}
