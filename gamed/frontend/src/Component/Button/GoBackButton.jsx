import React from "react";
import Go_back_icon from "../../assets/images/Go_back_icon.svg";

const GoBackButton = () => {
  return (
    <>
      <div>
        <img src={Go_back_icon} alt="Go Back" />
        <a href="/login">Go back to Log In</a>
      </div>
    </>
  );
};

export default GoBackButton;
