import {
  CheckCircleIcon,
  ClockIcon,
  UserCheckIcon,
  UserIcon,
} from "lucide-react";
import React from "react";

const PatientCaseRecord = () => {
  const caseRecords = [
    {
      id: 1,
      procedure: "Cardiac Examination",
      department: "Cardiology",
      findings: "Mild chest pain, normal ECG",
      diagnosis: "Angina",
      treatment: "Prescribed rest and medications",
      status: "Approved",
      provider: "Dr. Smith",
      approver: "Dr. Allen",
      date: "2025-11-01",
      time: "10:45 AM",
      grade: "A",
      approvedOn: "2025-11-02 14:15",
    },
  ];

  return (
    <div className="divide-y divide-gray-100">
      {caseRecords.map((record) => (
        <div key={record.id} className="p-4 hover:bg-blue-50 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                style={{
                  background:
                    record.status === "Approved"
                      ? "linear-gradient(to bottom, #4cd964, #2ac845)"
                      : "linear-gradient(to bottom, #ff9500, #ff5e3a)",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                {record.status === "Approved" ? (
                  <CheckCircleIcon size={14} className="text-white" />
                ) : (
                  <ClockIcon size={14} className="text-white" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {record.procedure}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  {record.date} • {record.time} • {record.department}
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-3 rounded-md text-sm"
            style={{
              backgroundColor: "rgba(240,245,250,0.5)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Findings:</span> {record.findings}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Diagnosis:</span> {record.diagnosis}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Treatment:</span> {record.treatment}
            </p>
          </div>

          <div className="mt-2 flex justify-between text-xs text-gray-600">
            <div>
              <UserIcon size={12} className="inline mr-1" /> Provider:{" "}
              {record.provider}
              {record.approver && (
                <>
                  {" "}
                  • <UserCheckIcon size={12} className="inline mx-1" />{" "}
                  Approver: {record.approver}
                </>
              )}
            </div>
            <div className="text-green-600 font-medium">
              Approved on: {record.approvedOn}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientCaseRecord;
