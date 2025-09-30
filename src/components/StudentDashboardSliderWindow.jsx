// StudentDashboardSliderWindow.jsx
import React, { useState } from "react";
import {
  UsersIcon,
  HospitalIcon,
  PhoneIcon,
  RefreshCwIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  HeartPulseIcon,
  ClockIcon,
  ChevronDownIcon,
} from "lucide-react"; // Adjust the icon import path if needed

// Mock data (trimmed)
const assignedPatients = [
  { id: "SMC-2023-0042", name: "John Doe", age: 45, diagnosis: "Hypertension" },
  {
    id: "SMC-2023-0039",
    name: "Maria Garcia",
    age: 62,
    diagnosis: "Type 2 Diabetes",
  },
  {
    id: "SMC-2023-0051",
    name: "Robert Chen",
    age: 34,
    diagnosis: "Acute Bronchitis",
  },
];
const additionalPatients = [
  { id: "SMC-2023-0063", name: "Emily Wong", age: 29, diagnosis: "Migraine" },
  {
    id: "SMC-2023-0071",
    name: "James Smith",
    age: 53,
    diagnosis: "Lower Back Pain",
  },
  {
    id: "SMC-2023-0084",
    name: "Sophia Rodriguez",
    age: 41,
    diagnosis: "Asthma",
  },
  { id: "SMC-2023-0097", name: "David Kim", age: 67, diagnosis: "Arthritis" },
  {
    id: "SMC-2023-0105",
    name: "Olivia Johnson",
    age: 36,
    diagnosis: "Gastritis",
  },
];
const availableClinics = [
  {
    id: "clinic-001",
    name: "General Medicine Clinic",
    date: "May 28, 2023",
    time: "9:00 AM - 12:00 PM",
    location: "Outpatient Wing, 2nd Floor",
    attendingDoctor: "Dr. Sarah Johnson",
  },
  {
    id: "clinic-002",
    name: "Cardiology Clinic",
    date: "May 29, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Cardiac Care Center, 3rd Floor",
    attendingDoctor: "Dr. Robert Miller",
  },
  {
    id: "clinic-003",
    name: "Pediatrics Clinic",
    date: "May 30, 2023",
    time: "8:30 AM - 11:30 AM",
    location: "Children's Wing, 1st Floor",
    attendingDoctor: "Dr. Emily Rodriguez",
  },
];
const currentClinic = {
  name: "General Medicine Clinic",
  location: "Outpatient Wing, 2nd Floor",
  patients: [
    {
      id: "SMC-2023-0042",
      name: "John Doe",
      time: "9:15 AM",
      status: "Checked In",
      treatmentProvider: "Dr. Michael Chang",
    },
    {
      id: "SMC-2023-0039",
      name: "Maria Garcia",
      time: "9:45 AM",
      status: "In Progress",
      treatmentProvider: "Dr. Sarah Johnson",
    },
    {
      id: "SMC-2023-0051",
      name: "Robert Chen",
      time: "10:30 AM",
      status: "Waiting",
      treatmentProvider: "Dr. Emily Rodriguez",
    },
    {
      id: "SMC-2023-0063",
      name: "Emily Wong",
      time: "11:00 AM",
      status: "Waiting",
      treatmentProvider: "Dr. Robert Miller",
    },
    {
      id: "SMC-2023-0071",
      name: "James Smith",
      time: "11:30 AM",
      status: "Waiting",
      treatmentProvider: "Dr. Jessica Williams",
    },
  ],
};
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
        ? "bg-blue-100 text-blue-700 shadow-inner border-b border-b-blue-600 border-b-2"
        : "bg-white text-gray-600 hover:bg-blue-50"
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

