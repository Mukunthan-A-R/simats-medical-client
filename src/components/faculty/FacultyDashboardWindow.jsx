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

export default function FacultyDashboardWindow() {
  // ---------------- Mock Data ----------------
  const admittedPatients = [
    {
      id: "SMC-2023-0042",
      name: "John Doe",
      age: 45,
      gender: "Male",
      admissionDate: "2023-05-15",
      wardNumber: "W-301",
      bedNumber: "B-12",
      diagnosis: "Unstable Angina",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Stable",
      alerts: ["Penicillin Allergy"],
    },
    {
      id: "SMC-2023-0078",
      name: "Ravi Kumar",
      age: 62,
      gender: "Male",
      admissionDate: "2023-09-15",
      wardNumber: "W-205",
      bedNumber: "B-04",
      diagnosis: "Chest pain and arrhythmia",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Under observation",
      alerts: ["Diabetes"],
    },
    {
      id: "SMC-2023-0092",
      name: "Ananya Singh",
      age: 28,
      gender: "Female",
      admissionDate: "2023-09-17",
      wardNumber: "W-103",
      bedNumber: "B-08",
      diagnosis: "Recurrent seizures",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Critical",
      alerts: ["Pregnancy", "Epilepsy"],
    },
    {
      id: "SMC-2023-0105",
      name: "Vikram Reddy",
      age: 54,
      gender: "Male",
      admissionDate: "2023-09-18",
      wardNumber: "W-201",
      bedNumber: "B-15",
      diagnosis: "Chronic abdominal pain",
      photo:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      status: "Stable",
      alerts: [],
    },
  ];

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

  // ---------------- State ----------------
  const [activeTab, setActiveTab] = useState("admitted");

  // ---------------- Navigate handler ----------------
  const onNavigate = (url) => {
    console.log("Navigate to:", url);
  };

  return (
    <div className="mb-4 rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
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
        {activeTab === "admitted"
          ? admittedPatients.map((p) => (
              <AdmittedPatientCard
                key={p.id}
                patient={p}
                onNavigate={onNavigate}
              />
            ))
          : clinicPatients.map((p) => (
              <ClinicPatientCard
                key={p.id}
                patient={p}
                onNavigate={onNavigate}
              />
            ))}
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
            ? "text-blue-600 border-blue-600 bg-gradient-to-b from-blue-50 to-blue-100 shadow-inner"
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

function AdmittedPatientCard({ patient, onNavigate }) {
  return (
    <div
      onClick={() => onNavigate(`patient-case-record/${patient.id}`)}
      className="rounded-lg border border-gray-200 shadow-sm bg-gradient-to-b from-white to-gray-50 cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="p-3 flex justify-between">
        <div className="flex items-start">
          {/* Photo */}
          <div className="mr-3 h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow">
            <img
              src={patient.photo}
              alt={patient.name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Info */}
          <div className="min-w-0">
            <p className="font-medium text-sm text-gray-900 truncate">
              {patient.name}
            </p>
            <span className="text-xs text-gray-500">
              {patient.age}y, {patient.gender}
            </span>
            <div className="flex items-center text-xs text-gray-600 mt-0.5">
              <CalendarIcon size={10} className="mr-1" /> Admitted:{" "}
              {patient.admissionDate}
            </div>
            <div className="flex items-center text-xs text-gray-600 mt-0.5">
              <StethoscopeIcon size={10} className="mr-1" /> {patient.diagnosis}
            </div>
            {/* Alerts */}
            {patient.alerts?.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {patient.alerts.map((a, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700 border border-red-200"
                  >
                    <AlertTriangleIcon size={9} className="mr-0.5" /> {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Status */}
        {patient.status && (
          <div className="ml-2">
            <span className="inline-flex items-center justify-center w-20 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-700 border border-green-200 text-center leading-tight">
              {patient.status.toLowerCase() === "under observation" ? (
                <>
                  Under
                  <br />
                  observation
                </>
              ) : (
                patient.status
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ClinicPatientCard({ patient, onNavigate }) {
  return (
    <div
      onClick={() => onNavigate(`patient-case-record/${patient.id}`)}
      className="rounded-lg border border-gray-200 shadow-sm bg-gradient-to-b from-white to-gray-50 cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="p-3 flex items-center">
        <div className="mr-3 h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow">
          <img
            src={patient.photo}
            alt={patient.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center">
            <p className="font-medium text-sm text-gray-900 truncate">
              {patient.name}
            </p>
            <span className="ml-1.5 text-xs text-gray-500">({patient.id})</span>
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-0.5">
            {patient.age}y, {patient.gender}
            <span className="mx-1.5">•</span>
            <ClockIcon size={10} className="mr-1" /> {patient.appointmentTime}
          </div>
          <div className="flex items-center mt-0.5">
            <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
              {patient.appointmentType}
            </span>
            <span className="mx-1.5 text-xs text-gray-600">•</span>
            <span className="flex items-center text-xs text-gray-600">
              <ActivityIcon size={10} className="mr-1" /> {patient.condition}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
