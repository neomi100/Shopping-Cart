import React from "react";
import Header from "../cmps/Header";
import HomePage from "./HomePage";
import MyCart from "./MyCart";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { cartService } from "../services/cartService";
import { productsService } from "../services/productsService";
import { setCart, setCartToShow } from "../store/cartStore/cartAction";

export default function Shell() {
  const { cart, cartToShow } = useSelector((state) => state.cartModule);
  const { loggedinUser } = useSelector((state) => state.userModule);
  const dispatch = useDispatch();
  useEffect(() => {
    // אם היוזר מחובר לעשות עגלה של יוזר
    // אם היוזר לא מחובר אז לקבל עגלה ריקה
    // אם היוזר התחבר לאחר שהעגלה המקומית מלאה אז להעביר את המוצרים לעגלה של היוזר

    getInitialCart();
  }, [loggedinUser]);

  const getInitialCart = async () => {
    let updateCart = cart;
    let updateCartToShow = cartToShow;
    if (loggedinUser) {
      const { _id: userId } = loggedinUser;
      updateCart = await cartService.addToCart(cart, userId);
      // updateCart = await cartService.getCart(userId);
      //  updateCartToShow = await productsService.getProductsByIds(updateCart.productsIds);
      // console.log(updateCartToShow,'עגלת המוצרים של היוזר');
      // לשמור את היוזר בלוקל סטורג
      // לעדכן את העגלה בלוקל סטורג לעגלה של היוזר
      // dispatch(setCart(updateCart));
      // dispatch(setCartToShow(updateCartToShow))
    } else {
      updateCart = localStorage.CART
        ? JSON.parse(localStorage.CART)
        : { userId: null, productsIds: [] };
      if (updateCart.productsIds.length) {
        // לא בטוח שצריך כבר להביא את הפרודקטים המלאים אולי אפשר ישר בכניסה לעגלה
        updateCartToShow = await productsService.getProductsByIds(
          updateCart.productsIds
        );
      }
      // dispatch(setCart(updateCart));
      // dispatch(setCartToShow(updateCartToShow));
    }
    // console.log('my cart to show:', cartToShow);
    // dispatch(setCart(updateCart))
    // cartToShow = cart.length
    //   ? await productsService.getProductsByIds(cart.productsIds)
    //   : [];
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
