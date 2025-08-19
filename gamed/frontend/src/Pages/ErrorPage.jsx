import React from "react";
import { useNavigate } from "react-router-dom";
import errorimg from "../assets/images/error.svg";
import closeimg from "../assets/images/close.svg";
import CustomButton from "../Component/Button/CustomButton";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="success_container">
      <img src={closeimg} alt="close" className="success_close" />
      <img src={errorimg} alt="error" style={{ width: 279, height: 279 }} />
      <p className="error_text">OOps, you have been blocked from logging in</p>
      <p className="error_small_text">Try again after 10 minutes</p>
      <div onClick={() => navigate("/login")}> {/* to navigate to the login page */}
        <CustomButton text="Log in" />
      </div>
    </main>
  );
}

export default ErrorPage;
