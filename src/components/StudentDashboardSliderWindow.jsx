import React, { useState } from "react";
import {
  FiUsers,
  FiHome,
  FiPhone,
  FiArrowRight,
  FiRefreshCw,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiMail,
} from "react-icons/fi";

const aquaButtonStyle =
  "bg-gradient-to-b from-blue-400 to-blue-600 text-white font-medium";
const aquaGlossEffect = "shadow-md";

const TabButton = ({ isActive, onClick, icon, label }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md ${
      isActive ? aquaButtonStyle : "bg-gray-100 text-gray-700"
    }`}
    onClick={onClick}
  >
    {icon} {label}
  </button>
);

const StudentDashboardSliderWindow = () => {
  const [activeTab, setActiveTab] = useState("patients");
  const [showAllPatients, setShowAllPatients] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState({
    name: "Downtown Clinic",
    location: "123 Main St",
    patients: [
      {
        id: "P001",
        name: "John Doe",
        time: "10:00 AM",
        status: "In Progress",
        treatmentProvider: "Dr. Smith",
      },
      {
        id: "P002",
        name: "Jane Smith",
        time: "11:00 AM",
        status: "Checked In",
        treatmentProvider: "Dr. Lee",
      },
    ],
  });

  const assignedPatients = [
    { id: "PT001", name: "Alice Johnson", age: 22, diagnosis: "Flu" },
    { id: "PT002", name: "Bob Williams", age: 25, diagnosis: "Sprained Ankle" },
  ];

  const emergencyContacts = [
    {
      id: "D001",
      name: "Dr. House",
      specialty: "Diagnostics",
      department: "Internal",
      status: "available",
      phone: "555-1234",
      email: "house@example.com",
      availability: "24/7",
      photo: "https://via.placeholder.com/48",
    },
    {
      id: "D002",
      name: "Dr. Watson",
      specialty: "Surgery",
      department: "General",
      status: "busy",
      phone: "555-5678",
      email: "watson@example.com",
      availability: "9AM-5PM",
      photo: "https://via.placeholder.com/48",
    },
  ];

  const getStatusGradient = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-gradient-to-b from-blue-500 to-blue-700";
      case "Checked In":
        return "bg-gradient-to-b from-green-500 to-green-700";
      default:
        return "bg-gradient-to-b from-gray-400 to-gray-600";
    }
  };

  const getEmergencyStatusGradient = (status) => {
    switch (status) {
      case "available":
        return "bg-gradient-to-b from-green-500 to-green-700";
      case "busy":
        return "bg-gradient-to-b from-yellow-500 to-yellow-700";
      case "unavailable":
        return "bg-gradient-to-b from-red-500 to-red-700";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="flex justify-center my-10">
      {/* Container with fixed size matching user profile */}
      <div
        className="w-[500px] h-[650px] rounded-xl shadow-lg flex flex-col overflow-hidden"
        style={{ background: "white" }}
      >
        {/* Tabs */}
        <div className="flex mb-3 overflow-x-auto p-3">
          <TabButton
            isActive={activeTab === "patients"}
            onClick={() => setActiveTab("patients")}
            icon={<FiUsers size={16} />}
            label="My Patients"
          />
          <TabButton
            isActive={activeTab === "clinic"}
            onClick={() => setActiveTab("clinic")}
            icon={<FiHome size={16} />}
            label="Clinic"
          />
          <TabButton
            isActive={activeTab === "emergency"}
            onClick={() => setActiveTab("emergency")}
            icon={<FiPhone size={16} />}
            label="Emergency"
          />
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto px-5 pb-5">
          {/* Patients Tab */}
          {activeTab === "patients" && (
            <div>
              {assignedPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="p-4 hover:bg-blue-50 transition-colors rounded-lg mb-3 cursor-pointer flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {patient.name}
                    </p>
                    <p className="text-xs text-gray-500">{patient.id}</p>
                  </div>
                  <div className="text-sm text-gray-700">
                    {patient.age} yrs • {patient.diagnosis}
                  </div>
                </div>
              ))}
              <button
                onClick={() => setShowAllPatients(!showAllPatients)}
                className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium w-full"
              >
                {showAllPatients ? "Show Less" : "View All Patients"}
              </button>
            </div>
          )}

          {/* Clinic Tab */}
          {activeTab === "clinic" && (
            <div>
              <p className="text-lg font-medium text-gray-900 mb-2">
                {selectedClinic.name}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Location: {selectedClinic.location}
              </p>
              <div className="divide-y divide-gray-100">
                {selectedClinic.patients.map((patient) => (
                  <div
                    key={patient.id}
                    className="p-4 hover:bg-blue-50 transition-colors cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {patient.name}
                      </p>
                      <p className="text-xs text-gray-500">{patient.id}</p>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getStatusGradient(
                        patient.status
                      )}`}
                    >
                      {patient.status === "In Progress" && <FiHeart />}
                      {patient.status === "Checked In" && <FiCheckCircle />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Emergency Tab */}
          {activeTab === "emergency" && (
            <div>
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-4 hover:bg-blue-50 transition-colors rounded-lg mb-3 flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${getEmergencyStatusGradient(
                        contact.status
                      )}`}
                    >
                      {contact.status === "available" && <FiCheckCircle />}
                      {contact.status === "busy" && <FiClock />}
                      {contact.status === "unavailable" && <FiArrowRight />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {contact.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {contact.specialty} • {contact.department}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-md text-xs font-medium bg-green-500 text-white flex items-center gap-1">
                      <FiPhone /> Call
                    </button>
                    <button className="px-3 py-1.5 rounded-md text-xs font-medium bg-blue-200 text-blue-700 flex items-center gap-1">
                      <FiMail /> Email
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardSliderWindow;
