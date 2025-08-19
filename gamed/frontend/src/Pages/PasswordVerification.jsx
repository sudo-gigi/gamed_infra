import React, { useState } from "react";
import CustomButton from "../Component/Button/CustomButton";
import { useNavigate } from "react-router-dom";

function PasswordVerification() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  const validatePassword = (password) => {
    const lengthValid = password.length >= 8;
    const numberValid = /\d/.test(password);
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return lengthValid && numberValid && specialCharValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include a number and a special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // show loading spinner if everything is valid 
    setError("");
    setIsLoading(true);

    // for 2 seconds loading
    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="container">
      <div className="passwordverification__card">
        <h2 className="passwordverification__heading">And we’re almost set!</h2>
        <p className="passwordverification__text">
          Input your new password details below
        </p>

        <form onSubmit={handleSubmit}>
          <div className="passwordverification__formgroup">
            <label className="passwordverification__label">Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="passwordverification__password"
                placeholder="Input your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div className="passwordverification__formgroup">
            <label className="passwordverification__label">Confirm Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="passwordverification__password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {error && (
            <div style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>
              {error}
            </div>
          )}

          {isLoading ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <span>Submitting... ⏳</span>
            </div>
          ) : (
            <CustomButton text="Submit" />
          )}
        </form>
      </div>
    </div>
  );
}

export default PasswordVerification;
