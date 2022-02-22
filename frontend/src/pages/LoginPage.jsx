import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setError } from "../store/userStore/userAction";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const history = useHistory();
  const [fields, setFields] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const userNameRef = useRef();
  const userPasswordRef = useRef();
  const { systemMsg } = useSelector((state) => state.userModule);
  const { loggedinUser } = useSelector((state) => state.userModule);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    dispatch(setError());
    userNameRef.current.focus();
  }, []);

  const login = (ev) => {
    ev.preventDefault();
    dispatch(setError());
    if (userNameRef.current.value && userPasswordRef.current.value) {
      setErrorMsg("");
      dispatch(loginUser({ username, password }));
      if (loggedinUser) {
        history.push("/");
      }
    } else {
      setErrorMsg("A username and password must be entered");
    }
  };

  const inputHandler = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;

    setFields((prevFields) => ({ ...prevFields, [field]: value }));
  };

  const { username, password } = fields;
  return (
    <section className="signup-page">
      <form onSubmit={login}>
        <label>
          Username:
          <input
            ref={userNameRef}
            value={username}
            name="username"
            onChange={inputHandler}
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </label>
        <label>
          Password:
          <input
            ref={userPasswordRef}
            value={password}
            name="password"
            onChange={inputHandler}
            type="password"
            placeholder="Password"
          />
        </label>

        <button className="form-btn">Login!</button>
        {systemMsg && <div className="error-msg">{systemMsg}</div>}
        {errorMsg && <div className="error-msg">{errorMsg}</div>}

        <NavLink
          to="/signup"
          activeClassName="active-nav"
          className="signup-btn"
        >
          Signup
        </NavLink>
      </form>
    </section>
  );
}
