import { useState } from "react";
import { ClipboardListIcon, HeartPulseIcon, PillIcon } from "lucide-react";
import PatientCaseRecord from "./PatientCaseRecord";
import PatientViralsData from "../../patient/vitals/PatientVitalsData";
import PatientPrescriptionData from "./PatientPrescriptionData";

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
      {activeTab === "vitals" && <PatientViralsData />}

      {/* Medications Tab */}
      {activeTab === "meds" && <PatientPrescriptionData />}
    </div>
  );
};

export default PatientMedicalData;
