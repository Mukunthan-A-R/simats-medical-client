import React from "react";
import { GraduationCapIcon, AwardIcon, ChartBarIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchStudentById } from "../../../services/studentService";

export default function StudentProfileCard({ setScoresTab, userDataVal }) {
  const navigate = useNavigate();

  const { studentId } = useParams();

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentData", studentId],
    queryFn: () => fetchStudentById(studentId),
    enabled: !!studentId,
  });

  return (
    <div>
      {/* Student Profile Card */}
      <div
        className="overflow-hidden mb-6 cursor-pointer transform transition-transform duration-200 hover:scale-[1.01]"
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow:
            "0 2px 5px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04), inset 0 -5px 10px rgba(0,0,0,0.03)",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div className="p-6 flex items-center">
          {/* Avatar */}
          <div className="relative mr-5">
            <div
              className="h-16 w-16 rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(255,255,255,0.9)",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyq0k3fnDCyC_lSp06WK-TgtHT3DuZlMrue-bDnfpFd08qVhiK1AmRZRH37JGcx9RrRYY&usqp=CAU"
                alt="Student"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Student Category Indicator */}
            <div
              className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                border: "2px solid white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
              title="Medical Student"
            >
              <GraduationCapIcon size={14} className="text-white" />
            </div>
          </div>

          {/* Student Info */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-xl font-semibold text-gray-900 truncate"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
            >
              Welcome, {userData?.name}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              ID: {userData?.student_id} • Year: 3 • Semester: 6
            </p>
            <p className="text-sm text-gray-500 mt-0.5">{userData?.email}</p>
          </div>
        </div>

        {/* Academic Status */}
        <div
          onClick={() => navigate(`/student/academics/${studentId}`)}
          className="px-6 py-4 border-t"
          style={{
            backgroundColor: "rgba(0,100,255,0.05)",
            borderTop: "1px solid rgba(50,100,220,0.15)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(200,220,255,0.3), rgba(180,200,255,0.2))",
          }}
        >
          {/* GPA, Attendance, and Scores */}
          <div className="flex items-start justify-between mt-3">
            <div className="flex flex-col">
              <div className="flex items-center">
                <AwardIcon
                  size={16}
                  className="text-blue-500 mr-2 mt-0.5 shrink-0"
                />
                <div className="text-gray-700 text-sm font-medium">
                  Current GPA: 3.8/4.0
                </div>
              </div>
              <div className="flex items-center mt-1 ml-6">
                <div className="text-gray-700 text-sm">Attendance: 92%</div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setScoresTab();
              }}
              className="flex items-center text-sm text-blue-600 font-medium hover:text-blue-800"
            >
              <ChartBarIcon size={14} className="mr-1" />
              Scores
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
