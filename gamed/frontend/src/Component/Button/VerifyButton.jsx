import React from "react";
import "../../Styles/CheckoutButton.css";

const VerifyButton = ({ isDisabled, onVerify }) => {
  return (
    <div id="checkout-button-container">
      <div id="button-wrapper">
        <button onClick={onVerify} disabled={isDisabled} id="checkout-button">
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyButton;
