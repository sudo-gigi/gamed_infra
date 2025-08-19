import React from 'react'
import "../Styles/DashboardSummaryLayoutStyles.css"
import ResumeCourse from '../Component/Card/ResumeCourse'
import CourseProgress from '../Component/Card/CourseProgress'
import MiniLeaderBoard from '../Component/Card/MiniLeaderBoard'

function DashboardLatestCourse() {
  return (
    <React.Fragment>
    <section id='dashboard-summary-container'>
      <header>MY DASHBOARD</header>
      <div id='dashboard-summary-content'>
      <ResumeCourse/>
      <CourseProgress/>
      <MiniLeaderBoard/>
      </div>
      </section>
    </React.Fragment>
  )
}

export default DashboardLatestCourse
