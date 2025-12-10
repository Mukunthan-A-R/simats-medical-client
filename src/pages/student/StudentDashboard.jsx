import { useState } from "react";
import { useParams } from "react-router-dom";
import StudentDashboardSliderWindow from "../../components/students/dashboard/StudentDashboardSliderWindow";
import StudentScoreTab from "../../components/students/dashboard/StudentScoreTab";
import StudentDashboardProfile from "../../components/students/dashboard/StudentDashboardProfile";
import { useQuery } from "@tanstack/react-query";
import { fetchStudentById } from "../../services/studentService";

const StudentDashboard = () => {
  const { studentId } = useParams();
  const [scoresTab, setScoresTab] = useState(false);

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentData", studentId],
    queryFn: () => fetchStudentById(studentId),
    enabled: !!studentId,
  });

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen px-2 sm:px-4 py-3 sm:py-5 max-w-6xl mx-auto w-full ">
      <StudentDashboardProfile
        userData={userData}
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
