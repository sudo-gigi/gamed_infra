import React from "react";
import GetStarted from "../Button/GetStarted";
import BadgeLevel4 from "../../assets/images/BadgeLevel4.svg";
import { ThemeProvider } from "../../Contexts/ButtonTheme";
// Section is the overall card
// Article is the written content
// GetStarted is the button Component

const sectionEarnCardStyles = {
  backgroundColor: "#BEAADD",
  margin: "1rem",
  height: "68vh",
  width: "44vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "2.5rem",
  // box-shadow: y axis x axis blur spread color | inset puts the shadow inside the item's border | After each comma is a new layer of box-shadow
  boxShadow:
    "3.261rem 3.261rem 6.523rem -1.631rem #00000040 inset, 2.446rem 2.446rem 5.707rem -1.631rem #00000040 inset, 2.446rem 2.446rem 6.523rem -1.631rem #00000040 inset, 1.631rem 1.631rem 3.261rem -3.261rem #35363540, 1.631rem 1.631rem 3.261rem -3.261rem #35363540",
  minWidth: "300px",
  maxWidth: "600px",
  minHeight: "300px",
  maxHeight: "400px",
};

const divEarnCardContentStyles = {
  padding: "1.5% 0",
  width: "77%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "15px",
};

const imageBadgeLevel4Styles = {
  width: "31%",
};

const articleEarnCardStyles = {
  textAlign: "center",
};

const headerEarnCardStyles = {
  fontFamily: "Rakkas",
  fontWeight: "400",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  width: "100%",
};

const paragraphEarnCardStyles = {
  fontFamily: "Raleway",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: "#323132",
  width: "100%",
};
function EarnCard() {
  return (
    <React.Fragment>
      <section id="earn-card-main" style={sectionEarnCardStyles}>
        <div id="earn-card-content" style={divEarnCardContentStyles}>
          <img
            src={BadgeLevel4}
            alt="This is a badge for level 4"
            style={imageBadgeLevel4Styles}
          ></img>
          <article id="earn-card-title" style={articleEarnCardStyles}>
            <header style={headerEarnCardStyles}>
              EARN BADGES AS YOU LEARN
            </header>
            <p style={paragraphEarnCardStyles}>
              Complete lessons, unlock badges and celebrate your progress. Are
              you ready to start earning?
            </p>
          </article>
          <ThemeProvider><GetStarted variant="primary" /></ThemeProvider>
        </div>
      </section>
    </React.Fragment>
  );
}

export default EarnCard;
