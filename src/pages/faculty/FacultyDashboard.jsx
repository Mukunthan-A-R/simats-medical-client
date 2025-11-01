import React from "react";
import { userData } from "../../context/userAtom";
import { useRecoilValue } from "recoil";
import FacultyDashboardProfile from "../../components/faculty/dashboard/FacultyDashboardProfile";
import FacultyDashboardApprovals from "../../components/faculty/dashboard/FacultyDashboardApprovals";
import FacultyDashboardWindow from "../../components/faculty/dashboard/FacultyDashboardWindow";

const FacultyDashboard = () => {
  const userDataVal = useRecoilValue(userData);

  return (
    <div className="px-4 py-5 max-w-4xl mx-auto w-full">
      <FacultyDashboardProfile userData={userDataVal}></FacultyDashboardProfile>
      <FacultyDashboardApprovals></FacultyDashboardApprovals>
      <FacultyDashboardWindow></FacultyDashboardWindow>
    </div>
  );
};

export default FacultyDashboard;
