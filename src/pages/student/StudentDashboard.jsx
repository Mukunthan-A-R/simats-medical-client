import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userData } from "../../context/userAtom";
import StudentDashboardSliderWindow from "../../components/students/dashboard/StudentDashboardSliderWindow";
import StudentScoreTab from "../../components/students/dashboard/StudentScoreTab";
import StudentDashboardProfile from "../../components/students/dashboard/StudentDashboardProfile";

const StudentDashboard = () => {
  const { studentId } = useParams();
  const [scoresTab, setScoresTab] = useState(false);
  const [userDataVal, setUserDataVal] = useRecoilState(userData);

  return (
    <div className="flex flex-col min-h-screen px-2 sm:px-4 py-3 sm:py-5 max-w-6xl mx-auto w-full ">
      <StudentDashboardProfile
        userDataVal={userDataVal}
        setScoresTab={() => setScoresTab(!scoresTab)}
      ></StudentDashboardProfile>
      {!scoresTab ? (
        <StudentDashboardSliderWindow></StudentDashboardSliderWindow>
      ) : (
        <StudentScoreTab></StudentScoreTab>
      )}
    </div>
  );
};

export default StudentDashboard;
