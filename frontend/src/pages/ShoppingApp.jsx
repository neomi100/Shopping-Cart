import Header from "../cmps/Header";
import HomePage from "./HomePage";
import MyCart from "./MyCart";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { cartService } from "../services/cartService";
import { productsService } from "../services/productsService";
import { setCart } from "../store/cartStore/cartAction";

export default function ShoppingApp() {
  const { cart, cartToShow } = useSelector((state) => state.cartModule);
  const { loggedinUser } = useSelector((state) => state.userModule);
  const [isFrist, setIsFrist] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getInitialCart();
  }, [loggedinUser]);

  const getInitialCart = async () => {
    let updateCart = cart;
    let updateCartToShow = cartToShow;
    if (!isFrist && loggedinUser && cart.length) {
      setIsFrist(true);
      const { _id: userId } = loggedinUser;
      updateCart = await cartService.addToCart(cart, userId);
      dispatch(setCart(updateCart));
    }
    if (loggedinUser) {
      setIsFrist(true);
      const { _id: userId } = loggedinUser;
      updateCart = await cartService.getCart(userId);
      dispatch(setCart(updateCart.productsIds));
    } else {
      setIsFrist(false);
      updateCart = localStorage.CART
        ? JSON.parse(localStorage.CART)
        : { userId: null, productsIds: [] };
      if (updateCart.productsIds.length) {
        updateCartToShow = await productsService.getProductsByIds(
          updateCart.productsIds
        );
      }
    }
  };

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/Signup" component={SignupPage} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/cart" component={MyCart} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}
