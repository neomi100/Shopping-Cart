import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userStore/userAction";
import { setCart } from "../store/cartStore/cartAction";
import { useHistory } from "react-router-dom";

export default function Modal({ setModalIsOpen, modalIsOpen }) {
  const { loggedinUser } = useSelector((state) => state.userModule);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async () => {
    history.push("/");
    dispatch(setCart([]));
    dispatch(logout());
  };

  return (
    <div className="dark-sceen" open={modalIsOpen}>
      <div className="modal">
        <div className="container">
          <NavLink
            to="/signup"
            activeClassName="active-nav"
            className="signup-btn"
          >
            Signup
          </NavLink>
          <NavLink
            to="/login"
            activeClassName="active-nav"
            className="login-btn"
          >
            Login
          </NavLink>
          {loggedinUser && (
            <div className="logout-btn" onClick={onLogout}>
              Logout
            </div>
          )}
          <button
            className="close-modal-btn"
            onClick={() => setModalIsOpen((prev) => !prev)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
