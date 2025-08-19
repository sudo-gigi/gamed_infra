import React from "react";
import '../styles/LeaderBoard.css'; 
import LeaderBoardBadge from "../assets/images/LeaderBoard_Badge.png"; 
import LeaderBoardProfile from "../assets/images/LeaderBoard_Profile.png";

const LeaderBoard = () => {
  return (
    <div className="leaderboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">GamEd</div>
        <div className="navbar">
          <span>Dashboard</span>
          <span>My Courses</span>
          <span>Leaderboard</span>
          <span>My Profile</span>
          <span>Bookmarks</span>
          <span>Settings</span>
        </div>

      </aside>

      {/* Main Content */}
      <main className="leaderboard-main">
        {/* Header for images */}
        <div className="leaderboard-header-space">
          <img src={LeaderBoardProfile} alt="Profile" className="profile-img" />
          <img src={LeaderBoardBadge} alt="Badge" className="badge-img" />
        </div>

        {/* Leaderboard content */}
        <div className="leaderboard-content">
          <h2>LEADER BOARD</h2>
          <p>Earn points by completing courses and acing quizzes</p>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Learners Rank</th>
                <th>Points Earned</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1. Eva Jacobs</td><td>1300 Points</td></tr>
              <tr><td>2. Eva Jacobs</td><td>1000 Points</td></tr>
              <tr><td>3. Eva Jacobs</td><td>900 Points</td></tr>
              <tr><td>4. Eva Jacobs</td><td>700 Points</td></tr>
              <tr><td>5. Eva Jacobs</td><td>500 Points</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default LeaderBoard;  
