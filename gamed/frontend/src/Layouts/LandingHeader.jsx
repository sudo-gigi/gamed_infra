import React from "react";
import "../Styles/LandingHeaderStyles.css";
import GetStarted from "../Component/Button/GetStarted";
import logo from "./../assets/images/WhiteLogo.svg"
import { Link } from 'react-router-dom';

function LandingHeader() {
  return (
    <React.Fragment>
      <nav id="landing-nav-header">
        <ul id="header-list">
          <li id="header-list-item-1">
            <a href="#header">
              <img src={logo} alt="" />
            </a>
          </li>
          <li id="header-list-item-2">
            <span className="header-span">About us</span>
            <span className="header-span">Courses</span>
            <span className="header-span">Pricing</span>
          </li>
          <li id="header-list-item-3">
              <Link to={"/login"}><span className="header-span">Login</span></Link>
            <Link to={"/create-account"}><GetStarted bgColor="#74FF9E" color="#3C0099" /></Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default LandingHeader;
