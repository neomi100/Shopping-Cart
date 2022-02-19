import React from "react";
import Header from "../cmps/Header";
import HomePage from "./HomePage";
import MyCart from "./MyCart";
import { useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { cartService } from "../services/cartService";
import { productsService } from "../services/productsService";
import { setCart, setCartToShow } from "../store/cartStore/cartAction";

export default function Shell() {
  let { cart, cartToShow } = useSelector((state) => state.cartModule);
  const { loggedinUser } = useSelector((state) => state.userModule);
 const dispatch = useDispatch()
  useEffect(() => {
    // אם היוזר מחובר לעשות עגלה של יוזר
    // אם היוזר לא מחובר אז לקבל עגלה ריקה
    // אם היוזר התחבר לאחר שהעגלה המקומית מלאה אז להעביר את המוצרים לעגלה של היוזר
    const getInitialCart = async () => {
      if (loggedinUser) {
        const { _id: userId } = loggedinUser;
        cart = await cartService.getCart(userId);        
        cartToShow = await productsService.getProductsByIds(cart.productsIds);
      } else {
        cart = localStorage.CART ? JSON.parse(localStorage.CART) : [];
        if (cart.length) {
          cartToShow = await productsService.getProductsByIds(cart)
          // const {cartToShow: d} = useSelector((state) => state.cartModule);
          // console.log('d from state', d);
        } else {
          cartToShow = []
        }
        console.log('my cart to show:', cartToShow);
        dispatch(setCart(cart))
        dispatch(setCartToShow(cartToShow))

        // cartToShow = cart.length
        //   ? await productsService.getProductsByIds(cart.productsIds)
        //   : [];
      }
    };
    getInitialCart();
  }, [loggedinUser]);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/Signup" component={SignupPage} />
            <Route path="/Login" component={LoginPage} /> */}
          <Route path="/cart" component={MyCart} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}
