import React, { useState } from "react";
import "../../Styles/FormInputStyles.css";

function UsernameInput({ value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isLabelActive = isFocused || value !== "";

  return (
    <div className="flex-floating-label">
      <label htmlFor="username" className={isLabelActive ? "active" : ""}>
        Username
      </label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Input your username"
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default UsernameInput;