export default function StudentDashboardSliderWindow() {
  const [activeTab, setActiveTab] = useState("patients");
  const [showAllPatients, setShowAllPatients] = useState(false);
  const [showClinicSelector, setShowClinicSelector] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(currentClinic);

  const handleChangeClinic = () => setShowClinicSelector(!showClinicSelector);
  const selectClinic = (clinic) => {
    setSelectedClinic(clinic);
    setShowClinicSelector(false);
  };
  const onNavigate = (path) => console.log("Navigate to:", path);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div
        className="flex mb-5 overflow-x-auto scrollbar-hide rounded-2xl w-full bg-red-500"
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
          <div className="overflow-hidden mb-6 rounded-lg shadow-sm bg-white animate-fadeIn">
            <div className="px-5 py-4  flex items-center justify-between bg-gradient-to-b from-gray-100 to-gray-200">
              <div className="flex items-center">
                <UsersIcon size={18} className="text-blue-600 mr-2.5" />
                <h3 className="font-medium text-gray-800 text-base">
                  Patients Assigned to Me
                </h3>
              </div>
              <button
                onClick={handleChangeClinic}
                className="px-3 py-1.5 rounded-md text-xs font-medium bg-gradient-to-b from-gray-100 to-gray-200 text-blue-600 flex items-center border border-gray-300 shadow-inner"
              >
                <RefreshCwIcon size={12} className="mr-1.5" /> Refresh List
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                ...assignedPatients,
                ...(showAllPatients ? additionalPatients : []),
              ].map((patient) => (
                <div
                  key={patient.id}
                  className="p-4 hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-between"
                  onClick={() =>
                    onNavigate(`patient-case-record/${patient.id}`)
                  }
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 flex items-center justify-center mr-3 shadow-inner border border-gray-300">
                      <UsersIcon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {patient.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {patient.age} years • {patient.diagnosis}
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon size={14} className="text-blue-600" />
                </div>
              ))}
            </div>
            <div className="px-5 py-3  flex justify-center bg-gradient-to-b from-gray-100 to-gray-200">
              <button
                onClick={() => setShowAllPatients(!showAllPatients)}
                className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-700 text-white flex items-center shadow-inner border border-gray-300"
              >
                <span>
                  {showAllPatients ? "Show Less" : "View All Patients"}
                </span>
                <ChevronDownIcon
                  size={16}
                  className={`ml-1.5 transition-transform duration-300 ${
                    showAllPatients ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Clinic Tab */}
        {activeTab === "clinic" && (
          <div className="overflow-hidden mb-6 rounded-lg shadow-sm bg-white animate-fadeIn">
            <div className="px-5 py-4  flex items-center justify-between bg-gradient-to-b from-gray-100 to-gray-200">
              <div className="flex items-center">
                <HospitalIcon size={18} className="text-blue-600 mr-2.5" />
                <h3 className="font-medium text-gray-800 text-base">
                  Current Clinic
                </h3>
              </div>
              <button
                onClick={handleChangeClinic}
                className="px-3 py-1.5 rounded-md text-xs font-medium bg-gradient-to-b from-gray-100 to-gray-200 text-blue-600 flex items-center border border-gray-300 shadow-inner"
              >
                <RefreshCwIcon size={12} className="mr-1.5" /> Change Clinic
              </button>
            </div>

            {/* Clinic Selector */}
            {showClinicSelector && (
              <div className="p-4 bg-blue-50 border-b border-blue-100 animate-slideDown">
                <h4 className="text-sm font-medium text-blue-800 mb-3">
                  Select a Clinic:
                </h4>
                <div className="space-y-2">
                  {availableClinics.map((clinic) => (
                    <div
                      key={clinic.id}
                      className="p-3 bg-white rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-50 transition-colors"
                      onClick={() => selectClinic(clinic)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {clinic.name}
                          </p>
                          <p className="text-xs text-gray-600 mt-0.5">
                            {clinic.date} • {clinic.time}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-xs text-gray-600 mr-2">
                            {clinic.attendingDoctor}
                          </p>
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              selectedClinic.id === clinic.id
                                ? "bg-green-600"
                                : "bg-gray-200"
                            }`}
                          >
                            {selectedClinic.id === clinic.id ? (
                              <CheckCircleIcon
                                size={14}
                                className="text-white"
                              />
                            ) : (
                              <ArrowRightIcon
                                size={14}
                                className="text-gray-500"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-5">
              <p className="text-lg font-medium text-gray-900 mb-2">
                {selectedClinic.name}
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <HospitalIcon size={14} className="text-blue-500 mr-2" />
                <p>Location: {selectedClinic.location}</p>
              </div>
            </div>

            <div className="px-5 py-3 bg-gradient-to-b from-gray-100 to-gray-200">
              <p className="text-sm font-medium text-gray-700 flex items-center">
                <UsersIcon size={14} className="mr-2 text-blue-600" /> Patients
                in Clinic Today
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {currentClinic.patients.map((patient) => (
                <div
                  key={patient.id}
                  className="p-4 hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-gray-400 to-gray-600 flex items-center justify-center mr-3 shadow-inner border border-gray-300">
                      {patient.status === "In Progress" ? (
                        <HeartPulseIcon size={16} className="text-white" />
                      ) : patient.status === "Checked In" ? (
                        <CheckCircleIcon size={16} className="text-white" />
                      ) : (
                        <ClockIcon size={16} className="text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {patient.name}
                        </p>
                        <p className="text-xs text-gray-500">{patient.id}</p>
                      </div>
                      <div className="flex justify-between mt-1">
                        <p className="text-xs text-gray-600">
                          Appointment: {patient.time}
                        </p>
                        <p
                          className={`text-xs font-medium ${
                            patient.status === "In Progress"
                              ? "text-blue-600"
                              : patient.status === "Checked In"
                              ? "text-green-600"
                              : "text-gray-600"
                          }`}
                        >
                          {patient.status}
                        </p>
                      </div>
                      <div className="mt-1 flex items-center">
                        <p className="text-xs text-gray-600">
                          <span className="font-medium">Provider:</span>{" "}
                          {patient.treatmentProvider}
                        </p>
                      </div>
                    </div>
                    <ArrowRightIcon size={16} className="text-gray-400 ml-2" />
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-3 bg-gradient-to-b from-gray-100 to-gray-200" />
          </div>
        )}

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
                  className="p-4 hover:bg-blue-50 transition-colors cursor-pointer flex items-center"
                >
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {contact.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {contact.specialty} • {contact.phone}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
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
