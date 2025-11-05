import React from "react";
import { PillIcon, PlusIcon, XIcon } from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../../../utils/constants";

const MedicationsHeader = ({ showAddForm = false, onToggle }) => {
  return (
    <div
      className="overflow-hidden mb-6 animate-fadeIn"
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow:
          "0 2px 5px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 border-b flex items-center justify-between"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f8f9fb, #e9eef5)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 0 rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        {/* Left: Icon + Title */}
        <div className="flex items-center">
          <PillIcon size={18} className="text-blue-600 mr-2.5" />
          <h3
            className="font-medium text-gray-800 text-base"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
          >
            Medications
          </h3>
        </div>

        {/* Right: Add / Cancel button */}
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1.5 rounded-md text-xs font-medium text-white flex items-center ${aquaButtonStyle} ${aquaGlossEffect}`}
            onClick={onToggle}
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            {showAddForm ? (
              <>
                <XIcon size={12} className="mr-1.5" />
                Cancel
              </>
            ) : (
              <>
                <PlusIcon size={12} className="mr-1.5" />
                Add Prescription
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicationsHeader;
