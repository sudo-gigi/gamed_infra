import React from 'react'
import "../../Styles/MiniLeaderBoardCardStyles.css"
import gold from "../../assets/images/crown-1stPlace.svg"
import silver from "../../assets/images/crown-2ndplace.svg"
import bronze from "../../assets/images/crown-3rdPlace.svg"
import dummyProfile from "../../assets/images/dummy-profile-picture.svg"
import { Link } from 'react-router-dom'

function MiniLeaderBoard() {
  return (
    <React.Fragment>
      <article id='leaderboard-card'>
        <header>
          LeaderBoard
        </header>
        <div id='leaderboard-card-content'>
          <div id='leaderboard-card-image-container'>
            <figure>
              <img className="crown" src={silver} alt='Orange graphic crown'></img>
              <img className="profile" src={dummyProfile} alt='User Profile'></img>
              <figcaption></figcaption>
            </figure>
            <figure style={{transform: 'translateY(-25px)'}}>
              <img className="crown" src={gold} alt='Green graphic crown'></img>
              <img className="profile" src={dummyProfile} alt='User Profile'></img>
              <figcaption>John 2000pts</figcaption>
            </figure>
            <figure>
              <img className="crown" src={bronze} alt='Yellow graphic crown'></img>
              <img className="profile" src={dummyProfile} alt='User Profile'></img>
              <figcaption></figcaption>
            </figure>
          </div>
          <Link to={""}><p id='leaderboard-redirect'>View LeaderBoard</p></Link>
        </div>
      </article>
    </React.Fragment>
  )
}

export default MiniLeaderBoard

