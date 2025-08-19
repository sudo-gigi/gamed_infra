import React from "react";
import CardRating from "../../Contexts/CardRating";
import LearnMore from "../Button/LearnMore";
 import "../../Styles/CourseCard.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const LandingPageCourses = ({ image, title, description, rating }) => {
  return (
    <div id="custom-container">
      <div id="card-container">
        <img src={image} alt={title} id="card-img" />
        <div id="title-div">
          <h3 id="card-title"> {title} Basics of Html & CSS</h3>
          <p id="title-p">10 Modules</p>
        </div>
        <p id="card-description">
          {description} Learn to structure web pages with HTML, style them with
          CSS, and build responsive design, all in a hand-on, beginner friendly
          courses.
        </p>
        <CardRating value={rating} />
        <LearnMore />
      </div>
    </div>
  );
};

export default LandingPageCourses;
