import React, { useState } from "react";
import PasscodeInput from "../Component/Input/PasscodeInput";
import VerifyButton from "../Component/Button/VerifyButton";
import ResendCode from "../Component/Button/ResendCode";
import "../Styles/ForgotPasswordForm.css";
import { verifyPasscode } from "../API/Auth";
import { resendVerificationCode } from "../API/Auth";

const PasscodeVerificationForm = () => {
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // to store the full passcode
  const handleComplete = (code) => {
    setPasscode(code);
    setMessage("");
  };

  // to handle resend code
  const handleResendCode = async () => {
    setLoading(true);
    setMessage(""); // Clear previous messages
    try {
      const result = await resendVerificationCode();
      setMessage("A new verification code has been sent to your email!");
    } catch (err) {
      setMessage("There was an error resending the code. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // to handle verification
  const handleVerify = async () => {
    if (passcode.length === 5) {
      setLoading(true);
      setMessage("");
      try {
        // Call the dummy API to simulate passcode verification
        const result = await verifyPasscode(passcode);
        setMessage("Passcode verified successfully! ✅");
        console.log(result); // You can handle the result further if needed
      } catch (err) {
        setMessage("Invalid passcode. Please check and try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      setMessage("Please enter a valid passcode.");
    }
  };
  return (
    <>
      <fieldset id="forgotPassword-form-fieldset">
        <legend>Hey, your password reset is 80% set</legend>
        <h2>We sent a verification code to your email, enter it below</h2>
        <form id="password-layout-form">
          <div id="password-form-container">
            <PasscodeInput length={5} onComplete={handleComplete} />
            {message && <p className="message">{message}</p>}
            <div id="submit-button-wrapper">
              <div id="redirect-to-checkout">
                <ResendCode onResend={handleResendCode} />
              </div>
              <VerifyButton
                isDisabled={passcode?.length !== 5 || loading}
                onVerify={handleVerify}
              />
            </div>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default PasscodeVerificationForm;
