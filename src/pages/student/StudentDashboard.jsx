import React, { useState } from "react";
import StudentDashboardProfile from "../../components/students/StudentDashboardProfile";
import StudentDashboardSliderWindow from "../../components/students/StudentDashboardSliderWindow";
import { useParams } from "react-router-dom";
import StudentScoreTab from "../../components/students/StudentScoreTab";

const StudentDashboard = () => {
  const { studentId } = useParams();
  console.log("studentId :" + studentId);
  const [scoresTab, setScoresTab] = useState(false);

  return (
    <div className="flex flex-col min-h-screen px-2 sm:px-4 py-3 sm:py-5 max-w-6xl mx-auto w-full ">
      <StudentDashboardProfile
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
