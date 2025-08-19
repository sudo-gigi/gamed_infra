import React from "react";
import StartNow from "../Button/StartNow";
import CardImage from "../../assets/images/startNow_card_image.svg";
import "../../Styles/StartNowCardStyles.css";

function UnlockAchievements() {
  return (
    <React.Fragment>
      <section className="section-two-cards" id="unlockAchivements-card">
        <img
          src={CardImage}
          alt="illustration of a green gaming controller with screen in the middle being held by two hands"
        ></img>
        <article id="unlockAchivements-card-content">
          <header id="unlockAchivements-card-content-header">
            Unlock Achievements{" "}
          </header>
          <p id="unlockAchivements-card-content-paragraph">
            Stay motivated with exciting challenges and milestones. Can you
            collect them all? We’ll find out.
          </p>
          <StartNow />
        </article>
      </section>
    </React.Fragment>
  );
}

export default UnlockAchievements;
