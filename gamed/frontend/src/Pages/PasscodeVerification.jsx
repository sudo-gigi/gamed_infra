import React from "react";
import PasscodeVerificationForm from "../Layouts/PasscodeVerificationForm";
import "../Styles/ForgotPassword.css";

const PasscodeVerification = () => {
  return (
    <>
      <div id="forgotPassword-container">
        <div id="forgotPassword-card">
          <div id="forgotPassword-content">
            <PasscodeVerificationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default PasscodeVerification;
