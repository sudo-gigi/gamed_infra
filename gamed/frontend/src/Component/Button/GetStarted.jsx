import React, { useState } from "react";

function GetStarted(variant) {
  const { bgColor, color } = variant;
  const [isHovered, setIsHovered] = useState(false);

  // All CSS for this button component
  const getStatrtedStyles = {
    backgroundColor: isHovered ? '#4DAA69' : bgColor,
    color: color,
    cursor: "pointer",
    fontFamily: "Raleway",
    fontWeight: "500",
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "18px",
    border: "none",
    width: "226px",
    boxShadow:
      "1.25rem 1.25rem 1.25rem -0.625rem #2B2D2B40 inset, 0.125rem 0.125rem 0.125rem rgba(236, 237, 236, 0.1) inset",
    // box-shadow: y axis x axis blur spread color | inset puts the shadow inside the item's border
  };

  return (
    <React.Fragment>
      <button style={getStatrtedStyles} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>Get Started</button>
    </React.Fragment>
  );
}

export default GetStarted;
