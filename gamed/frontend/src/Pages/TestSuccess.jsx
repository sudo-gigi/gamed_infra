import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/TestSuccess.css";

const TestSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location?.state?.score ?? 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 5000); // Auto redirect after 5s

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="test-success-container">
      <div className="emoji-icon">🎉</div>
      <h2 className="success-message">Test Completed Successfully!</h2>
      <p className="success-subtext">You’ll be redirected to your dashboard shortly.</p>
      
      {/* ✅ Display user's score here */}
      <p className="score-display">Your score: {score} out of 3</p>

      <button className="return-dashboard-btn" onClick={() => navigate("/dashboard")}>
        Return to Dashboard
      </button>
    </div>
  );
};

export default TestSuccess;

