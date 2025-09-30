import React from "react";
import StudentDashboardProfile from "../../components/students/StudentDashboardProfile";
import StudentDashboardSliderWindow from "../../components/students/StudentDashboardSliderWindow";

const StudentDashboard = () => {
  return (
    <div className="px-4 py-5 max-w-4xl mx-auto w-full">
      <StudentDashboardProfile></StudentDashboardProfile>
      <StudentDashboardSliderWindow></StudentDashboardSliderWindow>
    </div>
  );
};

export default StudentDashboard;
