import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartList from "../cmps/CartList";
import { productsService } from "../services/productsService";

export default function MyCart() {
  const { cartToShow } = useSelector((state) => state.cartModule);
  // const { loggedinUser } = useSelector((state) => state.userModule);

  // if (loggedinUser&&loggedinUser.productsInCart.length === 0)
  if (cartToShow.length === 0)
    return (
      <div className="page-loading-screen">
        ARE YOU KIDDING ME? WHY AM I STILL EMPTY?
      </div>
    );
  return (
    <div>
      MyCart
      <div className="cart-page">
        <CartList products={cartToShow} />
      </div>
    </div>
  );
}
