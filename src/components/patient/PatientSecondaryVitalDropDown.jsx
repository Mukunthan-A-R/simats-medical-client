import React from "react";
import PatientSecondaryVitalCard from "./PatientSecondaryVitalCard";

const PatientSecondaryVitalDropDown = ({ showSecondaryVitals }) => {
  if (!showSecondaryVitals) return null;

  return (
    <div
      className={`rounded-xl ${
        showSecondaryVitals
          ? "transition-all duration-500 ease-in-out overflow-hidden"
          : ""
      }`}
      style={{
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
        backgroundColor: "white",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
      }}
    >
      <div className="flex flex-col sm:flex-row px-4 py-3 sm:px-8 gap-4 sm:gap-6 rounded-2xl">
        <div className="flex-1">
          <PatientSecondaryVitalCard></PatientSecondaryVitalCard>
        </div>
        <div className="flex-1">
          <PatientSecondaryVitalCard></PatientSecondaryVitalCard>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row px-4 py-3 sm:px-8 gap-4 sm:gap-6 rounded-2xl">
        <div className="flex-1">
          <PatientSecondaryVitalCard></PatientSecondaryVitalCard>
        </div>
        <div className="flex-1">
          <PatientSecondaryVitalCard></PatientSecondaryVitalCard>
        </div>
      </div>
      <div className="w-1/2  px-4 py-3 sm:px-8 sm:pr-4 rounded-2xl">
        <PatientSecondaryVitalCard></PatientSecondaryVitalCard>
      </div>
    </div>
  );
};

export default PatientSecondaryVitalDropDown;
