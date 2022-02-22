import Header from "../cmps/Header";
import HomePage from "./HomePage";
import MyCart from "./MyCart";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { cartService } from "../services/cartService";
import { setCart } from "../store/cartStore/cartAction";

export default function ShoppingApp() {
  const { cart } = useSelector((state) => state.cartModule);
  const { loggedinUser } = useSelector((state) => state.userModule);
  const [isFrist, setIsFrist] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getInitialCart();
  }, [loggedinUser]);

  const getInitialCart = async () => {
    let updateCart = cart;

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
      dispatch(setCart(updateCart));
    } else {
      setIsFrist(false);
      updateCart = localStorage.CART
        ? JSON.parse(localStorage.CART)
        : { userId: null, productsIds: [] };
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
