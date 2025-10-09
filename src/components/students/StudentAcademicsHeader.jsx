import { BadgeCheckIcon, CalendarIcon, GraduationCapIcon } from "lucide-react";
import React from "react";

const StudentAcademicsHeader = () => {
  const studentData = {
    id: "SMS-2023-1234",
    name: "Sarah Smith",
    year: 3,
    semester: 6,
    program: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    academicStanding: "Good Standing",
    gpa: 3.8,
    academicAdvisor: "Dr. James Wilson",
    disciplinaryActions: [
      {
        id: "disc-001",
        date: "2022-09-15",
        type: "Warning",
        reason: "Late submission of clinical reports",
        status: "Resolved",
        actionTaken: "Verbal warning issued by department head",
        resolution:
          "Student completed all pending reports and acknowledged the warning",
      },
    ],
    attendance: {
      overall: 92,
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="flex items-center p-4 ">
        <div className="relative mr-4">
          <div
            className="h-16 w-16 rounded-full overflow-hidden"
            style={{
              border: "2px solid rgba(255,255,255,0.9)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={studentData.photo}
              alt={studentData.name}
              className="h-full w-full object-cover"
            />
          </div>
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
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2
              className="text-xl font-semibold text-gray-800"
              style={{
                textShadow: "0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              {studentData.name}
            </h2>
            <div
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "linear-gradient(to bottom, #a7f3d0, #6ee7b7)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#065f46",
              }}
            >
              GPA: {studentData.gpa}/4.0
            </div>
          </div>
          <p className="text-gray-500 text-sm">Student ID: {studentData.id}</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-gray-600 text-sm">{studentData.program}</p>
            <div
              className="px-2 py-0.5 rounded-full text-xs flex items-center"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <GraduationCapIcon size={10} className="text-blue-600 mr-1" />
              <span className="text-xs font-medium text-blue-700">
                Year {studentData.year}, Sem {studentData.semester}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-4 py-2 border-t flex items-center justify-between"
        style={{
          backgroundColor: "rgba(0,100,255,0.05)",
          borderTop: "1px solid rgba(50,100,220,0.15)",
          backgroundImage:
            "linear-gradient(to bottom, rgba(200,220,255,0.3), rgba(180,200,255,0.2))",
        }}
      >
        <div className="flex items-center">
          <BadgeCheckIcon
            size={14}
            className="text-green-600 mr-2 flex-shrink-0"
          />
          <span className="text-sm font-medium text-gray-700">
            {studentData.academicStanding}
          </span>
        </div>
        <div className="flex items-center">
          <CalendarIcon
            size={14}
            className="text-blue-600 mr-2 flex-shrink-0"
          />
          <span className="text-sm text-gray-700">
            Attendance: {studentData.attendance.overall}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentAcademicsHeader;
