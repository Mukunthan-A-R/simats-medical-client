import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { ChevronDownIcon, DownloadIcon } from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

const PatientVitalsDataChart = ({ data }) => {
  const [showRawData, setShowRawData] = useState(false);
  const [timeRange, setTimeRange] = useState(14);

  const selectedVital = {
    id: "bloodPressure",
    name: data,
    icon: "🩺",
    description: "Blood pressure tracking",
    normal: "120/80",
    unit: "mmHg",
    color1: "#4d90fe",
    color2: "#ff5e3a",
    data: [
      { date: "2025-10-01", systolic: 120, diastolic: 80, value: 80 },
      { date: "2025-10-02", systolic: 118, diastolic: 79, value: 79 },
      { date: "2025-10-03", systolic: 121, diastolic: 82, value: 82 },
      { date: "2025-10-04", systolic: 119, diastolic: 78, value: 78 },
      { date: "2025-10-05", systolic: 122, diastolic: 81, value: 81 },
      { date: "2025-10-06", systolic: 117, diastolic: 77, value: 77 },
      { date: "2025-10-07", systolic: 123, diastolic: 83, value: 83 },
      { date: "2025-10-08", systolic: 118, diastolic: 79, value: 79 },
    ],
  };

  const formatDate = (value) => new Date(value).toLocaleDateString();
  const getTickCount = (range) => Math.min(range, 5);

  return (
    <div className="rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* =================== MENU BAR =================== */}
      <div
        className="p-4 border-b border-gray-100"
        style={{
          backgroundColor: "#2565cc",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
              style={{
                background: "white",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <div className="text-white">{selectedVital.icon}</div>
            </div>
            <div>
              <h3 className="font-medium text-white">{selectedVital.name}</h3>
              <p className="text-xs text-white">
                {selectedVital.description} • Normal range:{" "}
                {selectedVital.normal}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <select
              className="text-sm border rounded-md mr-2 px-2 py-1"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              style={{
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
              <option value="90">3 months</option>
              <option value="180">6 months</option>
              <option value="365">1 year</option>
            </select>
            <button
              className={`p-1 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
              title="Export to CSV"
              style={{
                background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <DownloadIcon size={18} className="text-blue-700" />
            </button>
          </div>
        </div>
      </div>

      {/* =================== CHART =================== */}
      <div className="p-4 bg-white">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={selectedVital.data.slice(-parseInt(timeRange))}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickCount={getTickCount(timeRange)}
                tickFormatter={formatDate}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              {selectedVital.id === "bloodPressure" ? (
                <>
                  <Line
                    type="monotone"
                    dataKey="systolic"
                    name="Systolic"
                    stroke={selectedVital.color1}
                    activeDot={{ r: 6 }}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    name="Diastolic"
                    stroke={selectedVital.color2}
                    activeDot={{ r: 6 }}
                    strokeWidth={2}
                  />
                </>
              ) : (
                <Line
                  type="monotone"
                  dataKey="value"
                  name={selectedVital.name}
                  stroke={selectedVital.color1}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* =================== RAW DATA TOGGLE =================== */}
        <div className="mt-4 flex justify-center">
          <button
            className={`text-sm text-blue-600 flex items-center px-3 py-1 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
            onClick={() => setShowRawData(!showRawData)}
            style={{
              background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {showRawData ? "Hide" : "Show"} Raw Data
            <ChevronDownIcon
              size={16}
              className={`ml-1 transition-transform ${
                showRawData ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* =================== RAW DATA TABLE =================== */}
        {showRawData && (
          <div className="mt-3 rounded-lg overflow-hidden border border-gray-200 shadow-sm max-h-64 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="sticky top-0 bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Systolic
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Diastolic
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {selectedVital.data
                  .slice(-parseInt(timeRange))
                  .map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50"
                      style={{
                        backgroundColor:
                          idx % 2 === 0 ? "white" : "rgba(249,250,251,0.7)",
                      }}
                    >
                      <td className="px-4 py-2 text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">
                        {item.systolic}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">
                        {item.diastolic}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientVitalsDataChart;
