import React, { useState, useEffect } from "react";
import SampleImage from "../assets/images/CardImage.svg";
import LandingPageCourses from "../Component/Card/LandingPageCoursesCard";
// import CourseCard from "../Component/Card/CourseCard";
import "../Styles/CoursesCarousel.css";

const cardData = [
  {
    title: "",
    description: "",
    rating: 5,
    Image: SampleImage,
  },

  {
    title: "",
    description: "",
    rating: 5,
    Image: SampleImage,
  },

  {
    title: "",
    description: "",
    rating: 5,
    Image: SampleImage,
  },

  {
    title: "",
    description: "",
    rating: 5,
    Image: SampleImage,
  },

  {
    title: "",
    description: "",
    rating: 5,
    Image: SampleImage,
  },
];

const CoursesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsToShow(1);
      else if (width < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex < cardData.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const visibleCards = cardData.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <section className="snap-section">
    <div id="available-course">
      <div>
        <h2 id="available-courses-heading">
          Available <span id="courses-underline">Courses</span>
        </h2>
      </div>
      <div>
        <div id="carousel-wrapper">
          <button
            onClick={handlePrev}
            id="prev-btn"
            disabled={currentIndex === 0}
          >
            ←
          </button>

          <div id="carousel-container">
            {visibleCards.map((item, index) => (
              <LandingPageCourses
                key={index}
                image={item.Image}
                title={item.title}
                description={item.description}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CoursesCarousel;
