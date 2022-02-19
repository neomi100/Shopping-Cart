import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupUser } from "../store/userStore/userAction";

export default function SignupPage () {
  const [fields, setFields] = useState({ username: "", password: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const signup = async (ev) => {
    ev.preventDefault();
    await dispatch(signupUser({ username, password }));
    history.push("/");
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

        <button className="signup-btn">Sign Up!</button>
      </form>
    </section>
  );
};
