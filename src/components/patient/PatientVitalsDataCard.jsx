import React from "react";

const PatientVitalsDataCard = ({ title }) => {
  return (
    <div
      className="bg-white p-4 rounded-xl"
      style={{
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
        backgroundColor: "white",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
      }}
    >
      <div className="flex flex-row justify-between">
        <span className="flex flex-row items-center gap-2">
          <span
            style={{
              background: true
                ? "linear-gradient(to bottom, #4d90fe, #0066cc)"
                : "linear-gradient(to bottom, #ff3b30, #d70015)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
            className="bg-blue-900  px-2 rounded-2xl"
          >
            A
          </span>
          <p className="text-gray-800 font-medium">Blood Preasure</p>
        </span>
        <p className="text-xs font-light">120/80 mmmHg</p>
      </div>
      <div className="mt-6">
        <span className="text-lg font-semibold pr-1">115.1/78.8</span>
        <span className="text-sm text-gray-500">mmHg</span>
      </div>
    </div>
  );
};

export default PatientVitalsDataCard;
