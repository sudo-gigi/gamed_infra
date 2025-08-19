import React from "react";
import GetStarted from "../Button/GetStarted";
import BadgeLevel5 from "../../assets/images/BadgeLevel5.svg";
import { ThemeProvider } from "../../Contexts/ButtonTheme";

const mainCardStyles = {
  backgroundColor: "#3C0099",
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

const cardContentStyles = {
  padding: "1.5% 0",
  width: "77%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "15px",
};

const cardImageStyles = {
  width: "31%",
};

const cardArticleStyles = {
  textAlign: "center",
};

const cardHeaderStyles = {
  fontFamily: "Rakkas",
  fontWeight: "400",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  width: "100%",
  color: "#FEFDFF",
};

const cardParagraphStyles = {
  fontFamily: "Raleway",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: "#FEFDFF",
  width: "100%",
};

function JoiningLearningForums() {
  return (
    <section style={mainCardStyles}>
      <div style={cardContentStyles}>
        <img
          src={BadgeLevel5}
          alt="This is the badge level 3"
          style={cardImageStyles}
        ></img>
        <article style={cardArticleStyles}>
          <header style={cardHeaderStyles}>JOIN LEARNING FORUMS</header>
          <p style={cardParagraphStyles}>
            Connect, share, and grow together! Join forums to discuss, ask
            questions, and learn from peers.
          </p>
        </article>
        <ThemeProvider><GetStarted variant="primary" /></ThemeProvider>
      </div>
    </section>
  );
}

export default JoiningLearningForums;
