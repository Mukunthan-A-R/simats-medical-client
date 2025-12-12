import { useState } from "react";
import {
  BedIcon,
  CalendarDaysIcon,
  CalendarIcon,
  StethoscopeIcon,
  AlertTriangleIcon,
  ClockIcon,
  ActivityIcon,
  SearchIcon,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ClinicPatientCard from "./ClinicPatientCard";
import AdmittedPatientCardData from "./AdmittedPatientCardData";

export default function FacultyDashboardWindow() {
  const clinicPatients = [
    {
      id: "SMC-2023-0112",
      name: "Priya Sharma",
      age: 32,
      gender: "Female",
      appointmentTime: "09:00 AM",
      appointmentType: "Follow-up",
      lastVisit: "2023-08-20",
      photo:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      condition: "Hypertension",
      status: "Waiting",
    },
    {
      id: "SMC-2023-0118",
      name: "Mohammed Ismail",
      age: 68,
      gender: "Male",
      appointmentTime: "09:30 AM",
      appointmentType: "Consultation",
      lastVisit: "2023-09-05",
      photo:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      condition: "Diabetes Mellitus",
      status: "In Examination",
    },
    {
      id: "SMC-2023-0124",
      name: "Lakshmi Venkat",
      age: 42,
      gender: "Female",
      appointmentTime: "10:00 AM",
      appointmentType: "Follow-up",
      lastVisit: "2023-07-12",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      condition: "Asthma",
      status: "Scheduled",
    },
    {
      id: "SMC-2023-0129",
      name: "Sanjay Mehta",
      age: 55,
      gender: "Male",
      appointmentTime: "10:30 AM",
      appointmentType: "Consultation",
      lastVisit: "First Visit",
      photo:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      condition: "Chest Pain",
      status: "Scheduled",
    },
    {
      id: "SMC-2023-0136",
      name: "Kavita Sharma",
      age: 38,
      gender: "Female",
      appointmentTime: "11:00 AM",
      appointmentType: "Follow-up",
      lastVisit: "2023-08-30",
      photo:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      condition: "Hypothyroidism",
      status: "Scheduled",
    },
  ];

  const { faculrtId: doctorId } = useParams();

  // ---------------- State ----------------
  const [activeTab, setActiveTab] = useState("admitted");

  // ---------------- Navigate handler ----------------
  const navigate = useNavigate();

  const onNavigate = (url) => {
    navigate(`/faculty/my-patient/${doctorId}`);
    console.log("Navigate to:", url);
  };

  return (
    <div className="mb-4 rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-linear-to-b from-gray-50 to-gray-100">
        <TabButton
          active={activeTab === "admitted"}
          onClick={() => setActiveTab("admitted")}
          icon={<BedIcon size={14} className="mr-1.5" />}
        >
          My Admitted Patients
        </TabButton>
        <TabButton
          active={activeTab === "clinic"}
          onClick={() => setActiveTab("clinic")}
          icon={<CalendarDaysIcon size={14} className="mr-1.5" />}
        >
          Clinic View
        </TabButton>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-gray-100">
        <SearchBar
          placeholder={`Search ${
            activeTab === "admitted" ? "admitted patients" : "clinic patients"
          }...`}
        />
      </div>

      {/* Content */}
      <div className="p-2 space-y-2">
        {activeTab === "admitted" ? (
          <AdmittedPatientCardData />
        ) : (
          clinicPatients.map((p) => (
            <ClinicPatientCard key={p.id} patient={p} onNavigate={onNavigate} />
          ))
        )}
      </div>
    </div>
  );
}

/* ------------------ Subcomponents ------------------ */

function TabButton({ active, onClick, icon, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2.5 px-4 text-sm font-medium transition-all flex items-center justify-center border-b-2
        ${
          active
            ? "text-blue-600 border-blue-600 bg-linear-to-b from-blue-50 to-blue-100 shadow-inner"
            : "text-gray-500 hover:text-gray-700 border-transparent"
        }`}
    >
      {icon}
      {children}
    </button>
  );
}

function SearchBar({ placeholder }) {
  return (
    <div className="flex items-center px-3 py-2 rounded-lg border border-gray-200 shadow-inner bg-white/90">
      <SearchIcon size={14} className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}
