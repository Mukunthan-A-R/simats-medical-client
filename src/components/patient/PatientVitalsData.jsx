import React from "react";
import PatientVitalsDataCard from "./PatientVitalsDataCard";

const PatientViralsData = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-5">
        <div className="flex-1">
          <PatientVitalsDataCard />
        </div>
        <div className="flex-1">
          <PatientVitalsDataCard />
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex-1">
          <PatientVitalsDataCard />
        </div>
        <div className="flex-1">
          <PatientVitalsDataCard />
        </div>
      </div>
    </div>
  );
};

export default PatientViralsData;
