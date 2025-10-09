import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import StudentAcademicsHeader from "./StudentAcademicsHeader";
import StudentAcademicStanding from "./StudentAcademicStanding";

const StudentAcademicsSection = () => {
  const navigate = useNavigate();

  // Mock data for student profile
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
      clinical: 95,
      lectures: 88,
      labs: 94,
      recentAbsences: [
        {
          date: "2023-05-10",
          reason: "Sick leave",
          approved: true,
        },
        {
          date: "2023-04-22",
          reason: "Family emergency",
          approved: true,
        },
        {
          date: "2023-03-15",
          reason: "Personal reasons",
          approved: false,
        },
      ],
    },
    emergencyContact: {
      name: "Robert Smith",
      relationship: "Father",
      phone: "+91 98765 43210",
      email: "robert.smith@example.com",
      address: "45 Park Avenue, Chennai, Tamil Nadu - 600040",
    },
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button
          className={`mr-2 w-8 h-8 flex items-center justify-center rounded-full       `}
          onClick={() => navigate(-1)}
          style={{
            background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <ChevronLeftIcon size={18} className="text-blue-700" />
        </button>
        <h2 className="text-xl text-blue-900 font-medium">Student Academics</h2>
      </div>
      <div className="flex flex-col gap-y-4">
        <StudentAcademicsHeader studentData={studentData} />
        <StudentAcademicStanding studentData={studentData} />
      </div>
    </div>
  );
};

export default StudentAcademicsSection;
