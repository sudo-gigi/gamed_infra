import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardSideNav from "../Layouts/DashboardSideNav";
import DashboardLatestCourse from "../Layouts/DashboardLatestCourse";
import "../Styles/DashboardPageStyles.css";
import DashboardTopNav from "../Layouts/DashboardTopNav";
import CourseCards from "../Component/Card/CourseCards";

function Dashboard() {
  const navigate = useNavigate();

  const handleTrackSelection = () => {
    navigate("/track-selection");
  };

  return (
    <React.Fragment>
      <div id="dashboard-page-grid">
        <div id="dashboard-page-menu">
          <DashboardSideNav />
        </div>
        <div id="dashboard-page-grid-main">
          <DashboardTopNav />
          <DashboardLatestCourse />
          <CourseCards />

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#6200ee",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
              onClick={handleTrackSelection}
            >
              Select Track
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;

