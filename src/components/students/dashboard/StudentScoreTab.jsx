import { AwardIcon } from "lucide-react";
import StudentTabScoreCategories from "./StudentTabScoreCategories";

const StudentScoreTab = () => {
  // Mock data for student scores and progress
  const studentProgress = {
    totalCasesRequired: 120,
    totalCasesCompleted: 72,
    categories: [
      {
        name: "Internal Medicine",
        completed: 28,
        required: 35,
        percentage: 80,
      },
      {
        name: "Pediatrics",
        completed: 15,
        required: 25,
        percentage: 60,
      },
      {
        name: "Surgery",
        completed: 12,
        required: 20,
        percentage: 60,
      },
      {
        name: "OB/GYN",
        completed: 10,
        required: 20,
        percentage: 50,
      },
      {
        name: "Psychiatry",
        completed: 7,
        required: 10,
        percentage: 70,
      },
      {
        name: "Emergency Medicine",
        completed: 0,
        required: 10,
        percentage: 0,
      },
    ],
  };

  return (
    <div className="bg-amber-50 pb-2 rounded-2xl overflow-hidden">
      <div
        className="px-5 py-4 border-b flex items-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f8f9fb, #e9eef5)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 0 rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex items-center">
          <AwardIcon size={18} className="text-blue-600 mr-2.5" />
          <h3
            className="font-medium text-gray-800 text-base"
            style={{
              textShadow: "0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            Graduation Requirements Progress
          </h3>
        </div>
      </div>

      {/* Scores */}
      <div className="p-4 sm:px-10">
        <div className="flex justify-between mb-2">
          <p className="text-sm font-medium text-gray-700">Overall Progress</p>
          <p className="text-sm font-medium text-gray-700">
            {studentProgress.totalCasesCompleted} /{" "}
            {studentProgress.totalCasesRequired} cases
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 rounded-full relative"
            style={{
              width: `${
                (studentProgress.totalCasesCompleted /
                  studentProgress.totalCasesRequired) *
                100
              }%`,
              background: "linear-gradient(to right, #4d90fe, #0066cc)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
                backgroundSize: "16px 16px",
                animation: "progressAnimation 1s linear infinite",
              }}
            ></div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1.5">
          {Math.round(
            (studentProgress.totalCasesCompleted /
              studentProgress.totalCasesRequired) *
              100
          )}
          % complete -{" "}
          {studentProgress.totalCasesRequired -
            studentProgress.totalCasesCompleted}{" "}
          cases remaining
        </p>
      </div>
      <StudentTabScoreCategories></StudentTabScoreCategories>
    </div>
  );
};

export default StudentScoreTab;
