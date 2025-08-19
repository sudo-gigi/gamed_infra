import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/TestFailure.css"; 

const TestFailure = () => {
  const navigate = useNavigate();

  return (
    <div className="test-failure-container">
      <div className="emoji-icon">❌</div>
      <h2 className="fail-message">Oops! You didn't pass the test.</h2>
      <p className="fail-subtext">Don’t worry. You can always try again later!</p>
      <button className="retry-btn" onClick={() => navigate("/dashboard")}>
        Return to Dashboard
      </button>
    </div>
  );
};

export default TestFailure;
