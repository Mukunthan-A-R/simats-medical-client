import React, { useState } from "react";
import PatientVitalsDataCard from "./PatientVitalsDataCard";
import PatientSecondaryVitals from "./PatientSecondaryVitals";
import PatientVitalsDataChart from "./PatientVitalsDataChart";
import {
  ActivityIcon,
  DropletIcon,
  HeartPulseIcon,
  ThermometerIcon,
} from "lucide-react";

const PatientViralsData = () => {
  const [openGraph, setOpenGraph] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1" onClick={() => setOpenGraph(!openGraph)}>
          <PatientVitalsDataCard
            data={{
              id: "bloodPressure",
              name: "Blood Pressure",
              icon: <HeartPulseIcon size={16} />,
              unit: "mmHg",
              data: "115.1 / 78",
              normal: "120/80 mmHg",
              description: "Systolic and diastolic pressure",
            }}
          />
        </div>
        <div className="flex-1" onClick={() => setOpenGraph(!openGraph)}>
          <PatientVitalsDataCard
            data={{
              id: "heartRate",
              name: "Heart Rate",
              icon: <ActivityIcon size={16} />,
              unit: "bpm",
              data: "73.3",
              normal: "60-100 bpm",
              description: "Beats per minute",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1" onClick={() => setOpenGraph(!openGraph)}>
          <PatientVitalsDataCard
            data={{
              id: "oxygenSaturation",
              name: "Oxygen Saturation",
              icon: <DropletIcon size={16} />,
              unit: "%",
              data: "96.5",
              normal: "95-100%",
              description: "Blood oxygen level",
              color1: "#0088fe",
            }}
          />
        </div>
        <div className="flex-1" onClick={() => setOpenGraph(!openGraph)}>
          <PatientVitalsDataCard
            data={{
              id: "temperature",
              name: "Temperature",
              icon: <ThermometerIcon size={16} />,
              unit: "°F",
              data: "98.1",
              normal: "97.8-99.1°F",
              description: "Body temperature",
            }}
          />
        </div>
      </div>
      <PatientSecondaryVitals></PatientSecondaryVitals>

      {openGraph && <PatientVitalsDataChart></PatientVitalsDataChart>}
    </div>
  );
};

export default PatientViralsData;
