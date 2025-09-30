import React from "react";

const PatientMedicalAllergies = ({ title, desc }) => {
  return (
    <div className=" border-y-gray-300 bg-gray-50 px-4 py-2 rounded-lg mt-3">
      <div className="text-black text-sm font-medium">{title}</div>
      <div className="text-sm">{desc}</div>
    </div>
  );
};

export default PatientMedicalAllergies;
