import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../store/userStore/userAction";
import { useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const { loggedinUser } = useSelector((state) => state.userModule);
  const { cart } = useSelector((state) => state.cartModule);
  const [modal, setModal] = useState(false);

  useEffect(() => {}, [loggedinUser,cart]);

  const onLogout = () => {
    dispatch(logout());
  };

  const modalUser = () => {
    setModal((prev)=>!prev);
  };

  return (
    <header className="app-header">
      <div className="navbar">
        <NavLink exact to="/" activeClassName="active">
          <div className="home"></div>
        </NavLink>
        <NavLink exact to="/cart" activeClassName="active">
          <div className="cart"></div>
        </NavLink>
        <div>cart length:{cart.length}</div>
      </div>
      <div className="user-header">
        <div className="user-menu" onClick={modalUser}>
          {loggedinUser && (
            <img className="user-menu-img" src={loggedinUser.imgUrl} />
          )}
          <img
            className="user-menu-img"
            src={require("../assets/imgs/userGuest.jpg")}
          />
          {modal && (
            <div className="modal">
              {/* <h1 className="shows-title"></h1> */}
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
        {loggedinUser&&<button className="btn" onClick={onLogout}>
          Logout
        </button>}
                <button className="close-modal-btn" onClick={()=>modalUser}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        {loggedinUser && loggedinUser.username}      
      </div>
    </header>
  );
}

export default Header;
