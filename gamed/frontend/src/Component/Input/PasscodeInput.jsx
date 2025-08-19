import React, { useState, useRef } from "react";
import "../../Styles/PasscodeInput.css";

const PasscodeInput = ({ length = 5, onComplete }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  const inputRefs = useRef(new Array(length).fill(null));

  const handleChange = (index, e) => {
    const value = e.target.value;

    // To allow only numbers as input
    if (!/^[0-9]?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // to allow automatic move to the next box
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // to call complete when all boxes are filled
    if (newValues.every((digit) => digit !== "")) {
      onComplete(newValues.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newValues = [...values];
      if (newValues[index]) {
        newValues[index] = "";
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      setValues(newValues);
    }
  };

  return (
    <div className="passcode-container">
      {values.map((val, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={val}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="passcode-input"
        />
      ))}
    </div>
  );
};

export default PasscodeInput;
