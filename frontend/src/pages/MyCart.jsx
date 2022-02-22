import { useSelector, useDispatch } from "react-redux";
import CartList from "../cmps/CartList";
import { useEffect } from "react";
import { productsService } from "../services/productsService";
import { setCartToShow } from "../store/cartStore/cartAction";

export default function MyCart() {
  const { cartToShow, cart } = useSelector((state) => state.cartModule);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [cart]);

  const getProducts = async () => {
    if (cart.length) {
      const productsToShow = await productsService.getProductsByIds(cart);
      dispatch(setCartToShow(productsToShow));
    }
  };

  if (!cart.length)
    return (
      <div className="empty-cart">
        ARE YOU KIDDING ME? WHY AM I STILL EMPTY?
      </div>
    );
  return (
    <div>
      <div className="page">
        <CartList products={cartToShow} />
      </div>
    </div>
  );
}
