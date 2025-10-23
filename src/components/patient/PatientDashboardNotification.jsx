import { PillIcon } from "lucide-react";
import React from "react";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

const PatientDashboardNotification = () => {
  return (
    <div
      className="overflow-hidden mb-4"
      style={{
        backgroundColor: "rgba(235,245,255,0.9)",
        borderRadius: "10px",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05), inset 0 -5px 10px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
        backgroundImage:
          "linear-gradient(to bottom, rgba(235,245,255,0.9), rgba(225,235,245,0.8))",
      }}
    >
      <div className="px-2 sm:px-4 py-3 flex justify-between items-center">
        <div className="flex items-center min-w-0 flex-1">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
              border: "1px solid rgba(0,0,0,0.3)",
            }}
          >
            <PillIcon size={16} className="text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center">
              <p className="text-xs text-gray-700">Medication Reminder</p>
              <span
                className="ml-2 text-xs px-2 py-0.5 rounded-full text-white"
                style={{
                  background: "linear-gradient(to bottom, #ff5a5a, #cc0000)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                Now
              </span>
            </div>
            <p className="text-sm font-medium text-gray-900 truncate">
              Lisinopril 10mg - Take 1 tablet with water
            </p>
          </div>
        </div>
        <button
          className={`text-xs px-3 py-1  rounded-full text-white font-medium ml-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
          //   onClick={handleMarkAsTaken}
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
            minWidth: "60px",
          }}
        >
          Taken
        </button>
      </div>
    </div>
  );
};

export default PatientDashboardNotification;
