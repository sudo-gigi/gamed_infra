import React from "react";
import '../Styles/LeaderBoard.css';
import LeaderBoardBadge from "../assets/images/LeaderBoard_Badge.png";
import LeaderBoardProfile from "../assets/images/LeaderBoard_Profile.png";
import NotificationIcon from '../assets/images/Notification_Icon.png';
import RankOne from "../assets/images/Rank_One.png";
import RankTwo from "../assets/images/Rank_Two.png";
import RankThree from "../assets/images/Rank_Three.png";
import RankFour from "../assets/images/Rank_Four.png";
import LogoIcon from "../assets/images/Logo_Icon.png";
import DashboardIcon from "../assets/images/Dashboard_Icon.png";
import CourseIcon from "../assets/images/Course_Icon.png";
import TrophyIcon from "../assets/images/Trophy_Icon.png";
import ProfileIcon from "../assets/images/Profile_Icon.png";
import BookmarkIcon from "../assets/images/Bookmark_Icon.png";
import SettingIcon from "../assets/images/Setting_Icon.png";
import DashboardSideNav from "../Layouts/DashboardSideNav";


const LeaderBoard = () => {
  return (
    <div className="leaderboard-container">
      {/* Sidebar */}
      <DashboardSideNav />
      {/* Main Content */}
      <main className="leaderboard-main">
        {/* Header for images */}
        <div className="leaderboard-header-space">
          <div className="top-icons">
            <img src={NotificationIcon} alt="Notification" className="notification-icon" />
            <img src={LeaderBoardProfile} alt="Profile" className="profile-img" />
          </div>
          <img src={LeaderBoardBadge} alt="Badge" className="badge-img" />
        </div>

        {/* Leaderboard content */}
        <div className="leaderboard-content">
          <h2>LEADER BOARD</h2>
          {/* The leaderboard encourages users to earn points by completing courses and quizzes */}
          <p>Earn points by completing courses and acing quizzes</p>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Learners Rank</th>
                <th>Points Earned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="rank-profile">
                    <img src={RankOne} alt="Rank 1" className="rank-icon" />
                    <img src={LeaderBoardProfile} alt="Profile" className="row-profile-img" />
                    <span>Eva Jacobs</span>
                  </div>
                </td>
                <td>1300 Points</td>
              </tr>
              <tr>
                <td>
                  <div className="rank-profile">
                    <img src={RankTwo} alt="Rank 2" className="rank-icon" />
                    <img src={LeaderBoardProfile} alt="Profile" className="row-profile-img" />
                    <span>Eva Jacobs</span>
                  </div>
                </td>
                <td>1000 Points</td>
              </tr>
              <tr>
                <td>
                  <div className="rank-profile">
                    <img src={RankThree} alt="Rank 3" className="rank-icon" />
                    <img src={LeaderBoardProfile} alt="Profile" className="row-profile-img" />
                    <span>Eva Jacobs</span>
                  </div>
                </td>
                <td>900 Points</td>
              </tr>
              <tr>
                <td>
                  <div className="rank-profile">
                    <img src={RankFour} alt="Rank 4" className="rank-icon" />
                    <img src={LeaderBoardProfile} alt="Profile" className="row-profile-img" />
                    <span>Eva Jacobs</span>
                  </div>
                </td>
                <td>700 Points</td>
              </tr>
              <tr>
                <td>
                  <div className="rank-profile">
                    <span className="rank-number">5</span>
                    <img src={LeaderBoardProfile} alt="Profile" className="row-profile-img" />
                    <span>Eva Jacobs</span>
                  </div>
                </td>
                <td>500 Points</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default LeaderBoard;