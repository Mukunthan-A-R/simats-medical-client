import React from "react";
import PatientSecondaryVitalCard from "./PatientSecondaryVitalCard";
import { DropletIcon, ScaleIcon } from "lucide-react";

const PatientSecondaryVitalDropDown = ({ showSecondaryVitals }) => {
  if (!showSecondaryVitals) return null;

  return (
    <div
      className={`rounded-xl ${
        showSecondaryVitals
          ? "transition-all duration-500 ease-in-out overflow-hidden"
          : ""
      }`}
      style={{
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
        backgroundColor: "white",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
      }}
    >
      <div className="flex flex-col sm:flex-row px-4 py-3 sm:px-8 gap-4 sm:gap-6 rounded-2xl">
        <div className="flex-1">
          <PatientSecondaryVitalCard
            data={{
              id: "respiratoryRate",
              name: "Respiratory Rate",
              icon: <div size={16} />,
              unit: "breaths/min",
              data: "16.3",
              normal: "12-20 breaths/min",
              description: "Breaths per minute",
              color1: "#8dd1e1",
            }}
          />
        </div>
        <div className="flex-1">
          <PatientSecondaryVitalCard
            data={{
              id: "weight",
              name: "Weight",
              icon: <ScaleIcon size={16} />,
              unit: "lbs",
              data: "164",
              normal: "Varies",
              description: "Body weight",
              color1: "#a4de6c",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row px-4 py-3 sm:px-8 gap-4 sm:gap-6 rounded-2xl">
        <div className="flex-1">
          <PatientSecondaryVitalCard
            data={{
              id: "bloodGlucose",
              name: "Blood Glucose",
              icon: <DropletIcon size={16} />,
              unit: "mg/dL",
              data: "86.9",
              normal: "70-99 mg/dL (fasting)",
              description: "Blood sugar level",
              color1: "#d0ed57",
            }}
          />
        </div>
        <div className="flex-1">
          <PatientSecondaryVitalCard
            data={{
              id: "cholesterolTotal",
              name: "Total Cholesterol",
              icon: <DropletIcon size={16} />,
              unit: "mg/dL",
              data: "182.7",
              normal: "<200 mg/dL",
              description: "Total cholesterol level",
              color1: "#ffc658",
            }}
          />
        </div>
      </div>
      <div className="w-1/2  px-4 py-3 sm:px-8 sm:pr-4 rounded-2xl">
        <PatientSecondaryVitalCard
          data={{
            id: "bmi",
            name: "BMI",
            icon: <ScaleIcon size={16} />,
            unit: "kg/m²",
            data: "24.2",
            normal: "18.5-24.9",
            description: "Body Mass Index",
            color1: "#8884d8",
          }}
        />
      </div>
    </div>
  );
};

export default PatientSecondaryVitalDropDown;
