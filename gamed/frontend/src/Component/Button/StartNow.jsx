import React from 'react';
import "../../Styles/StartNowButtonStyles.css"
import { Link } from 'react-router-dom';

function StartNow() {
  return (
    <React.Fragment>
      <Link to={'/create-account'}><button id='start-now-button'>Start Now</button></Link>
    </React.Fragment>
  )
}

export default StartNow
