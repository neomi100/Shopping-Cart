import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

export default function Header() {
  const { loggedinUser } = useSelector((state) => state.userModule);
  const { cart } = useSelector((state) => state.cartModule);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="navbar">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          <h2 className="logo">ENJOY</h2>
        </NavLink>
      </div>
      <div className="user-header">
        {loggedinUser && (
          <div className="hello">Hello {loggedinUser.username}</div>
        )}
        <div className="patch">
          <div className="coverage"></div>
        </div>
        <NavLink exact to="/cart" activeClassName="active">
          <div className="cart"></div>
        </NavLink>
        {cart && cart.length > 0 ? (
          <div className="quantity-products">{cart.length}</div>
        ) : (
          <div className="no-products"></div>
        )}
        <div
          className="user-menu"
          onClick={() => setModalIsOpen((prev) => !prev)}
        >
          {loggedinUser ? (
            <img className="user-menu-img" src={loggedinUser.imgUrl} />
          ) : (
            <img
              className="user-menu-img"
              src={require("../assets/img/userGuest.jpg")}
            />
          )}
          {modalIsOpen && (
            <Modal setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
          )}
        </div>
      </div>
    </header>
  );
}
