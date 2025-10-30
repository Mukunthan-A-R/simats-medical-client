import { useState } from "react";
import { UsersIcon, HospitalIcon, PhoneIcon } from "lucide-react";
import DashboardClinicsTab from "./DashboardClinicsTab";
import StudentMyPatientTab from "./StudentMyPatientTab";
import DashboardEmergencyDoctors from "./DashboardEmergencyDoctors";

const TabButton = ({ isActive, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex flex-1 justify-center items-center px-4 py-3  font-medium text-sm ${
      isActive
        ? "bg-blue-100 text-blue-700 shadow-inner border-b border-b-blue-600 border-b-  2"
        : "bg-white text-gray-600 hover:bg-blue-50"
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

export default function StudentDashboardSliderWindow() {
  const [activeTab, setActiveTab] = useState("patients");

  const onNavigate = (path) => console.log("Navigate to:", path);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div
        className="flex mb-5 overflow-x-auto scrollbar-hide rounded-2xl w-full"
        style={{
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
          minWidth: "100%",
        }}
      >
        <TabButton
          isActive={activeTab === "patients"}
          onClick={() => setActiveTab("patients")}
          icon={<UsersIcon size={16} />}
          label="My Patients"
        />
        <TabButton
          isActive={activeTab === "clinic"}
          onClick={() => setActiveTab("clinic")}
          icon={<HospitalIcon size={16} />}
          label="Clinic"
        />
        <TabButton
          isActive={activeTab === "emergency"}
          onClick={() => setActiveTab("emergency")}
          icon={<PhoneIcon size={16} />}
          label="Emergency"
        />
      </div>

      <div className="tab-content">
        {/* My Patients Tab */}
        {activeTab === "patients" && (
          <StudentMyPatientTab></StudentMyPatientTab>
        )}

        {/* Clinic Tab */}
        {activeTab === "clinic" && <DashboardClinicsTab></DashboardClinicsTab>}

        {/* Emergency Tab */}
        {activeTab === "emergency" && (
          <DashboardEmergencyDoctors></DashboardEmergencyDoctors>
        )}
      </div>
    </div>
  );
}
