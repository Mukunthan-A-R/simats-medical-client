import React, { Activity, useEffect, useState } from "react";
import PatientSecondaryVitalCard from "./PatientSecondaryVitalCard";
import {
  DropletIcon,
  HeartPulse,
  ScaleIcon,
  Stethoscope,
  Thermometer,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getLatestSecondarySecondaryVitals } from "../../services/secondaryVitals";
import SecondaryVitalsTable from "../vitals/SecondaryVitalsTable";

const iconMap = {
  respiratory_rate: <Stethoscope size={16} />,
  heart_rate: <HeartPulse size={16} />, // ❤️ Better match
  oxygen_saturation: <DropletIcon size={16} />, // O2 saturation
  temperature: <Thermometer size={16} />, // 🌡 Temp level
  blood_pressure: <Activity size={16} />, // BP pulse-like
  weight: <ScaleIcon size={16} />,
  height: <ScaleIcon size={16} />,
  bmi: <ScaleIcon size={16} />,
  blood_glucose: <DropletIcon size={16} />,
  total_cholesterol: <DropletIcon size={16} />,
};

const PatientSecondaryVitalDropDown = ({
  showSecondaryVitals,
  assignmentId,
}) => {
  const [vitalData, setVitalData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [typeId, setTypeId] = useState(null);

  const { data } = useQuery({
    queryKey: ["latestSecondaryVitals", assignmentId],
    queryFn: () => getLatestSecondarySecondaryVitals(assignmentId),
    enabled: showSecondaryVitals && !!assignmentId,
  });

  useEffect(() => {
    if (data) {
      // Filter latest unique values by type_name
      const latestUnique = Object.values(
        data.reduce((acc, item) => {
          if (!acc[item.type_name]) acc[item.type_name] = item;
          return acc;
        }, {})
      );

      setVitalData(latestUnique);
    }
  }, [data]);

  if (!showSecondaryVitals) return null;

  return (
    <div
      className="rounded-xl transition-all duration-500 ease-in-out overflow-hidden"
      style={{
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
        backgroundColor: "white",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
      }}
    >
      {/* 🔥 Responsive Grid */}
      <div
        className="
    p-4 sm:p-6 
    grid gap-4 sm:gap-6
    grid-cols-[repeat(auto-fit,minmax(150px,1fr))]   /* small screens auto-fit */
    md:grid-cols-2                                   /* medium: 2 per row */
    lg:grid-cols-3                                   /* large: 3 per row */
  "
      >
        {vitalData.map((vital) => (
          <div key={vital.type_name} className="w-full">
            <PatientSecondaryVitalCard
              onClick={() => {
                setIsSelected(true);
                setTypeId(vital.type_id);
              }}
              data={{
                id: vital.type_name,
                name: vital.type_name
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase()),
                icon: iconMap[vital.type_name] || <Stethoscope size={16} />,
                data: vital.value,
                description: vital.type_name.replace(/_/g, " "),
                color1: "#8dd1e1",
              }}
            />
          </div>
        ))}
      </div>

      {/* Table modal when card clicked */}
      {isSelected && (
        <SecondaryVitalsTable
          assignmentId={assignmentId}
          typeId={typeId}
          onClose={() => setIsSelected(false)}
        />
      )}
    </div>
  );
};

export default PatientSecondaryVitalDropDown;
