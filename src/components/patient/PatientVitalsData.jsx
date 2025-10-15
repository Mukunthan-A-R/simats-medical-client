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

  // const secondaryVitals = [
  //   {
  //     id: "respiratoryRate",
  //     name: "Respiratory Rate",
  //     icon: <div size={16} />,
  //     unit: "breaths/min",
  //     data: vitalsData.respiratoryRate,
  //     normal: "12-20 breaths/min",
  //     description: "Breaths per minute",
  //     color1: "#8dd1e1",
  //     latest:
  //       vitalsData.respiratoryRate[vitalsData.respiratoryRate.length - 1].value,
  //   },
  //   {
  //     id: "weight",
  //     name: "Weight",
  //     icon: <ScaleIcon size={16} />,
  //     unit: "lbs",
  //     data: vitalsData.weight,
  //     normal: "Varies",
  //     description: "Body weight",
  //     color1: "#a4de6c",
  //     latest: vitalsData.weight[vitalsData.weight.length - 1].value,
  //   },
  //   {
  //     id: "bloodGlucose",
  //     name: "Blood Glucose",
  //     icon: <DropletIcon size={16} />,
  //     unit: "mg/dL",
  //     data: vitalsData.bloodGlucose,
  //     normal: "70-99 mg/dL (fasting)",
  //     description: "Blood sugar level",
  //     color1: "#d0ed57",
  //     latest: vitalsData.bloodGlucose[vitalsData.bloodGlucose.length - 1].value,
  //   },
  //   {
  //     id: "cholesterolTotal",
  //     name: "Total Cholesterol",
  //     icon: <DropletIcon size={16} />,
  //     unit: "mg/dL",
  //     data: vitalsData.cholesterolTotal,
  //     normal: "<200 mg/dL",
  //     description: "Total cholesterol level",
  //     color1: "#ffc658",
  //     latest:
  //       vitalsData.cholesterolTotal[vitalsData.cholesterolTotal.length - 1]
  //         .value,
  //   },
  //   {
  //     id: "bmi",
  //     name: "BMI",
  //     icon: <ScaleIcon size={16} />,
  //     unit: "kg/m²",
  //     data: vitalsData.bmi,
  //     normal: "18.5-24.9",
  //     description: "Body Mass Index",
  //     color1: "#8884d8",
  //     latest: vitalsData.bmi[vitalsData.bmi.length - 1].value,
  //   },
  // ];

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
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
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
