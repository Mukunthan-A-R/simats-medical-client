import React from "react";
import StudentDashboardProfile from "../../components/students/StudentDashboardProfile";
import StudentDashboardSliderWindow from "../../components/students/StudentDashboardSliderWindow";
import { useParams } from "react-router-dom";

const StudentDashboard = () => {
  const { studentId } = useParams();
  console.log("studentId :" + studentId);

  return (
    <div className="px-4 py-5 max-w-6xl mx-auto w-full">
      <StudentDashboardProfile></StudentDashboardProfile>
      <StudentDashboardSliderWindow></StudentDashboardSliderWindow>
    </div>
  );
};

export default StudentDashboard;
