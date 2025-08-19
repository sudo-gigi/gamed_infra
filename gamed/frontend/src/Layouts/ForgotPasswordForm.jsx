import React, { useState } from "react";
import EmailInput from "../Component/Input/EmailInput";
import Submit from "../Component/Button/Submit";
import GoBackIcon from "../assets/images/Go_back_icon.svg";
import "../Styles/ForgotPasswordForm.css";
import { sendForgotPasswordRequest } from "../API/Auth";

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true);
    setMessage("");

    try {
      // Call the API to send the forgot password request
      const message = await sendForgotPasswordRequest(formData.email);
      setMessage(message); // Set the success message
    } catch (error) {
      setMessage(error.message); // Set the error message if the API call fails
    } finally {
      setLoading(false); // Set loading to false once the API call finishes
    }
  };

  return (
    <>
      <fieldset id="forgotPassword-form-fieldset">
        <legend>Oops, you forgot your Password?</legend>
        <h2>Don't worry! You'll get it in a jiffy</h2>

        <form onSubmit={handleSubmit} id="password-layout-form">
          <div id="password-form-container">
            <EmailInput value={formData.email} onChange={handleChange} />
            {message && <p className="message">{message}</p>}{" "}
            {/* Show success/error message */}
            <div id="submit-button-wrapper">
              <Submit isLoading={loading} disabled={loading} />{" "}
              {/* Disable button if loading */}
              <div id="redirect-to-checkout">
                <a href="/login">
                  <img src={GoBackIcon} alt="Go Back Icon" /> Go back to Log In
                </a>
              </div>
            </div>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default ForgotPasswordForm;
