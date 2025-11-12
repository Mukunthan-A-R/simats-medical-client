import React from "react";
import { PillIcon } from "lucide-react";
import { formatDate } from "../../../../utils/constants";

const CurrentMedications = ({ medications = [] }) => {
  return (
    <div className="p-4">
      <h4 className="text-sm font-medium text-gray-700 mb-3">
        Current Medications
      </h4>

      {medications.length > 0 ? (
        <div className="space-y-3">
          {medications.map((med) => (
            <div
              key={med.medication_id}
              className="p-3 rounded-lg transition-all hover:shadow-md"
              style={{
                backgroundColor: "rgba(255,255,255,0.7)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex justify-between items-start">
                {/* Left side - Medication Info */}
                <div>
                  <h5 className="font-medium text-gray-800 flex items-center">
                    <PillIcon size={14} className="mr-2 text-blue-600" />
                    {med.medication_name} {med.dosage}
                  </h5>

                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Frequency:</span>{" "}
                      {med.frequency}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Duration:</span>{" "}
                      {formatDate(med.start_date)} to {formatDate(med.end_date)}
                    </p>
                    {med.instructions && (
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Instructions:</span>{" "}
                        {med.instructions}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right side - Status and Prescriber */}
                <div className="text-right">
                  <span
                    className="px-2 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor:
                        med.status === "approved"
                          ? "rgba(16, 185, 129, 0.1)"
                          : med.status === "pending"
                          ? "rgba(59, 130, 246, 0.1)"
                          : "rgba(239, 68, 68, 0.1)",
                      color:
                        med.status === "approved"
                          ? "#059669"
                          : med.status === "pending"
                          ? "#2563EB"
                          : "#B91C1C",
                    }}
                  >
                    {med.status.charAt(0).toUpperCase() + med.status.slice(1)}
                  </span>

                  <p className="text-xs text-gray-500 mt-2">
                    Prescribed by: {med.doctor_id}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <PillIcon size={24} className="mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-500">No medications found</p>
        </div>
      )}
    </div>
  );
};

export default CurrentMedications;
