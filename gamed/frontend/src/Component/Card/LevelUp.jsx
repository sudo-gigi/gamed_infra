import React from "react";
import StartNow from "../Button/StartNow";
import CardImage from "../../assets/images/startNow_card_image.svg"
import "../../Styles/StartNowCardStyles.css"

function LevelUp() {
  return (
    <React.Fragment>
      <section className='section-two-cards' id="levelUp-card">
        <img src={CardImage} alt="illustration of a green gaming controller with screen in the middle being held by two hands"></img>
        <article id="levelUp-card-content">
          <header id="levelUp-card-content-header">Level Up Your Learning</header>
          <p id="levelUp-card-content-paragraph">
            Master new skills and watch your progress grow. Every lesson completed
            earns you points
          </p>
          <StartNow />
        </article>
      </section>
    </React.Fragment>
  );
}

export default LevelUp;
