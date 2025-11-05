import React, { useState } from "react";
import { AgeCalc } from "../../../utils/userAgeCalculator";
import { ChevronsDownIcon, ChevronsUpIcon } from "lucide-react";

const PatientProfileData = ({ patient }) => {
  const [isOpen, setIsOpen] = useState(false);

  const patientData = {
    id: patient?.patient_id,
    name: patient?.name,
    age: AgeCalc(patient?.dob),
    gender: patient?.gender,
    bloodGroup: patient?.blood_group,
    contact: patient?.phone_no,
    email: patient?.email,
    address: patient?.address,
    admissionDate: new Date(patient?.admission_date).toLocaleDateString(),
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  };

  return (
    <div className="p-3 bg-white rounded-2xl shadow-sm">
      {/* Top Section */}
      <div className="flex items-start">
        <div className="relative mr-3 flex-shrink-0">
          <div
            className="h-14 w-14 rounded-full overflow-hidden"
            style={{
              border: "2px solid rgba(255,255,255,0.9)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={patientData.photo}
              alt={patientData.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 truncate">
              {patientData.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1 sm:mt-0">
              ID: {patientData.id}
            </p>
          </div>
          <div className="mt-1 grid grid-cols-2 gap-x-4 text-sm">
            <p className="text-gray-600">
              <span className="font-medium">
                {patientData.age}, {patientData.gender}, Blood:{" "}
                {patientData.bloodGroup}
              </span>
            </p>
            <p className="text-gray-600 col-span-2">
              <span className="font-medium">Contact:</span>{" "}
              {patientData.contact}
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Toggle */}
      <div className="mt-3 border-t border-gray-200 pt-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          {isOpen ? "Hide Additional Details" : "Show Additional Details"}
          {isOpen ? (
            <ChevronsUpIcon className="w-4 h-4 ml-1" />
          ) : (
            <ChevronsDownIcon className="w-4 h-4 ml-1" />
          )}
        </button>

        {/* Accordion Content */}
        {isOpen && (
          <div className="mt-2 pl-1 text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-medium">Email:</span> {patientData.email}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {patientData.address}
            </p>
            <p>
              <span className="font-medium">Admission Date:</span>{" "}
              {patientData.admissionDate}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientProfileData;
