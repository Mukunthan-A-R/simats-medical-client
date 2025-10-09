import { AwardIcon, BookOpenIcon, UserIcon } from "lucide-react";
import React from "react";

const StudentAcademicStanding = ({ studentData }) => {
  return (
    <div>
      <div
        className="rounded-xl overflow-hidden shadow-md mb-6"
        style={{
          backgroundColor: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.2)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="px-4 py-3 border-b flex items-center"
          style={{
            backgroundImage: "linear-gradient(to bottom, #f8f9fb, #d9e1ea)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <AwardIcon size={16} className="text-blue-600 mr-2" />
          <h3
            className="font-medium text-gray-800"
            style={{
              textShadow: "0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            Academic Standing
          </h3>
        </div>
        <div className="p-4 space-y-4">
          <div
            className="p-3 rounded-lg"
            style={{
              backgroundColor: "rgba(249,250,251,0.7)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center mb-2">
              <BookOpenIcon size={14} className="text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Academic Progress
              </span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-500">
                    Overall Attendance
                  </span>
                  <span className="text-xs font-medium text-gray-700">
                    {studentData.attendance.overall}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${studentData.attendance.overall}%`,
                      background: "linear-gradient(to right, #4d90fe, #0066cc)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-500">
                    Clinical Attendance
                  </span>
                  <span className="text-xs font-medium text-gray-700">
                    {studentData.attendance.clinical}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${studentData.attendance.clinical}%`,
                      background: "linear-gradient(to right, #4d90fe, #0066cc)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <UserIcon size={14} className="text-blue-600 mr-2" />
            <span className="text-sm text-gray-700">Academic Advisor: </span>
            <span className="text-sm font-medium text-gray-800 ml-1">
              {studentData.academicAdvisor}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAcademicStanding;
