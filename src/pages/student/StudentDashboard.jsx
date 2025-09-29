import React from "react";
import { NavBar } from "../../components/NavBar";
import StudentDashboardProfile from "../../components/StudentDashboardProfile";
import StudentDashboardSliderWindow from "../../components/StudentDashboardSliderWindow";

const StudentDashboard = () => {
  return (
    <div>
      <StudentDashboardProfile></StudentDashboardProfile>
      <StudentDashboardSliderWindow></StudentDashboardSliderWindow>
    </div>
  );
};

export default StudentDashboard;
