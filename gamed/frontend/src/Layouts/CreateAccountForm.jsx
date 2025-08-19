import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { useAuth } from "../contexts/AuthContext"; // AuthContext if needed later
import SignUpGoogle from "../Component/Button/SignUpGoogle";
import CreateAccountButton from "../Component/Button/CreateAccountButton";
import UsernameInput from "../Component/Input/UsernameInput";
import PasswordInput from "../Component/Input/PasswordInput";
import EmailInput from "../Component/Input/EmailInput";
import "../Styles/CreateAccountForm.css";
import { registerUser } from "../API/Auth";

const CreateAccountForm = () => {
  const navigate = useNavigate(); // Navigation hook
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      // 👇 Corrected the order of arguments
      const result = await registerUser(email, password, username);
      if (result?.error) {
        setError(result.error);
      } else {
        setSuccessMessage("🎉 Account created successfully! Redirecting to login...");
        setTimeout(() => {
         navigate("/login"); // Go to login page
        }, 2000); // Wait 2 seconds before redirecting
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <fieldset id="create-account-fieldset">
        <legend>Create Account</legend>
        <form id="create-account-form" onSubmit={handleSubmit}>
          <EmailInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <UsernameInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          <div id="create-acc-button-wrapper">
            <CreateAccountButton loading={loading} />
            <p id="redirect-to-log-in">
              Have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                style={{ cursor: "pointer", color: "#007BFF" }}
              >
                Login
              </span>
            </p>
          </div>
          <div id="or-wrapper">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <SignUpGoogle />
        </form>
      </fieldset>
    </React.Fragment>
  );
};

export default CreateAccountForm;

