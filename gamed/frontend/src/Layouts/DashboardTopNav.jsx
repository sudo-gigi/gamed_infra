import React from "react";
import SearchInput from "../Component/Input/SearchInput";
import NoNotification from "../Component/Popups/NoNotification";
import bell from "../assets/images/bellNotificationIcon.svg";
import LogoutDropdown from "../Layouts/LogoutDropdown";
import "../Styles/DashboardTopNavStyles.css"
function DashboardTopNav() {
  return (
    <React.Fragment>
      <nav id="dashboard-header">
        <div>
          <SearchInput />
        </div>
        <div id="right-side-nav">
        <NoNotification>
            <img src={bell} alt="A bell Icon"></img>
          </NoNotification>
          <LogoutDropdown />
        </div>
      </nav>
    </React.Fragment>
  );
}

export default DashboardTopNav;
