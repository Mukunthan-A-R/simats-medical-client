import { AlertTriangleIcon } from "lucide-react";
import React from "react";

const PatientInfoCard = ({ userData }) => {
  return (
    <div
      className="overflow-hidden mb-4 print:hidden"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05), inset 0 -5px 10px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
      }}
    >
      <div className="p-3 flex items-center">
        <div
          className="h-10 w-10 rounded-full overflow-hidden mr-3"
          style={{
            border: "2px solid rgba(255,255,255,0.9)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Patient"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2
            className="font-medium text-gray-800"
            style={{
              textShadow: "0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            {userData.name}
          </h2>
          <p className="text-xs text-gray-500">
            Patient ID: {userData.patient_id}
          </p>
          <p className="text-xs text-gray-500">{userData.admission_date}</p>
          <p className="text-xs text-gray-500">{userData.blood_group}</p>
          <p className="text-xs text-gray-500">{userData.gender}</p>
        </div>
      </div>
      {/* Medical Alert */}
      {/* <div
        className="px-3 py-2 border-t flex items-center"
        style={{
          backgroundColor: "rgba(255,0,0,0.05)",
          borderTop: "1px solid rgba(220,50,50,0.2)",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,200,200,0.3), rgba(255,180,180,0.2))",
          border: "1px solid rgba(220,50,50,0.2)",
        }}
      >
        <AlertTriangleIcon size={14} className="text-red-600 mr-2" />
        <span
          className="text-red-700 text-sm font-medium"
          style={{
            textShadow: "0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          Penicillin Allergy
        </span>
      </div> */}
    </div>
  );
};

export default PatientInfoCard;
