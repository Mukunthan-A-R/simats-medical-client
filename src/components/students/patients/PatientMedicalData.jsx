import { useState } from "react";
import { ClipboardListIcon, HeartPulseIcon, PillIcon } from "lucide-react";
import PatientCaseRecord from "./PatientCaseRecord";

const TabButton = ({ isActive, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-3 font-medium transition-all ${
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
      {activeTab === "records" && <PatientCaseRecord></PatientCaseRecord>}

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
