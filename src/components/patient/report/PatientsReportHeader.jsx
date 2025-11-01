import React from "react";

const PatientsReportHeader = () => {
  return (
    <div
      className="rounded-t-xl overflow-hidden"
      style={{
        boxShadow:
          "0 2px 5px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
        border: "1px solid rgba(0,0,0,0.15)",
        backgroundColor: "rgba(255,255,255,0.85)",
      }}
    >
      {/* Header Bar */}
      <div
        className="p-3 border-b flex justify-between items-center"
        style={{
          background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="font-medium text-white text-sm md:text-base">
          Investigation Reports
        </h2>
        <span
          className="px-2 py-1 text-xs font-medium rounded-full"
          style={{
            background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            color: "#0066cc",
          }}
        >
          12 Reports
        </span>
      </div>
    </div>
  );
};

export default PatientsReportHeader;
