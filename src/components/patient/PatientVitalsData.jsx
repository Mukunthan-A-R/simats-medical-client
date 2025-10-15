import React from "react";
import PatientVitalsDataCard from "./PatientVitalsDataCard";
import PatientSecondaryVitals from "./PatientSecondaryVitals";

const PatientViralsData = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1">
          <PatientVitalsDataCard />
        </div>
        <div className="flex-1">
          <PatientVitalsDataCard />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1">
          <PatientVitalsDataCard />
        </div>
        <div className="flex-1">
          <PatientVitalsDataCard />
        </div>
      </div>
      <PatientSecondaryVitals></PatientSecondaryVitals>
    </div>
  );
};

export default PatientViralsData;
