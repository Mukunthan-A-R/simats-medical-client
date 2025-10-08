import {
  AlertTriangleIcon,
  CheckIcon,
  HeartPulseIcon,
  XIcon,
} from "lucide-react";
import React from "react";

const PatientAdmissionCard = ({ patient }) => {
  const aquaButtonStyle =
    "rounded-full text-sm font-medium transition-all duration-200 active:scale-95";
  const aquaGlossEffect = "shadow-sm active:shadow-none";

  return (
    <div className="p-4 bg-white rounded-2xl my-4">
      {/* Patient Image and Name side by side */}
      <div className="flex items-center mb-4">
        <img
          src={patient.patientPhoto}
          alt={patient.patientName}
          className="h-16 w-16 rounded-full object-cover border-2 border-white mr-4 flex-shrink-0"
          style={{
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            {patient.patientName}
          </h3>
          <p className="text-sm text-gray-500">{patient.patientId}</p>
        </div>
      </div>
      {/* Department, Requester, Date */}
      <div className="flex justify-between items-center mb-4 px-1">
        <div className="text-center flex-1">
          <span className="block text-xs text-gray-500 mb-1">Department</span>
          <span className="block text-sm font-medium text-gray-800">
            {patient.department}
          </span>
        </div>
        <div className="text-center flex-1">
          <span className="block text-xs text-gray-500 mb-1">Requested by</span>
          <span className="block text-sm font-medium text-gray-800">
            {patient.requestedBy}
          </span>
        </div>
        <div className="text-center flex-1">
          <span className="block text-xs text-gray-500 mb-1">Date</span>
          <span className="block text-sm font-medium text-gray-800">
            {formatDate(patient.requestDate)}
          </span>
        </div>
      </div>
      {/* Primary Diagnosis */}
      <div className="w-full mb-3">
        <div
          className="w-full px-3 py-2 rounded-lg"
          style={{
            background:
              "linear-gradient(145deg, rgba(240,249,255,0.6), rgba(220,240,250,0.4))",
            border: "1px solid rgba(200,220,240,0.5)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          <span className="text-xs text-blue-600 font-medium flex items-center">
            <HeartPulseIcon size={12} className="mr-1.5" />
            Reason for Admission
          </span>
          <p className="text-sm font-medium text-gray-800 mt-0.5">
            {patient.reason}
          </p>
        </div>
      </div>
      {/* Medical Alerts */}
      {patient.alerts && patient.alerts.length > 0 && (
        <div className="w-full mb-4">
          <div
            className="w-full px-3 py-2 rounded-lg"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,240,240,0.7), rgba(255,220,220,0.5))",
              border: "1px solid rgba(240,200,200,0.6)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <span className="text-xs text-red-600 font-medium flex items-center">
              <AlertTriangleIcon size={12} className="mr-1.5" />
              Medical Alerts
            </span>
            <p className="text-sm font-medium text-red-700 mt-0.5">
              {patient.alerts.join(", ")}
            </p>
          </div>
        </div>
      )}
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          className={`px-5 py-2 rounded-full text-white ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: "linear-gradient(to bottom, #ff3b30, #ff453a)",
            boxShadow:
              "0 2px 4px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.25)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
          onClick={() => handleReject(patient)}
        >
          <XIcon size={16} className="inline-block mr-1.5" />
          Reject
        </button>
        <button
          className={`px-5 py-2 rounded-full text-white ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: "linear-gradient(to bottom, #34c759, #30d158)",
            boxShadow:
              "0 2px 4px rgba(16,185,129,0.3), inset 0 1px 0 rgba(255,255,255,0.25)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
          onClick={() => handleApprove(patient)}
        >
          <CheckIcon size={16} className="inline-block mr-1.5" />
          Admit
        </button>
      </div>
    </div>
  );
};

export default PatientAdmissionCard;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
