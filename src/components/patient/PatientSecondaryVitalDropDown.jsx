import React, { useEffect, useState } from "react";
import PatientSecondaryVitalCard from "./PatientSecondaryVitalCard";
import {
  DropletIcon,
  HeartPulse,
  ScaleIcon,
  Activity,
  Stethoscope,
  Thermometer,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getLatestSecondarySecondaryVitals } from "../../services/secondaryVitals";
import SecondaryVitalsTable from "../vitals/SecondaryVitalsTable";

// Icon Map
const iconMap = {
  respiratory_rate: <Stethoscope size={18} />,
  heart_rate: <HeartPulse size={18} />,
  oxygen_saturation: <DropletIcon size={18} />,
  temperature: <Thermometer size={18} />,
  blood_pressure: <Activity size={18} />,
  weight: <ScaleIcon size={18} />,
  height: <ScaleIcon size={18} />,
  bmi: <ScaleIcon size={18} />,
  blood_glucose: <DropletIcon size={18} />,
  total_cholesterol: <DropletIcon size={18} />,
};

const PatientSecondaryVitalDropDown = ({ assignmentId }) => {
  const [vitalData, setVitalData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [typeId, setTypeId] = useState(null);

  const { data } = useQuery({
    queryKey: ["latestSecondaryVitals", assignmentId],
    queryFn: () => getLatestSecondarySecondaryVitals(assignmentId),
    enabled: !!assignmentId,
  });

  useEffect(() => {
    if (data) {
      const latestUnique = Object.values(
        data.reduce((acc, item) => {
          if (!acc[item.type_name]) acc[item.type_name] = item;
          return acc;
        }, {})
      );

      setVitalData(latestUnique);
    }
  }, [data]);

  return (
    <div
    // className="
    //   rounded-xl overflow-hidden
    //   shadow-[0_4px_15px_rgba(0,0,0,0.06)]
    //   border border-gray-200
    //   bg-gradient-to-b from-white to-gray-50/80
    //   transition-all duration-300
    // "
    >
      {/* Grid Layout */}
      <div
        className="
          p-4 sm:p-6 
          grid gap-5 sm:gap-6
          grid-cols-1 
          sm:grid-cols-2
          md:grid-cols-2 
          lg:grid-cols-3
          xl:grid-cols-4
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
                icon: iconMap[vital.type_name] || <Stethoscope size={18} />,
                data: vital.value,
                description: vital.type_name.replace(/_/g, " "),
                color1: "#8dd1e1",
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal — Table Expanded View */}
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
