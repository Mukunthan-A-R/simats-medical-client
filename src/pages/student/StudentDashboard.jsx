import React, { useEffect, useState } from "react";
import StudentDashboardProfile from "../../components/students/StudentDashboardProfile";
import StudentDashboardSliderWindow from "../../components/students/StudentDashboardSliderWindow";
import { useParams } from "react-router-dom";
import StudentScoreTab from "../../components/students/StudentScoreTab";
import { useRecoilState } from "recoil";
import { userData } from "../../context/userAtom";

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
        // <p>hi</p>
        <StudentDashboardSliderWindow></StudentDashboardSliderWindow>
      ) : (
        <StudentScoreTab></StudentScoreTab>
      )}
    </div>
  );
};

export default StudentDashboard;
