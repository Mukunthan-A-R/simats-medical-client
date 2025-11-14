import React, { useState } from "react";
import PatientVitalsDataChart from "./PatientVitalsDataChart";
import PatientSecondaryVitals from "../PatientSecondaryVitals";
import NewPrimaryVitalsForm from "../../vitals/NewPrimaryVitalsForm";
import PrimaryVitals from "./PrimaryVitals";

const PatientViralsData = ({ assignmentId }) => {
  const [openGraph, setOpenGraph] = useState(false);
  const [graphData, setGraphData] = useState(null);
  const [addVitals, setAddVitals] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-3">
      {/* HEADER + ADD VITALS BUTTON */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-2">
        <h3 className="text-lg font-semibold text-gray-700">Primary Vitals</h3>
        <button
          onClick={() => setAddVitals(!addVitals)}
          className="px-4 py-2 rounded-md text-white text-sm font-medium transition-transform hover:scale-[1.02]"
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          {addVitals ? "Close" : "Add Vitals"}
        </button>
      </div>

      {/* ADD NEW VITALS FORM */}
      {addVitals && (
        <div className="mb-4 animate-slideDown">
          <NewPrimaryVitalsForm assignmentId={assignmentId} />
        </div>
      )}

      {/* PRIMARY VITALS CARDS */}
      <PrimaryVitals assignmentId={assignmentId}></PrimaryVitals>

      {/* SECONDARY VITALS */}
      <div className="mt-4">
        <PatientSecondaryVitals />
      </div>

      {/* CHART SECTION */}
      {openGraph && graphData && (
        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm p-3">
          <PatientVitalsDataChart data={graphData} />
        </div>
      )}
    </div>
  );
};

export default PatientViralsData;
