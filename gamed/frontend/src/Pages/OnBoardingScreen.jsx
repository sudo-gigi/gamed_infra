import React from "react";
import RotatingSlideCards from "../Layouts/RotatingSlideCards";
import "../Styles/OnBoardingScreen.css";
import whiteLogo from "../assets/images/WhiteLogo.svg";

function OnBoardingScreen() {
  return (
    <React.Fragment>
      <div className="onboarding-page-wrapper">
        <section id="left-section">
          <img
            id="onboarding-logo"
            src={whiteLogo}
            alt="The Company White Logo"
          ></img>
        </section>
        <section id="right-section">
          <article className="text-wrapper">
            <header id="onboarding-article-header">Welcome</header>
            <h5 id="onboarding-article-text">
              Your learning adventure is just about to take off!
            </h5>
          </article>
          <div className="onboarding-card-wrapper">
            <RotatingSlideCards />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default OnBoardingScreen;
