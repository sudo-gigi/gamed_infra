import React from 'react'
import GetStarted from "../Component/Button/GetStarted";
import LandingHeader from "../Layouts/LandingHeader";
import "../Styles/LandingTopPageStyles.css";
import illustration from "../assets/images/Hero section illustration.svg";
import greenCheckIcon from "./../assets/images/tiny check icon green bgColor.svg"
import purpleCheckIcon from "./../assets/images/tiny check icon purple bgColor.svg"
import { Link } from 'react-router-dom';

function LandingTopSection() {
  return (
    <React.Fragment>
      <section className="snap-section" id='landing-section-top'>
          <LandingHeader />
          <article id="main-div">
            <header>
              Unlock New <span id="skills-span">Skills</span>, Earn Rewards
            </header>
            <p id="main-paragraph">
              Start your journey with engaging lessons, challenges, and rewards.
              and compete to be the best. Let’s make learning fun and rewarding!
            </p>
            <Link to={"/create-account"}>
              <GetStarted bgColor="#3C0099" color="#74FF9E" />
            </Link>
            <p id="foot-signs">
              <img src={greenCheckIcon} alt="green check mark icon"></img>Experienced tutors{" "}
              <img src={purpleCheckIcon} alt="green check mark icon"></img><span style={{ color: "#4DAA69" }}>Experienced tutors</span>{" "}
              <img src={greenCheckIcon} alt="green check mark icon"></img>Experienced tutors
            </p>
          </article>
          <div id="illustration-div">
            <img src={illustration} alt="landing page illustration"></img>
          </div>
        </section>
    </React.Fragment>
  )
}

export default LandingTopSection
