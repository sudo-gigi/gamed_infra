import React from "react";
import WhiteLogo from "../../assets/images/WhiteLogo.svg"

const cardStyles = {
  width: "29%",
  height: "18.75%",
  minWidth: "400px",
  minHeight: "250px",
  maxWidth: "471px",
  maxHeight: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:
    "linear-gradient(135.68deg, rgba(255, 255, 255, 0.4) 3.66%, rgba(255, 255, 255, 0.1) 100%)",
  boxShadow:
    "2px 2px 30px -6px rgba(87, 86, 86, 0.1), 2px 2px 40px -2px rgba(191, 187, 187, 0.1)",
  backdropFilter: "blur(18px)",
  /* Note: backdrop-filter has minimal browser support */
  borderRadius: "18.1646px",
};


const paragraphStyles = {
  /* Your learning adventure begins with us */

fontFamily: 'Raleway',
fontStyle: "normal",
fontWeight: "700",
fontSize: "1.25rem",
lineHeight: "1.5rem",
/* identical to box height, or 120% */

/* White color */
color: "#FEFDFF",

textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

}
function GamEd() {
  return (
    <React.Fragment>
      <section style={cardStyles} id="gamEd-createAcc-card">
        <img src={WhiteLogo} alt="This is the Company's White Logo Version"></img>
        <p style={paragraphStyles}>Your learning adventure begins with us</p>
      </section>
    </React.Fragment>
  );
}

export default GamEd;
