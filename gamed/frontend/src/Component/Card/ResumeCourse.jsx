import React from "react";
import CustomButton from "../Button/CustomButton";
import "../../Styles/ResumeCourseCardStyles.css";
import { useAuth } from "../../contexts/AuthContext"; // ✅ Corrected import

const ResumeCourse = () => {
  const { user } = useAuth();

  return (
    <React.Fragment>
      <article id="resume-course-card">
        <header>Welcome Back {user?.username}</header>
        <p>
          Are you ready to level up? We have exciting courses for you this
          semester. Pick up from where you left off.
        </p>
        <CustomButton text={"Resume Course"} />
      </article>
    </React.Fragment>
  );
};

export default ResumeCourse;

