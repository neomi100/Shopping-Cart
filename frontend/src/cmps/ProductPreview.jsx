import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { cartService } from "../services/cartService.js";
import { addToCart } from "../store/cartStore/cartAction";
import { setCart, setCartToShow } from "../store/cartStore/cartAction";
export default function ProductPreview({ product }) {
  const { loggedinUser } = useSelector((state) => state.userModule);
  const { cart } = useSelector((state) => state.cartModule);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addToCart(product, loggedinUser));
  };

  return (
    <div className="product-preview">
      <img src={product.ProductImage} className="img" />
      <div className="preview">
        <div className="product-ditails">
          <p>{product.ProductTitle}</p>
          <p className="price">{product.Price}</p>
        </div>
        <button
          className="add-to-cart"
          onClick={() => addProduct(product)}
        ></button>
      </div>
    </div>
  );
}

// const addProduct = (product) => {
//   // const isInCart = cart.some(
//   //   (productInCart) => productInCart === product._id
//   // );
//   // const addProduct = product;
//   // addProduct.amount++;

//   // console.log(isInCart, "זה מה שאני צריכה??");
//   //  const productToAdd=[...product, product.amount++]
//   // להוסיף את המוצר לעגלה
//   // לעדכן במוצרים לתוצוגה רק לאחר פילטר, שלא מאפשר תצוגה חוזרת של מוצר
//   // להוסיף כמות פעמים שהמוצר התווסף לעגלה
//   dispatch(addToCart(product, loggedinUser));
//   // dispatch(addToCart(addProduct, loggedinUser, isInCart));
//   // dispatch(setCartToShow(cart))
//   // console.log("product, cart preview", cart, addProduct);

//   // let inCart= false
//   // cart.forEach((productInCart) => {
//   //   console.log('product._id', product._id)
//   //   console.log('product._id', productInCart)
//   //   if (productInCart === product._id){
//   //     dispatch(updateProduct(product, loggedinUser))
//   //     inCart=true
//   //     console.log(inCart, product, 'forEch');

//   //   }
//   // });

//   // if(!inCart)dispatch(addToCart(product, loggedinUser));

//   //   console.log('isProductInCart', isProductInCart)
//   //   if (isProductInCart) dispatch(updateProduct(product))
//   //  else
//   // isProductInCart.amount++

//   // console.log("cart333", cart);
// };
