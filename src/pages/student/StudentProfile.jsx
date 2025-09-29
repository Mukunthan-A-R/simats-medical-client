import React, { useState } from "react";
import {
  UserIcon,
  ClipboardListIcon,
  FileTextIcon,
  BedIcon,
  PillIcon,
  ChevronRightIcon,
  AlertTriangleIcon,
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  SearchIcon,
  CalendarDaysIcon,
  StethoscopeIcon,
  ActivityIcon,
} from "lucide-react";

const StudentProfile = ({ onNavigate }) => {
  const approvalCounts = {
    caseRecords: 8,
    dischargeSummaries: 3,
    admissions: 5,
    prescriptions: 12,
  };
  const [activeTab, setActiveTab] = useState("admitted");

  const admittedPatients = [
    {
      id: "SMC-2023-0042",
      name: "John Doe",
      age: 45,
      gender: "Male",
      admissionDate: "2023-05-15",
      diagnosis: "Unstable Angina",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Stable",
      alerts: ["Penicillin Allergy"],
    },
    {
      id: "SMC-2023-0078",
      name: "Ravi Kumar",
      age: 62,
      gender: "Male",
      admissionDate: "2023-09-15",
      diagnosis: "Chest pain and arrhythmia",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Under observation",
      alerts: ["Diabetes"],
    },
  ];

  const clinicPatients = [
    {
      id: "SMC-2023-0112",
      name: "Priya Sharma",
      age: 32,
      gender: "Female",
      appointmentTime: "09:00 AM",
      appointmentType: "Follow-up",
      condition: "Hypertension",
      photo:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Waiting",
    },
  ];

  const aquaButtonStyle =
    "relative overflow-hidden text-white font-medium transition-all active:translate-y-0.5 active:shadow-inner";
  const aquaGlossEffect =
    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50";

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "critical":
        return {
          bg: "linear-gradient(to bottom, #e34c32, #c53030)",
          text: "text-white",
          border: "1px solid rgba(185,28,28,0.5)",
        };
      case "under observation":
        return {
          bg: "linear-gradient(to bottom, #f59e0b, #d97706)",
          text: "text-white",
          border: "1px solid rgba(180,83,9,0.5)",
        };
      case "stable":
        return {
          bg: "linear-gradient(to bottom, #4cd964, #2ac845)",
          text: "text-white",
          border: "1px solid rgba(22,163,74,0.5)",
        };
      default:
        return {
          bg: "linear-gradient(to bottom, #8e8e93, #636366)",
          text: "text-white",
          border: "1px solid rgba(75,85,99,0.5)",
        };
    }
  };

  return (
    <div className="px-3 py-4 max-w-2xl mx-auto w-full space-y-4">
      {/* Student Profile Card */}
      <div
        className="overflow-hidden mb-4 cursor-pointer rounded-xl shadow-md border"
        style={{ backgroundColor: "white" }}
        onClick={() => onNavigate("student-profile")}
      >
        <div className="p-4 flex items-center">
          <div className="relative mr-3">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Student"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                border: "2px solid white",
                boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
              }}
              title="Student Member"
            >
              <BookOpenIcon size={12} className="text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 truncate">
              Welcome, John Smith
            </h2>
            <p className="text-xs text-gray-500">
              ID: STU-2023-0078 • Department: Computer Science
            </p>
          </div>
        </div>
      </div>

      {/* Approval Cards */}
      <div className="space-y-3">
        {[
          "Case Records",
          "Discharge Summaries",
          "Admissions",
          "Prescriptions",
        ].map((type, idx) => (
          <div
            key={type}
            className="overflow-hidden cursor-pointer rounded-xl shadow-md border bg-white bg-gradient-to-b from-white to-gray-50"
            onClick={() =>
              onNavigate(
                `student-notifications/${type.toLowerCase().replace(" ", "-")}`
              )
            }
          >
            <div className="px-4 py-3 flex justify-between items-center">
              <div className="flex items-center min-w-0 flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
                  style={{
                    background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                    border: "1px solid rgba(0,0,0,0.3)",
                  }}
                >
                  {idx === 0 && (
                    <ClipboardListIcon size={18} className="text-white" />
                  )}
                  {idx === 1 && (
                    <FileTextIcon size={18} className="text-white" />
                  )}
                  {idx === 2 && <BedIcon size={18} className="text-white" />}
                  {idx === 3 && <PillIcon size={18} className="text-white" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {type} Approvals
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600 truncate">
                      {approvalCounts[type.toLowerCase().replace(" ", "")]}{" "}
                      pending approval requests
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRightIcon size={16} className="text-gray-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Patient Tabs */}
      <div className="overflow-hidden rounded-xl shadow-md border bg-white">
        <div className="flex border-b border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200">
          <button
            className={`flex-1 py-2.5 text-sm font-medium ${
              activeTab === "admitted"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("admitted")}
          >
            Admitted Patients
          </button>
          <button
            className={`flex-1 py-2.5 text-sm font-medium ${
              activeTab === "clinic"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("clinic")}
          >
            Clinic View
          </button>
        </div>
        <div className="p-2 space-y-2">
          {(activeTab === "admitted" ? admittedPatients : clinicPatients).map(
            (patient) => (
              <div
                key={patient.id}
                className="rounded-lg cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden border shadow-sm bg-white bg-gradient-to-b from-white to-gray-50"
                onClick={() => onNavigate(`student-case-record/${patient.id}`)}
              >
                <div className="p-3 flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="relative mr-3 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full overflow-hidden border-2 shadow-sm">
                        <img
                          src={patient.photo}
                          alt={patient.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <p className="font-medium text-sm text-gray-900 truncate">
                          {patient.name}
                        </p>
                        {patient.age && (
                          <span className="text-xs font-normal text-gray-500 ml-1 truncate">
                            {patient.age}y, {patient.gender}
                          </span>
                        )}
                      </div>
                      {patient.admissionDate && (
                        <div className="flex items-center text-xs text-gray-600 mt-0.5">
                          <CalendarIcon size={9} className="mr-1" />
                          Admitted: {patient.admissionDate}
                        </div>
                      )}
                      {patient.diagnosis && (
                        <div className="flex items-center text-xs text-gray-600 mt-0.5">
                          <StethoscopeIcon size={9} className="mr-1" />
                          {patient.diagnosis}
                        </div>
                      )}
                    </div>
                  </div>
                  {patient.status && (
                    <div className="ml-2 flex-shrink-0">
                      <div
                        className="px-1.5 py-0.5 rounded-full text-xs font-medium text-center"
                        style={{
                          background: getStatusColor(patient.status).bg,
                          border: getStatusColor(patient.status).border,
                        }}
                      >
                        <span className={getStatusColor(patient.status).text}>
                          {patient.status}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
