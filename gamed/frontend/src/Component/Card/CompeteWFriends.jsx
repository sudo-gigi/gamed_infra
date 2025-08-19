import React from "react";
import StartNow from "../Button/StartNow";
import CardImage from "../../assets/images/startNow_card_image.svg";
import "../../Styles/StartNowCardStyles.css";

function CompeteWFriends() {
  return (
    <React.Fragment>
      <section className="section-two-cards" id="competeWF-card">
        <img
          src={CardImage}
          alt="illustration of a green gaming controller with screen in the middle being held by two hands"
        ></img>
        <article id="competeWF-card-content">
          <header id="competeWF-card-content-header">
            Compete With Friends
          </header>
          <p id="competeWF-card-content-paragraph">
            Join leaderboards, challenge peers, and celebrate wins together. Who
            will be the top learner this week?
          </p>
          <StartNow />
        </article>
      </section>
    </React.Fragment>
  );
}

export default CompeteWFriends;
