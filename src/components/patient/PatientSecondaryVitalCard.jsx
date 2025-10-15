import React from "react";

const PatientSecondaryVitalCard = ({ data }) => {
  return (
    <div
      className="flex flex-row gap-4 px-4 py-4 border border-gray-400 rounded-lg"
      style={{
        backgroundColor: "rgba(245,245,245,0.8)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex flex-row flex-1 items-center gap-2">
        <span
          style={{
            background: true
              ? "linear-gradient(to bottom, #4d90fe, #0066cc)"
              : "linear-gradient(to bottom, #ff3b30, #d70015)",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
            border: "1px solid rgba(0,0,0,0.2)",
          }}
          className="bg-blue-900 p-2 rounded-2xl"
        >
          {data.icon}
        </span>
        <span className="font-medium text-gray-800">{data.name}</span>
      </div>
      <span className="flex flex-row items-end">
        <div className="text-lg font-medium pr-2">{data.data}</div>
        <p className="text-sm text-gray-600 pb-1">{data.unit}</p>
      </span>
    </div>
  );
};

export default PatientSecondaryVitalCard;
