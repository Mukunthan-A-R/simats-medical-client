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

  console.log(data);

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
    <div className="mt-5 p-4 rounded-xl bg-white shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">
        Vital History ({data[0]?.type_name})
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100/60">
            <tr className="text-left text-gray-700 text-sm">
              {isBloodPressure ? (
                <>
                  <th className="p-3 border-b">Systolic</th>
                  <th className="p-3 border-b">Diastolic</th>
                </>
              ) : (
                <th className="p-3 border-b">Value</th>
              )}
              <th className="p-3 border-b">Recorded At</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors text-sm"
              >
                {isBloodPressure ? (
                  <>
                    <td className="p-3 border-b">{item.systolic}</td>
                    <td className="p-3 border-b">{item.diastolic}</td>
                  </>
                ) : (
                  <td className="p-3 border-b">{item.value}</td>
                )}

                <td className="p-3 border-b">
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
