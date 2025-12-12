import { Trash2 } from "lucide-react";
import React from "react";
import { useMatch } from "react-router-dom";

const PatientMedicalAllergies = ({ title, desc }) => {
  const isPatientDashboard = useMatch("/patient/dashboard/:patientId");

  return (
    <div className=" border-y-gray-300 bg-gray-50 px-4 py-2 rounded-lg mt-3">
      <div className="flex justify-between items-center">
        <span>
          <div className="text-black text-sm font-medium">{title}</div>
          <div className="text-sm">{desc}</div>
        </span>
        {!isPatientDashboard && (
          <div
            onClick={() => {
              console.log("hi there");
            }}
          >
            <Trash2 size={15} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientMedicalAllergies;
