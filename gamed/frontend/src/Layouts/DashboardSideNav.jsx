import React, { useState } from "react";
import "../Styles/DashboardSideNavStyles.css";
import Logo from "../assets/images/Dashboard logo.svg";
import { Link } from "react-router-dom";

function DashboardSideNav() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Course Page", path: "/course-page" },
    { name: "LeaderBoard", path: "/leaderboard" },
    { name: "TrackSelection", path: "/track-selection" },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav id="dashboard-side-nav" className="side-nav">
      <img
        src={Logo}
        alt="GamED logo of game up, down, left and right plus sign buttons as well the word GamEd"
      />
      <ul>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={activeItem === item.name ? "active" : ""}
            onClick={() => handleItemClick(item.name)}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DashboardSideNav;

