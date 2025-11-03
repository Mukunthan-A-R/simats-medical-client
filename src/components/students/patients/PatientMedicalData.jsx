import React, { useState } from "react";
import {
  ClipboardListIcon,
  HeartPulseIcon,
  PillIcon,
  PlusIcon,
  XIcon,
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  UserCheckIcon,
} from "lucide-react";

// Simple tab button subcomponent for reusability
const TabButton = ({ isActive, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-3 text-sm font-medium transition-all ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600 bg-white"
        : "text-gray-500 hover:text-blue-600"
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

const PatientMedicalData = () => {
  const [activeTab, setActiveTab] = useState("records");

  // mock data for vitals & meds
  const vitals = [
    {
      date: "2025-11-01",
      time: "08:30 AM",
      bp: "122/80",
      hr: 76,
      temp: "98.6°F",
      spo2: "98%",
    },
    {
      date: "2025-11-02",
      time: "09:00 AM",
      bp: "125/82",
      hr: 80,
      temp: "98.7°F",
      spo2: "97%",
    },
  ];

  const medications = [
    {
      name: "Aspirin 75mg",
      dosage: "Once Daily",
      route: "Oral",
      start: "2025-10-30",
    },
    {
      name: "Atorvastatin 20mg",
      dosage: "Once Daily (Night)",
      route: "Oral",
      start: "2025-10-28",
    },
  ];

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
    <div className="mt-6">
      {/* Tab Navigation */}
      <div
        className="flex mb-5 overflow-x-auto scrollbar-hide items-center justify-center bg-white gap-4 sm:gap-5 md:gap-15"
        style={{
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
        }}
      >
        <TabButton
          isActive={activeTab === "records"}
          onClick={() => setActiveTab("records")}
          icon={<ClipboardListIcon size={16} />}
          label="Case Records"
        />
        <TabButton
          isActive={activeTab === "vitals"}
          onClick={() => setActiveTab("vitals")}
          icon={<HeartPulseIcon size={16} />}
          label="Vitals"
        />
        <TabButton
          isActive={activeTab === "meds"}
          onClick={() => setActiveTab("meds")}
          icon={<PillIcon size={16} />}
          label="Medications"
        />
      </div>

      {/* Case Records Tab */}
      {activeTab === "records" && (
        <div
          className="overflow-hidden mb-6 animate-fadeIn"
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow:
              "0 2px 5px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="px-5 py-4 border-b flex items-center justify-between"
            style={{
              backgroundImage: "linear-gradient(to bottom, #f8f9fb, #e9eef5)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 0 rgba(0,0,0,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex items-center">
              <ClipboardListIcon size={18} className="text-blue-600 mr-2.5" />
              <h3
                className="font-medium text-gray-800 text-base"
                style={{
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                Case Records
              </h3>
            </div>
          </div>

          {/* Case Records List */}
          <div className="divide-y divide-gray-100">
            {caseRecords.map((record) => (
              <div
                key={record.id}
                className="p-4 hover:bg-blue-50 transition-colors"
              >
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
                    <span className="font-medium">Findings:</span>{" "}
                    {record.findings}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Diagnosis:</span>{" "}
                    {record.diagnosis}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Treatment:</span>{" "}
                    {record.treatment}
                  </p>
                </div>

                <div className="mt-2 flex justify-between text-xs text-gray-600">
                  <div>
                    <UserIcon size={12} className="inline mr-1" /> Provider:{" "}
                    {record.provider}
                    {record.approver && (
                      <>
                        {" "}
                        • <UserCheckIcon
                          size={12}
                          className="inline mx-1"
                        />{" "}
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
        </div>
      )}

      {/* Vitals Tab */}
      {activeTab === "vitals" && (
        <div
          className="overflow-hidden mb-6 animate-fadeIn"
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow:
              "0 2px 5px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="px-5 py-4 border-b flex items-center"
            style={{
              backgroundImage: "linear-gradient(to bottom, #f8f9fb, #e9eef5)",
            }}
          >
            <HeartPulseIcon size={18} className="text-blue-600 mr-2.5" />
            <h3 className="font-medium text-gray-800 text-base">
              Vitals Tracker
            </h3>
          </div>

          <div className="p-4">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-2 px-3 text-left">Date</th>
                  <th className="py-2 px-3 text-left">Time</th>
                  <th className="py-2 px-3 text-left">BP</th>
                  <th className="py-2 px-3 text-left">HR</th>
                  <th className="py-2 px-3 text-left">Temp</th>
                  <th className="py-2 px-3 text-left">SpO₂</th>
                </tr>
              </thead>
              <tbody>
                {vitals.map((v, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 px-3">{v.date}</td>
                    <td className="py-2 px-3">{v.time}</td>
                    <td className="py-2 px-3">{v.bp}</td>
                    <td className="py-2 px-3">{v.hr} bpm</td>
                    <td className="py-2 px-3">{v.temp}</td>
                    <td className="py-2 px-3">{v.spo2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Medications Tab */}
      {activeTab === "meds" && (
        <div
          className="overflow-hidden mb-6 animate-fadeIn"
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow:
              "0 2px 5px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="px-5 py-4 border-b flex items-center"
            style={{
              backgroundImage: "linear-gradient(to bottom, #f8f9fb, #e9eef5)",
            }}
          >
            <PillIcon size={18} className="text-blue-600 mr-2.5" />
            <h3 className="font-medium text-gray-800 text-base">
              Medication History
            </h3>
          </div>

          <div className="p-4 grid gap-3">
            {medications.map((med, i) => (
              <div
                key={i}
                className="p-3 rounded-md border border-gray-200 bg-gray-50"
              >
                <h4 className="text-gray-900 font-medium">{med.name}</h4>
                <p className="text-gray-700 text-sm">
                  {med.dosage} — {med.route}
                </p>
                <p className="text-xs text-gray-500">Started: {med.start}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientMedicalData;
