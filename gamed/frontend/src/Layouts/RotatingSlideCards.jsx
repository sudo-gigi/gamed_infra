import React, { useState, useEffect } from "react";
import EarnCard from "../Component/Card/EarnCard.jsx";
import JoiningLearningForums from "../Component/Card/JoiningLearningForums.jsx";
import TopLeaderBoardCard from "../Component/Card/TopLeaderBoardCard.jsx";
import '../Styles/RotatingSliderCardStyles.css'

const cards = [
  { id: 1, component: EarnCard },
  { id: 2, component: JoiningLearningForums },
  { id: 3, component: TopLeaderBoardCard },
];

function RotatingSlideCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div
      className="rotating-slide-cards-container"
      id="rotating-slide-cards-container"
      style={{
        position: "relative",
        minWidth: "300px",
        maxWidth: "600px",
        minHeight: "300px",
        maxHeight: "400px",
        top: "5%",
        left: "-52%"
      }}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`slide-card ${index === currentIndex ? "open" : ""}`}
          style={{
            position: "absolute" // To stack the cards
          }}
        >
          {index === currentIndex && <card.component />}
        </div>
      ))}
    </div>
  );
}

export default RotatingSlideCards;
