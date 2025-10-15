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

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <div
          className="flex-1"
          onClick={() => {
            setOpenGraph(!openGraph);
            setGraphData(primaryVitals[0]);
          }}
        >
          <PatientVitalsDataCard data={primaryVitals[0]} />
        </div>
        <div
          className="flex-1"
          onClick={() => {
            setOpenGraph(!openGraph);
            setGraphData(primaryVitals[1]);
          }}
        >
          <PatientVitalsDataCard data={primaryVitals[1]} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <div
          className="flex-1"
          onClick={() => {
            setOpenGraph(!openGraph);
            setGraphData(primaryVitals[2]);
          }}
        >
          <PatientVitalsDataCard data={primaryVitals[2]} />
        </div>
        <div
          className="flex-1"
          onClick={() => {
            setOpenGraph(!openGraph);
            setGraphData(primaryVitals[3]);
          }}
        >
          <PatientVitalsDataCard data={primaryVitals[3]} />
        </div>
      </div>
      <PatientSecondaryVitals></PatientSecondaryVitals>

      {openGraph && (
        <PatientVitalsDataChart data={graphData}></PatientVitalsDataChart>
      )}
    </div>
  );
};

export default PatientViralsData;
