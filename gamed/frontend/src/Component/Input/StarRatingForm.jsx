import React, { useState, useEffect } from "react";

const StarRating = ({
  ratingAggregate,
  totalRatings,
  onRate,
  interactive = false,
  size = "medium",
  color = "#f59e0b",
}) => {
  const [rating, setRating] = useState(ratingAggregate);
  const [hoverRating, setHoverRating] = useState(null);

  useEffect(() => {
    setRating(ratingAggregate);
  }, [ratingAggregate]);

  const handleRatingChange = (newRating) => {
    if (interactive && onRate) {
      onRate(newRating);
    }
    setRating(newRating);
  };

  const getStarIcon = (index) => {
    const adjustedRating = hoverRating !== null ? hoverRating : rating;
    const starSize = size === "small" ? 16 : size === "large" ? 32 : 24;

    if (adjustedRating >= index) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ height: starSize, width: starSize }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    } else if (adjustedRating > index - 0.5) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ height: starSize, width: starSize }}
        >
          <path d="M12 2v20"></path>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77"></polygon>
          <polygon points="12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ height: starSize, width: starSize }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex" }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <button
            key={index}
            style={{
              padding: 0,
              border: "none",
              background: "none",
              cursor: interactive ? "pointer" : "default",
              transition: interactive ? "transform 0.2s ease-in-out" : "none",
              ...(interactive ? { transform: "scale(1)" } : {}),
              ...(interactive && hoverRating === index
                ? { transform: "scale(1.1)" }
                : {}),
            }}
            onClick={() =>
              interactive ? handleRatingChange(index) : undefined
            }
            onMouseEnter={() =>
              interactive ? setHoverRating(index) : undefined
            }
            onMouseLeave={() =>
              interactive ? setHoverRating(null) : undefined
            }
            aria-label={`Rate ${index} star${index > 1 ? "s" : ""}`}
          >
            {getStarIcon(index)}
          </button>
        ))}
      </div>
      {totalRatings !== undefined && (
        <span style={{ marginLeft: "8px", fontSize: "14px", color: "#6b7280" }}>
          {/* ({totalRatings} ratings) */}
        </span>
      )}
    </div>
  );
};

const StarRatingForm = () => {
  const [ratingValue, setRatingValue] = useState(3.5);
  const [userRating, setUserRating] = useState(null);

  const handleRate = (newRating) => {
    console.log("User rated:", newRating);
    setUserRating(newRating);
    setRatingValue(newRating);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", 
        width: "fit-content",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <StarRating
          ratingAggregate={userRating !== null ? userRating : ratingValue}
          totalRatings={57}
          onRate={handleRate}
          interactive={true}
          size="small"
          // color="#ef4444"
        />
        {/* {userRating !== null && (
          <p style={{ color: "#4b5563" }}>Your rating: {userRating} stars</p>
        )} */}
      </div>
    </div>
  );
};

export default StarRatingForm;
