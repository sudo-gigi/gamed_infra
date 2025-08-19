import React from "react";
/* Primary button 2 */

/* Auto layout */
const buttonStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "1.2% 2%",
  // margin: "1rem",
  gap: "0.75%",

  width: "100%",
  // height: "64px",

  backgroundColor: "#3C0099",
  boxShadow:
    "8px 8px 16px -6px rgba(190, 194, 191, 0.4), 2px 4px 6px -2px rgba(132, 136, 133, 0.25)",
  borderRadius: "18px",

  fontFamily: "'Raleway'",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "1.25rem",
  lineHeight: "1.5rem",
  /* identical to box height, or 120% */
  textAlign: "center",
  textTransform: "capitalize",

  color: "#74FF9E",

  minWidth: "235px",
  maxWidth: "550px",
  minHeight: "45px",
  maxHeight: "64px",
};

const buttonStretch = {
  flex: "1",
  order: "0",
  flexGrow: "1",
};

function CreateAccountButton() {
  return (
    <React.Fragment>
      <button type="submit" style={buttonStyles}>
        <div style={buttonStretch}>Create Account</div>
      </button>
    </React.Fragment>
  );
}

export default CreateAccountButton;
