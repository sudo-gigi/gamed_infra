import React from "react";
import { Link } from "react-router-dom";
import StarRatingForm from "../Input/StarRatingForm";
import "../../Styles/CourseCardsStyles.css";
import coverImage from "../../assets/images/courseCover.svg";
import dummyProfile from "../../assets/images/dummy-profile-picture.svg";
import LineProgressBar from "../Input/LineProgressBar";

function CourseCards() {
  return (
    <React.Fragment>
      <article id="dashboard-course-cards">
        <img id="course-card-image" src={coverImage} alt="Course Cover"></img>
        <header id="dashboard-course-cards-title">
          Build Responsive Websites from Scratch using HTML & CSS
        </header>
        <div id="ratin-and-profile-flex">
          <StarRatingForm />
          <figure>
            <img src={dummyProfile} alt="User's Profile"></img>
            <figcaption>Username</figcaption>
          </figure>
        </div>
        <div className="course-card-grid-container">
          <p className="cc-grid-styles" id="cc-grid-item-1">
            Lesson:
          </p>
          <p className="cc-grid-styles" id="cc-grid-item-2">
            Assessment:
          </p>
          <p className="cc-grid-styles" id="cc-grid-item-3">
            Time spent:
          </p>
          <p className="cc-grid-styles" id="cc-grid-item-4">
            Quiz:
          </p>
        </div>
        <div id="cc-progress-resume-flex">
          <LineProgressBar />
          <Link to={""}>Resume Course</Link>
        </div>
      </article>
    </React.Fragment>
  );
}

export default CourseCards;
