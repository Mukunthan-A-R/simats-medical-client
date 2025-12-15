import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { requestDischarge } from "../../../services/dischargeRequestService";

const DischargeComponent = ({ assignmentId }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const dischargeMutation = useMutation({
    mutationFn: () => requestDischarge(assignmentId),
    onSuccess: () => {
      setMessage("Discharge request sent successfully!");
      setShowConfirm(false);
    },
    onError: (error) => {
      setMessage("Failed to send discharge request.");
      console.error(error);
      setShowConfirm(false);
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Request Discharge
      </h2>

      {message && (
        <p className="text-center mb-4 text-green-600 font-medium">{message}</p>
      )}

      <button
        onClick={() => setShowConfirm(true)}
        disabled={dischargeMutation.isLoading}
        className={`w-full py-2 px-4 rounded-md font-medium text-white ${
          dischargeMutation.isLoading
            ? "bg-gray-400"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {dischargeMutation.isLoading ? "Processing..." : "Request Discharge"}
      </button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-0 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <p className="mb-6 text-lg font-medium">
              Are you sure you want to request discharge?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => dischargeMutation.mutate()}
                disabled={dischargeMutation.isLoading}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                disabled={dischargeMutation.isLoading}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DischargeComponent;
