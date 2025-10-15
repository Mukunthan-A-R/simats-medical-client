import React, { useState } from "react";
import PatientVitalsDataCard from "./PatientVitalsDataCard";
import PatientSecondaryVitals from "./PatientSecondaryVitals";
import PatientVitalsDataChart from "./PatientVitalsDataChart";

const PatientViralsData = () => {
  const [openGraph, setOpenGraph] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1" onClick={() => setOpenGraph(!openGraph)}>
          <PatientVitalsDataCard />
        </div>
        <div className="flex-1" onClick={() => setOpenGraph(!openGraph)}>
          <PatientVitalsDataCard />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1" onClick={() => setOpenGraph(!openGraph)}>
          <PatientVitalsDataCard />
        </div>
        <div className="flex-1" onClick={() => setOpenGraph(!openGraph)}>
          <PatientVitalsDataCard />
        </div>
      </div>
      <PatientSecondaryVitals></PatientSecondaryVitals>

      {openGraph && <PatientVitalsDataChart></PatientVitalsDataChart>}
    </div>
  );
};

export default PatientViralsData;
