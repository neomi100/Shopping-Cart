import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupUser } from "../store/userStore/userAction";

export default function SignupPage() {
  const [fields, setFields] = useState({ username: "", password: "" });
  const history = useHistory();
  const dispatch = useDispatch();
  const userNameRef = useRef();
  const userPasswordRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const signup = (ev) => {
    ev.preventDefault();
    if (userNameRef.current.value && userPasswordRef.current.value) {
      setErrorMsg("");
      dispatch(signupUser({ username, password }));
      history.push("/");
    } else {
      setErrorMsg(
        "Complete the registration - a username and password must be entered"
      );
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
      <form onSubmit={signup}>
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
        <button className="form-btn">Sign Up!</button>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
      </form>
    </section>
  );
}
