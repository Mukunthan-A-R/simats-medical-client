import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getDischargeStatus } from "../../../services/dischargeRequestService";

const DischargeStatusComponent = ({ assignmentId }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dischargeStatus", assignmentId],
    queryFn: () => getDischargeStatus(assignmentId),
    enabled: !!assignmentId, // only fetch if assignmentId exists
  });

  if (isLoading) {
    return <p className="text-gray-500">Loading discharge status...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Failed to load discharge status.</p>;
  }

  if (!data) {
    return <p className="text-gray-500">No discharge request found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Discharge Status
      </h2>
      <p className="text-center text-lg">
        Status:{" "}
        {data.status === "pending" && (
          <span className="text-yellow-600 font-bold">Pending</span>
        )}
        {data.status === "approved" && (
          <span className="text-green-600 font-bold">Approved</span>
        )}
        {data.status === "rejected" && (
          <span className="text-red-600 font-bold">Rejected</span>
        )}
      </p>

      {data.status === "rejected" && data.reason && (
        <p className="mt-2 text-center text-gray-700">
          Reason: <span className="italic">{data.reason}</span>
        </p>
      )}
    </div>
  );
};

export default DischargeStatusComponent;
