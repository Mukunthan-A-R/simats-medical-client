import React from "react";
import {
  ActivityIcon,
  DropletIcon,
  HeartPulseIcon,
  ThermometerIcon,
} from "lucide-react";
import PatientVitalsDataCard from "./PatientVitalsDataCard";
import { useQuery } from "@tanstack/react-query";
import { getLatestPrimaryVitals } from "../../../services/primaryVitals";

const PrimaryVitals = ({ assignmentId }) => {
  const {
    data: latestVitals,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latestPrimaryVitals", assignmentId],
    queryFn: () => getLatestPrimaryVitals(assignmentId),
    // If a 404 occurs, consider it "no data"
    retry: false,
    onError: (err) => {
      if (err.response?.status !== 404) {
        console.error("Failed to fetch vitals:", err);
      }
    },
  });

  if (isLoading)
    return <p className="text-gray-500 text-sm">Loading primary vitals...</p>;

  // Use "N/A" if no data or 404
  const vitals = latestVitals?.vitals || {
    blood_pressure_systolic: "N/A",
    blood_pressure_diastolic: "N/A",
    heart_rate: "N/A",
    oxygen_saturation: "N/A",
    temperature: "N/A",
  };

  const primaryVitals = [
    {
      id: "bloodPressure",
      name: "Blood Pressure",
      icon: <HeartPulseIcon size={16} />,
      unit: "mmHg",
      data: `${vitals.blood_pressure_systolic} / ${vitals.blood_pressure_diastolic}`,
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
      data: vitals.heart_rate,
      normal: "60-100 bpm",
      description: "Beats per minute",
      color1: "#ff7300",
    },
    {
      id: "oxygenSaturation",
      name: "Oxygen Saturation",
      icon: <DropletIcon size={16} />,
      unit: "%",
      data: vitals.oxygen_saturation,
      normal: "95-100%",
      description: "Blood oxygen level",
      color1: "#0088fe",
    },
    {
      id: "temperature",
      name: "Temperature",
      icon: <ThermometerIcon size={16} />,
      unit: "°C",
      data: vitals.temperature,
      normal: "36.5-37.5°C",
      description: "Body temperature",
      color1: "#ff4d4f",
    },
  ];

  const handleCardClick = (vital) => {
    console.log("Clicked vital:", vital);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {primaryVitals.map((vital) => (
        <div
          key={vital.id}
          className="cursor-pointer transform transition-transform hover:scale-[1.02]"
          onClick={() => handleCardClick(vital)}
        >
          <PatientVitalsDataCard data={vital} />
        </div>
      ))}
    </div>
  );
};

export default PrimaryVitals;
