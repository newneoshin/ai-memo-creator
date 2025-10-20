import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../authSlice";

import PATHS from "../../../shared/constants/paths.js";
import TextField from "../../../shared/components/TextField";
import SubmitButton from "../../../shared/components/SubmitButton";
import SquareButton from "../../../shared/components/SquareButton";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleClick = () => {
    navigate(PATHS.SIGNUP.INDEX);
  };

  useEffect(() => {
    if (token === null) {
      return;
    }
    navigate(PATHS.TODOS.INDEX);
  }, [token]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          type={"email"}
          name={"email"}
          value={email}
          placeholder={"e-mail"}
          onChange={handleInput}
        />
        <TextField
          type={"password"}
          name={"password"}
          value={password}
          placeholder={"password"}
          onChange={handleInput}
        />
        <SubmitButton text={"Log in"} onClick={() => {}} />
      </form>
      <SquareButton type="other" text="Sign up" onClick={handleClick} />
    </>
  );
};

export default Form;
