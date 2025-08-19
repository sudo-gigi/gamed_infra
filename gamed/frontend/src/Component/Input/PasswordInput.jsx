import React, { useState } from "react";
import "../../Styles/FormInputStyles.css";

function PasswordInput({ value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isLabelActive = isFocused || value !== "";

  return (
    <div className="flex-floating-label">
      <label htmlFor="password" className={isLabelActive ? "active" : ""}>
        Password
      </label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Input your password"
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default PasswordInput;

