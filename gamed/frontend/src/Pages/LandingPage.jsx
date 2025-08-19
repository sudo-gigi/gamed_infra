import React from "react";
import "../Styles/LandingPage.css";
import LandingTopSection from "../Layouts/LandingTopSection";
import LandingSectionTwo from "../Layouts/LandingSectionTwo";
import LandingFooter from "../Layouts/LandingFooter";
import SocialLink from "../Layouts/SocialLink";

function LandingPage() {
  return (
    <React.Fragment>
      <div class="scroll-container">
        <LandingTopSection />
        <LandingSectionTwo />
        <SocialLink />
        {/* <CoursesCarousel /> */}
        <LandingFooter />
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
