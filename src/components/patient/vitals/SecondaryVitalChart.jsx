import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllSecondaryVitals } from "../../../services/secondaryVitals";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { formatDate } from "../../../utils/constants";

// Parse blood pressure values
const parseBP = (value) => {
  const match = value?.toString().match(/(\d+)[\/ ]?(\d+)?/);
  if (!match) return { systolic: null, diastolic: null };
  return {
    systolic: Number(match[1]),
    diastolic: match[2] ? Number(match[2]) : null,
  };
};

const SecondaryVitalChart = ({ assignmentId, typeId, typeName, unit }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["secondaryVitals", assignmentId, typeId],
    queryFn: () => getAllSecondaryVitals(assignmentId, typeId),
    enabled: !!assignmentId && !!typeId,
  });

  if (isLoading) return <p className="text-gray-500 p-4">Loading vitals...</p>;
  if (isError)
    return <p className="text-red-500 p-4">Failed to load vitals.</p>;
  if (!data || data.length === 0)
    return <p className="text-gray-400 p-4">No records for this vital.</p>;

  // Process data
  const chartData = data.map((r) => {
    if (typeName === "blood_pressure") {
      const bp = parseBP(r.value);
      return { time: formatDate(r.recorded_at), ...bp };
    }
    const val = Number(r.value);
    return { time: formatDate(r.recorded_at), value: isNaN(val) ? null : val };
  });

  const latestRecord = chartData[chartData.length - 1];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col max-w-full">
      {/* Header */}
      {/* <h3 className="font-semibold text-gray-800 mb-2">
        {typeName.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
      </h3> */}

      {/* Latest value */}
      <div className="text-lg font-bold text-gray-900 mb-4">
        {typeName === "blood_pressure"
          ? `${latestRecord.systolic ?? "-"} / ${
              latestRecord.diastolic ?? "-"
            } ${unit || "mmHg"}`
          : `${latestRecord.value ?? "-"} ${unit || ""}`}
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="time" tick={{ fontSize: 12 }} />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12 }}
              unit={unit || ""}
            />
            <Tooltip />
            {typeName === "blood_pressure" ? (
              <>
                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  dot={{ r: 2 }}
                />
              </>
            ) : (
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ff7300"
                strokeWidth={2}
                dot={{ r: 2 }}
              />
            )}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SecondaryVitalChart;
