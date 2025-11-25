import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import PatientSecondaryVitalDropDown from "./PatientSecondaryVitalDropDown";
import NewSecondaryVitalsForm from "../vitals/NewSecondaryVitalsForm";

const PatientSecondaryVitals = ({ assignmentId, isStaffRoute }) => {
  const [showSecondaryVitals, setShowSecondaryVitals] = useState(false);
  const [secondaryVital, setSecondaryVital] = useState(false);

  return (
    <>
      <div
        className="rounded-xl font-medium text-gray-800 my-4"
        style={{
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
        }}
      >
        <span className="flex flex-row p-4 justify-between items-center border-b-gray-500">
          Other Vitals Signs
          <div className="flex items-center gap-2">
            {!isStaffRoute && (
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium text-white`}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  border: "1px solid rgba(0,0,0,0.2)",
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
                onClick={() => setSecondaryVital(!secondaryVital)} // fixed
              >
                {secondaryVital ? "Close" : "Add"} {/* fixed */}
              </button>
            )}

            <ChevronDownIcon
              onClick={() => setShowSecondaryVitals(!showSecondaryVitals)}
              size={20}
              className={`text-gray-400 transition-transform ${
                showSecondaryVitals ? "rotate-180" : ""
              }`}
            />
          </div>
        </span>
      </div>

      {/* Show the form only if secondaryVital is true */}
      {secondaryVital && !isStaffRoute && (
        <NewSecondaryVitalsForm assignmentId={assignmentId} />
      )}

      <PatientSecondaryVitalDropDown
        assignmentId={assignmentId}
        showSecondaryVitals={showSecondaryVitals}
      />
    </>
  );
};

export default PatientSecondaryVitals;
