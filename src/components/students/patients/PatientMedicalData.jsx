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

const PatientMedicalData = ({ patient }) => {
  const [activeTab, setActiveTab] = useState("records");

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
        <PatientCaseRecord
          assignmentId={patient?.assignment_id}
        ></PatientCaseRecord>
      )}

      {/* Vitals Tab */}
      {activeTab === "vitals" && (
        <PatientViralsData assignmentId={patient?.assignment_id} />
      )}

      {/* Medications Tab */}
      {activeTab === "meds" && (
        <PatientPrescriptionData assignmentId={patient?.assignment_id} />
      )}
    </div>
  );
};

export default PatientMedicalData;
