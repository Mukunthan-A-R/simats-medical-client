// StudentDashboardSliderWindow.jsx
import { useState } from "react";
import {
  UsersIcon,
  HospitalIcon,
  PhoneIcon,
  PhoneCall,
  Mail,
  MessageCircle,
} from "lucide-react"; // Adjust the icon import path if needed
import DashboardClinicsTab from "./DashboardClinicsTab";
import StudentMyPatientTab from "./StudentMyPatientTab";

// Mock data (trimmed)

const emergencyContacts = [
  {
    id: "doc-001",
    name: "Dr. Sarah Johnson",
    specialty: "Internal Medicine",
    phone: "+91 98765 43210",
    status: "available",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "doc-002",
    name: "Dr. Robert Miller",
    specialty: "Cardiology",
    phone: "+91 87654 32109",
    status: "available",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "doc-003",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    phone: "+91 76543 21098",
    status: "busy",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "doc-004",
    name: "Dr. Michael Chang",
    specialty: "Surgery",
    phone: "+91 65432 10987",
    status: "unavailable",
    photo:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "doc-005",
    name: "Dr. Jessica Williams",
    specialty: "Emergency Medicine",
    phone: "+91 54321 09876",
    status: "available",
    photo:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

// Tab button helper
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
          <div className="overflow-hidden mb-6 rounded-lg shadow-sm bg-white animate-fadeIn">
            <div className="px-5 py-4 flex items-center justify-between bg-gradient-to-b from-gray-100 to-gray-200">
              <div className="flex items-center">
                <PhoneIcon size={18} className="text-blue-600 mr-2.5" />
                <h3 className="font-medium text-gray-800 text-base">
                  Emergency Contacts
                </h3>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-2 sm:p-4 hover:bg-blue-50 transition-colors cursor-pointer flex items-center gap-y-2"
                >
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-7 sm:w-10 h-7 sm:h-10 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {contact.name}
                    </p>
                    <p className="text-xs text-gray-600 mb-1">
                      {contact.specialty} • {contact.phone}
                    </p>
                    <div className="flex flex-row gap-2">
                      <button
                        className="px-2 sm:px-3 py-1 flex items-center justify-center font-medium text-[9px] sm:text-xs gap-1 rounded-lg text-white"
                        style={{
                          background:
                            "linear-gradient(to bottom, #4d90fe, #0066cc)",
                          border: "1px solid rgba(0,0,0,0.2)",
                          boxShadow:
                            "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
                          color: "white",
                        }}
                      >
                        <PhoneCall size={12} />
                        Call
                      </button>
                      <button
                        className="px-2 sm:px-3 py-1 flex items-center justify-center font-medium text-[9px] sm:text-xs gap-1 rounded-lg  text-blue-800 "
                        style={{
                          background:
                            "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                          border: "1px solid rgba(0,0,0,0.15)",
                          boxShadow:
                            "0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
                          color: "#0066cc",
                        }}
                      >
                        <Mail size={12} />
                        Email
                      </button>
                      <button
                        className="px-2 sm:px-3 py-1 flex items-center justify-center font-medium text-[9px] sm:text-xs gap-1 rounded-lg  text-blue-800"
                        style={{
                          background:
                            "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                          border: "1px solid rgba(0,0,0,0.15)",
                          boxShadow:
                            "0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
                          color: "#0066cc",
                        }}
                      >
                        <MessageCircle size={12} />
                        Message
                      </button>
                    </div>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-[9px] sm:text-xs font-medium capitalize ${
                      contact.status === "available"
                        ? "bg-green-100 text-green-700"
                        : contact.status === "busy"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {contact.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
