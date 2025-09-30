import React from "react";
import FacultyDashboardProfile from "../../components/faculty/FacultyDashboardProfile";
import FacultyDashboardWindow from "../../components/faculty/FacultyDashboardWindow";
import FaculrtDashboardApprovals from "../../components/faculty/FaculrtDashboardApprovals";

const FacultyDashboard = () => {
  return (
    <div className="px-4 py-5 max-w-4xl mx-auto w-full">
      <FacultyDashboardProfile></FacultyDashboardProfile>
      <FaculrtDashboardApprovals></FaculrtDashboardApprovals>
      <FacultyDashboardWindow></FacultyDashboardWindow>
    </div>
  );
};

export default FacultyDashboard;
