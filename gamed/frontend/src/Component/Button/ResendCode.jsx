import { useState, useEffect } from "react";

const ResendCode = ({ onResend }) => {
  const [timer, setTimer] = useState(60);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setIsDisabled(false);
    }
    return () => clearTimeout(countdown);
  }, [timer]);

  const handleResend = () => {
    setTimer(60); // Reset the timer
    setIsDisabled(true); // Disable the button again
    alert("A new code has been sent to your email!"); // Show an alert instead of displaying the message
    onResend(); // Call the resend function
  };

  return (
    <div>
      <p>
        If you did not receive a code,{" "}
        <a
          href="#"
          onClick={isDisabled ? (e) => e.preventDefault() : handleResend}
          style={{
            pointerEvents: isDisabled ? "none" : "auto",
            color: isDisabled ? "red" : "#3c0099",
          }}
        >
          Click here
        </a>{" "}
        {isDisabled && `in ${timer}s`}
      </p>
    </div>
  );
};

export default ResendCode;
