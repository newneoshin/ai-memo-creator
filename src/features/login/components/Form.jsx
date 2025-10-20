import { useState } from "react";

import TextField from "../../../shared/components/TextField";
import SubmitButton from "../../../shared/components/SubmitButton";
import SquareButton from "../../../shared/components/SquareButton";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    alert("submit");
  };

  return (
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
      <SquareButton type="other" text="Sign up" onClick={() => {}} />
    </form>
  );
};

export default Form;
