import React from "react";
import GoogleIcon from "../../assets/images/devicon_google.svg";
/* google signup */

const buttonStyles = {
  maxWidth: "608px",
  maxHeight: "56px",
  minWidth: "235px",
  minHeight: "45px",
  width: "100%",

  /* White color */
  backgroundColor: "#FEFDFF",
  /* Grey/601 */
  border: "0.5px solid #BEC2BF",
  borderRadius: "16px",

  /* Frame 56 */

  /* Auto layout */
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "1.75% 0px",
  margin: ".5rem",
  gap: "12px",

  /* Text/Medium */
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "19px",
  /* Primary black */
  color: "#323132",
};

/* devicon:google */

const googleIconStyles = {
  width: "24px",
  height: "23px",
};

function SignUpGoogle() {
  return (
    <React.Fragment>
      <button style={buttonStyles} id="google-redirect-button">
        Sign up with google
        <span>
          <img
            style={googleIconStyles}
            src={GoogleIcon}
            alt="This is the google logo"
          ></img>
        </span>
      </button>
    </React.Fragment>
  );
}

export default SignUpGoogle;
