import { PillIcon } from "lucide-react";
import React from "react";
import { aquaButtonStyle, aquaGlossEffect } from "../../../utils/constants";

const PatientDashboardNotification = () => {
  return (
    <div
      className="mb-3 sm:mb-4 w-full mx-auto"
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
      <div className="px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center gap-2 sm:gap-3">
        {/* Left Section */}
        <div className="flex items-center min-w-0 flex-1">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
              border: "1px solid rgba(0,0,0,0.3)",
            }}
          >
            <PillIcon size={14} className="text-white sm:size-4" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center flex-wrap sm:flex-nowrap">
              <p className="text-[10px] sm:text-xs text-gray-700">
                Medication Reminder
              </p>
              <span
                className="ml-1 sm:ml-2 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full text-white mt-1 sm:mt-0"
                style={{
                  background: "linear-gradient(to bottom, #ff5a5a, #cc0000)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                Now
              </span>
            </div>
            <p className="text-[12px] sm:text-sm font-medium text-gray-900 truncate">
              Lisinopril 10mg - Take 1 tablet with water
            </p>
          </div>
        </div>

        {/* Right Section (Button) */}
        <button
          className={`text-[11px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white font-medium ml-1 sm:ml-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
            minWidth: "50px",
          }}
        >
          Taken
        </button>
      </div>
    </div>
  );
};

export default PatientDashboardNotification;
