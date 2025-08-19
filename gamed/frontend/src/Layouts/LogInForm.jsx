import React, { useState } from "react";
import EmailInput from "../Component/Input/EmailInput";
import PasswordInput from "../Component/Input/PasswordInput";
import LogIn from "../Component/Button/LogIn";
import SignUpGoogle from "../Component/Button/SignUpGoogle";
import "../Styles/LoginForm.css";

const LogInForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await onSubmit(email, password);
      if (result?.error) setError(result.error);
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <fieldset id="login-fieldset">
      <legend>Log In</legend>
      <form id="login-form" onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="login-button-wrapper">
          <LogIn loading={loading} />
          <p id="redirect-to-log-in">
            Forgot password? <a href="/forgot-password.html">Click here</a>
          </p>
        </div>
        <div id="or-wrapper">
          <hr />
          <p> or </p>
          <hr />
        </div>
        <SignUpGoogle />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </fieldset>
  );
};

export default LogInForm;

