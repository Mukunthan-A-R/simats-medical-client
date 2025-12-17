import { useEffect, useState } from "react";
import {
  DropletIcon,
  HeartPulse,
  ScaleIcon,
  Activity,
  Stethoscope,
  Thermometer,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import SecondaryVitalsTable from "../../vitals/SecondaryVitalsTable";
import SecondaryVitalChart from "../vitals/SecondaryVitalChart";
import PatientSecondaryVitalCard from "../PatientSecondaryVitalCard";
import { fetchRecentSecondaryVitals } from "../../../services/patient/PatientVitals";

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

const PatientVitalsData = ({ assignmentId, patientId }) => {
  const [vitalData, setVitalData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [typeId, setTypeId] = useState(null);
  const [typeUnit, setTypeUnit] = useState(null);

  const {
    data: recentVitalData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latestSecondaryVitals", assignmentId],
    queryFn: () => fetchRecentSecondaryVitals(assignmentId, patientId),
    enabled: !!assignmentId,
  });

  const data = recentVitalData?.data;

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

  if (isLoading)
    return <p className="p-4 text-yellow-800">Loading patient vitals...</p>;
  if (isError)
    return <p className="p-4 text-red-500">Error loading vitals !</p>;

  if (data?.length === 0) {
    return (
      <div className="flex items-center justify-center text-gray-600 mt-4">
        <p>No Vitals Data for Now</p>
      </div>
    );
  }

  return (
    <div>
      {/* Grid Layout */}
      <div
        className="
  p-4 sm:p-6
  grid gap-5 sm:gap-6
  grid-cols-1
  sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
  lg:grid-cols-3
"
      >
        {vitalData.map((vital) => (
          <div key={vital.type_name} className="w-full">
            <PatientSecondaryVitalCard
              onClick={() => {
                setIsSelected(true);
                setTypeId(vital.type_id);
                setTypeUnit(vital.unit);
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
                unit: vital.unit,
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal — Table Expanded View */}
      {isSelected && (
        <>
          <SecondaryVitalsTable
            assignmentId={assignmentId}
            typeId={typeId}
            onClose={() => setIsSelected(false)}
            unit={typeUnit}
          />

          <SecondaryVitalChart
            assignmentId={assignmentId}
            typeId={typeId}
            typeName="blood_pressure"
            unit={typeUnit}
          />
        </>
      )}
    </div>
  );
};

export default PatientVitalsData;
