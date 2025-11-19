import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllSecondaryVitals } from "../../services/secondaryVitals";
import { formatDate } from "../../utils/constants";

const SecondaryVitalsTable = ({ assignmentId, typeId }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["secondaryVitals", assignmentId, typeId],
    queryFn: () => getAllSecondaryVitals(assignmentId, typeId),
    enabled: !!assignmentId && !!typeId,
  });

  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading vitals...</div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">Failed to load vitals</div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-4 text-center text-gray-400">
        No vitals recorded for this type.
      </div>
    );
  }

  const isBloodPressure =
    data[0]?.systolic !== undefined && data[0]?.diastolic !== undefined;

  return (
    <div
      className="mt-4 p-4 rounded-2xl shadow-md border border-gray-200 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f8f9fa, #eef1f6)",
      }}
    >
      <h2 className="text-lg font-medium mb-3 text-gray-800">
        Vital History ({data[0]?.type_name.replace(/_/g, " ")})
      </h2>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-h-64">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-gray-100">
            <tr className="text-left text-gray-600 text-sm uppercase tracking-wide">
              {isBloodPressure ? (
                <>
                  <th className="px-4 py-2 border-b">Systolic</th>
                  <th className="px-4 py-2 border-b">Diastolic</th>
                </>
              ) : (
                <th className="px-4 py-2 border-b">Value</th>
              )}
              <th className="px-4 py-2 border-b">Recorded At</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map((item, idx) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors"
                style={{
                  backgroundColor:
                    idx % 2 === 0 ? "white" : "rgba(249,250,251,0.7)",
                }}
              >
                {isBloodPressure ? (
                  <>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      {item.systolic}
                    </td>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      {item.diastolic}
                    </td>
                  </>
                ) : (
                  <td className="px-4 py-2 text-sm font-medium text-gray-900">
                    {item.value}
                  </td>
                )}

                <td className="px-4 py-2 text-sm text-gray-500">
                  {formatDate(item?.recorded_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecondaryVitalsTable;
