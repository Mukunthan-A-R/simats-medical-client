import React from "react";
import { AgeCalc } from "../../../utils/userAgeCalculator";

const PatientProfileData = ({ patient }) => {
  const patientData = {
    id: patient?.patient_id,
    name: patient?.name,
    age: AgeCalc(patient?.dob),
    gender: patient?.gender,
    bloodGroup: patient?.blood_group,
    contact: patient?.phone_no,
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  };

  return (
    <div className="p-3 flex items-start bg-white rounded-2xl">
      <div className="relative mr-3 flex-shrink-0">
        <div
          className="h-14 w-14 rounded-full overflow-hidden"
          style={{
            border: "2px solid rgba(255,255,255,0.9)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)",
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
            <span className="font-medium">Contact:</span> {patientData.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileData;
