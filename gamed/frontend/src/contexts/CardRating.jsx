import React from "react";
import "../Styles/CourseCard.css";

const CardRating = () => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} style={{ color: "#F2F247", cursor: "pointer" }}>
        ★
      </span>
    ));
  return (
    <div id="rating">
      <span id="rating-span" style={{ marginRight: "5px", fontWeight: "bold" }}>
        {" "}
        5.0{" "}
      </span>
      {stars}
    </div>
  );
};

export default CardRating;
