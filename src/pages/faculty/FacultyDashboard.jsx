import React from "react";
import FacultyDashboardProfile from "../../components/faculty/FacultyDashboardProfile";
import FacultyDashboardWindow from "../../components/faculty/FacultyDashboardWindow";
import FacultyDashboardApprovals from "../../components/faculty/FacultyDashboardApprovals";

const FacultyDashboard = () => {
  return (
    <div className="px-4 py-5 max-w-4xl mx-auto w-full">
      <FacultyDashboardProfile></FacultyDashboardProfile>
      <FacultyDashboardApprovals></FacultyDashboardApprovals>
      <FacultyDashboardWindow></FacultyDashboardWindow>
    </div>
  );
};

export default FacultyDashboard;
