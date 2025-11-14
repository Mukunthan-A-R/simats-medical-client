import React, { useState } from "react";

import {
  ActivityIcon,
  DropletIcon,
  HeartPulseIcon,
  ThermometerIcon,
} from "lucide-react";
import PatientVitalsDataCard from "./PatientVitalsDataCard";
import PatientVitalsDataChart from "./PatientVitalsDataChart";
import PatientSecondaryVitals from "../PatientSecondaryVitals";
import NewPrimaryVitalsForm from "../../vitals/NewPrimaryVitalsForm";

const PatientViralsData = ({ assignmentId }) => {
  const [openGraph, setOpenGraph] = useState(false);
  const [graphData, setGraphData] = useState(null);

  const primaryVitals = [
    {
      id: "bloodPressure",
      name: "Blood Pressure",
      icon: <HeartPulseIcon size={16} />,
      unit: "mmHg",
      data: "115.1 / 78",
      normal: "120/80 mmHg",
      description: "Systolic and diastolic pressure",
      color1: "#8884d8",
      color2: "#82ca9d",
    },
    {
      id: "heartRate",
      name: "Heart Rate",
      icon: <ActivityIcon size={16} />,
      unit: "bpm",
      data: "73.3",
      normal: "60-100 bpm",
      description: "Beats per minute",
      color1: "#ff7300",
    },
    {
      id: "oxygenSaturation",
      name: "Oxygen Saturation",
      icon: <DropletIcon size={16} />,
      unit: "%",
      data: "96.5",
      normal: "95-100%",
      description: "Blood oxygen level",
      color1: "#0088fe",
    },
    {
      id: "temperature",
      name: "Temperature",
      icon: <ThermometerIcon size={16} />,
      unit: "°F",
      data: "98.1",
      normal: "97.8-99.1°F",
      description: "Body temperature",
      color1: "#ff4d4f",
    },
  ];

  const handleCardClick = (vital) => {
    if (graphData?.id === vital.id && openGraph) {
      setOpenGraph(false);
    } else {
      setGraphData(vital);
      setOpenGraph(true);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-2 sm:p-3">
      {/* ADD NEW VITALS ROWS */}
      <NewPrimaryVitalsForm assignmentId={assignmentId}></NewPrimaryVitalsForm>
      {/* PRIMARY VITALS ROWS */}
      <div className="flex flex-col sm:flex-row gap-2">
        {primaryVitals.slice(0, 2).map((vital) => (
          <div
            key={vital.id}
            className="flex-1 cursor-pointer hover:scale-[1.01] transition-transform"
            onClick={() => handleCardClick(vital)}
          >
            <PatientVitalsDataCard data={vital} />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        {primaryVitals.slice(2).map((vital) => (
          <div
            key={vital.id}
            className="flex-1 cursor-pointer hover:scale-[1.01] transition-transform"
            onClick={() => handleCardClick(vital)}
          >
            <PatientVitalsDataCard data={vital} />
          </div>
        ))}
      </div>

      {/* SECONDARY VITALS */}
      <div className="-mt-1">
        <PatientSecondaryVitals />
      </div>

      {/* CHART SECTION */}
      {openGraph && graphData && (
        <div className="mt-2 rounded-lg border border-gray-200 bg-white shadow-sm p-2">
          <PatientVitalsDataChart data={graphData} />
        </div>
      )}
    </div>
  );
};

export default PatientViralsData;
