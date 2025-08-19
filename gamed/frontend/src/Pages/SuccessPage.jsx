import React from "react";
import { useNavigate } from "react-router-dom";
import successimg from "../assets/images/success.svg";
import closeimg from "../assets/images/close.svg";
import CustomButton from "../Component/Button/CustomButton";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <main className="success_container">
      <img src={closeimg} alt="close" className="success_close" />
      <img src={successimg} alt="success" style={{ width: 279, height: 279 }} />
      <p className="success_text">Your password reset is successful</p>
      <div onClick={() => navigate("/login")}> {/* Navigate to login page */}
        <CustomButton text="Log in" />
      </div>
    </main>
  );
}

export default SuccessPage;
