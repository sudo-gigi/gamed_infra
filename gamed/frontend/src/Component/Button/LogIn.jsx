import React from "react";
import "./../../Styles/CheckoutButton.css";

const LogIn = ({ onClick }) => {
  return (
    <div id="checkout-button-container">
      <div id="button-wrapper">
        <button type="submit" onClick={onClick} id="checkout-button">
          Log In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
