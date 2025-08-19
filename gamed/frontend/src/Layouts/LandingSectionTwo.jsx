import React from 'react'
import LevelUp from '../Component/Card/LevelUp'
import UnlockAchievements from '../Component/Card/UnlockAchievements'
import "../Styles/LandingSectionTwo.css"
import CompeteWFriends from '../Component/Card/CompeteWFriends'

function LandingSectionTwo() {
  return (
    <React.Fragment>
      <section className='snap-section' id='landing-section-two'>
      <header id='land-section-two-header'>What To Expect?</header>
        <LevelUp />
        <UnlockAchievements />
        <CompeteWFriends />
        <div id='background-styling'></div>
      </section>
    </React.Fragment>
  )
}

export default LandingSectionTwo
