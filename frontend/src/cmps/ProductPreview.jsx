import { NiceBtn } from "../cmps/NiceBtn";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { cartService } from "../services/cartService.js";
import { saveToCart, addToCart } from "../store/cartStore/cartAction";

export default function ProductPreview({ product }) {
  const { loggedinUser } = useSelector((state) => state.userModule);
  const { cart } = useSelector((state) => state.cartModule);
  // const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {


  }, [loggedinUser]);

  const addProduct = (product) => {
    console.log('cart', cart)
    dispatch(addToCart(product, loggedinUser));
    // // if(cart.length>0){

    //   console.log('product, cart', product, cart)
    //   const isProductInCart = cart.find(
    //     (productInCart) => productInCart._id === product._id
    //   );
    //   if (isProductInCart) {
    //     dispatch(updateProduct(product._id));
    //   }
    // // }
    // //First time the item is added to the cart
    //
    // return [...prev, { ...clickedItem, amount: 1 }];

    // cart.push(product._id);
    // console.log("cartaaaaddd", cart.productsIds);
  };

  return (
    <div className="product-preview">
      <img src={product.ProductImage} className="img" />
      <p>{product.ProductTitle}</p>
      <p>{product.Price}</p>
      <NiceBtn style={{ margin: "0 auto" }} onClick={() => addProduct(product)}>
        <img src="" />
        cart
      </NiceBtn>
    </div>
  );
}
