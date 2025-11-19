import React, { useEffect, useState } from "react";
import PatientSecondaryVitalCard from "./PatientSecondaryVitalCard";
import { DropletIcon, ScaleIcon, Stethoscope } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getLatestSecondarySecondaryVitals } from "../../services/secondaryVitals";
import SecondaryVitalsTable from "../vitals/SecondaryVitalsTable";

const iconMap = {
  respiratory_rate: <Stethoscope size={16} />,
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

  // ✅ Only this line changes for v5
  const { data, isLoading, error } = useQuery({
    queryKey: ["latestSecondaryVitals", assignmentId],
    queryFn: () => getLatestSecondarySecondaryVitals(assignmentId),
    enabled: showSecondaryVitals && !!assignmentId,
  });

  console.log(isSelected, typeId);

  useEffect(() => {
    if (data) setVitalData(data);
  }, [data]);

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
        {vitalData.slice(0, 2).map((vital) => (
          <div className="flex-1" key={vital.type_name}>
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
                unit: "",
                data: vital.value,
                normal: "",
                description: vital.type_name.replace(/_/g, " "),
                color1: "#8dd1e1",
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row px-4 py-3 sm:px-8 gap-4 sm:gap-6 rounded-2xl">
        {vitalData.slice(2, 4).map((vital) => (
          <div className="flex-1" key={vital.type_name}>
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
                unit: "",
                data: vital.value,
                normal: "",
                description: vital.type_name.replace(/_/g, " "),
                color1: "#8dd1e1",
              }}
            />
          </div>
        ))}
      </div>

      {vitalData[4] && (
        <div className="w-1/2 px-4 py-3 sm:px-8 sm:pr-4 rounded-2xl">
          <PatientSecondaryVitalCard
            data={{
              id: vitalData[4].type_name,
              name: vitalData[4].type_name
                .replace(/_/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase()),
              icon: iconMap[vitalData[4].type_name] || (
                <Stethoscope size={16} />
              ),
              unit: "",
              data: vitalData[4].value,
              normal: "",
              description: vitalData[4].type_name.replace(/_/g, " "),
              color1: "#8dd1e1",
            }}
          />
        </div>
      )}

      {isSelected && (
        <SecondaryVitalsTable
          assignmentId={assignmentId}
          typeId={typeId}
        ></SecondaryVitalsTable>
      )}
    </div>
  );
};

export default PatientSecondaryVitalDropDown;
