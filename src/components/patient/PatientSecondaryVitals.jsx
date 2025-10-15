import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import PatientSecondaryVitalDropDown from "./PatientSecondaryVitalDropDown";

const PatientSecondaryVitals = () => {
  const [showSecondaryVitals, setShowSecondaryVitals] = useState(false);
  return (
    <>
      <div
        className=" rounded-xl font-medium text-gray-800"
        style={{
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
        }}
        onClick={() => setShowSecondaryVitals(!showSecondaryVitals)}
      >
        <span className="flex flex-row p-4 justify-between items-center border-b-gray-500">
          Other Vitals Signs
          <ChevronDownIcon
            size={20}
            className={`text-gray-400 transition-transform ${
              showSecondaryVitals ? "rotate-180" : ""
            }`}
          />
        </span>
        <PatientSecondaryVitalDropDown
          showSecondaryVitals={showSecondaryVitals}
        />
      </div>
    </>
  );
};

export default PatientSecondaryVitals;
