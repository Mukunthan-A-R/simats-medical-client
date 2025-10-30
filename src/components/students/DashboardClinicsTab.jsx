import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  HeartPulseIcon,
  HospitalIcon,
  RefreshCwIcon,
  UsersIcon,
} from "lucide-react";
import React, { useState } from "react";

const DashboardClinicsTab = () => {
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

  const [selectedClinic, setSelectedClinic] = useState(currentClinic);
  const [showClinicSelector, setShowClinicSelector] = useState(false);

  return (
    <div className="overflow-hidden mb-6 rounded-lg shadow-sm bg-white animate-fadeIn">
      <div className="px-5 py-4  flex items-center justify-between bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="flex items-center">
          <HospitalIcon size={18} className="text-blue-600 mr-2.5" />
          <h3 className="font-medium text-gray-800 text-base">
            Current Clinic
          </h3>
        </div>
        <button
          //   onClick={handleChangeClinic}
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
                        <CheckCircleIcon size={14} className="text-white" />
                      ) : (
                        <ArrowRightIcon size={14} className="text-gray-500" />
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
          <UsersIcon size={14} className="mr-2 text-blue-600" /> Patients in
          Clinic Today
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
  );
};

export default DashboardClinicsTab;
