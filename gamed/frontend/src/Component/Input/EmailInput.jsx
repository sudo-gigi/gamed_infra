import React, { useState } from "react";
import "../../Styles/FormInputStyles.css";

const EmailInput = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const isLabelActive = isFocused || value.length > 0;

  return (
    <div className="flex-floating-label">
      <label htmlFor="email" className={isLabelActive ? "active" : ""}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
      />
    </div>
  );
};

export default EmailInput;

