import React from "react";
import ForgotPasswordForm from "../Layouts/ForgotPasswordForm";
import "../Styles/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <>
      <div id="forgotPassword-container">
        <div id="forgotPassword-card">
          <div id="forgotPassword-content">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
};
// id="forgotpassowrd-card-wrapper"

export default ForgotPassword;
