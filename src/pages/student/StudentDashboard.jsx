import React from "react";
import { NavBar } from "../../components/NavBar";
import StudentDashboardProfile from "../../components/StudentDashboardProfile";
import StudentDashboardSliderWindow from "../../components/StudentDashboardSliderWindow";

const StudentDashboard = () => {
  return (
    <div className="px-4 py-5 max-w-4xl mx-auto w-full">
      <StudentDashboardProfile></StudentDashboardProfile>
      <StudentDashboardSliderWindow></StudentDashboardSliderWindow>
    </div>
  );
};

export default StudentDashboard;
