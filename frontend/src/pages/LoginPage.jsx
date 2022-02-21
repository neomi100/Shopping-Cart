import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userStore/userAction";

export default function LoginPage() {
  const history = useHistory();
  const [fields, setFields] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);
  const login = (ev) => {
    ev.preventDefault();
    history.push("/");
    dispatch(loginUser({ username, password }));
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
            ref={ref}
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
            value={password}
            name="password"
            onChange={inputHandler}
            type="password"
            placeholder="Password"
          />
        </label>

        <button className="login-btn">Login!</button>
      </form>
    </section>
  );
}
