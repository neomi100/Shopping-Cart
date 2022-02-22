import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userStore/userAction";
import { setCart } from "../store/cartStore/cartAction";
import { useHistory } from "react-router-dom";

export default function Modal({ toggleModal }) {
  const { loggedinUser } = useSelector((state) => state.userModule);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async () => {
    history.push("/");
    dispatch(setCart([]));
    dispatch(logout());
  };

  return (
    <div className="modal">
      <div className="container">
        <NavLink
          to="/signup"
          activeClassName="active-nav"
          className="modal-btn btn"
        >
          Signup
        </NavLink>
        <NavLink
          to="/login"
          activeClassName="active-nav"
          className="modal-btn btn"
        >
          Login
        </NavLink>
        {loggedinUser && (
          <div className="modal-btn btn" onClick={onLogout}>
            Logout
          </div>
        )}
        <button className="close btn" onClick={() => toggleModal}>
          X
        </button>
      </div>
    </div>
  );
}
