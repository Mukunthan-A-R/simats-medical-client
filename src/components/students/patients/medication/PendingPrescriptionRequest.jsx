import React from "react";
import { ClockIcon } from "lucide-react"; // adjust import if needed

const PendingPrescriptionRequest = ({ requests = [] }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Pending":
        return {
          bg: "rgba(254, 243, 199, 0.3)",
          textColor: "#d97706",
        };
      case "Approved":
        return {
          bg: "rgba(209, 250, 229, 0.3)",
          textColor: "#059669",
        };
      case "Rejected":
        return {
          bg: "rgba(254, 226, 226, 0.3)",
          textColor: "#dc2626",
        };
      default:
        return {
          bg: "rgba(255,255,255,0.7)",
          textColor: "#4B5563",
        };
    }
  };

  return (
    <div className="p-4">
      <h4 className="text-sm font-medium text-gray-700 mt-6 mb-3">
        Prescription Requests
      </h4>

      {requests.length > 0 ? (
        <div className="space-y-3">
          {requests.map((req) => {
            const styles = getStatusStyles(req.status);

            return (
              <div
                key={req.id}
                className="p-3 rounded-lg transition-all hover:shadow-md"
                style={{
                  backgroundColor: styles.bg,
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex justify-between items-start">
                  {/* Left side */}
                  <div>
                    <h5 className="font-medium text-gray-800 flex items-center">
                      <ClockIcon size={14} className="mr-2 text-amber-600" />
                      Request for {req.medicationName} {req.dosage}
                    </h5>
                    <p className="text-sm text-gray-700 mt-1">
                      <span className="font-medium">Requested:</span>{" "}
                      {req.requestDate}
                    </p>
                    {req.notes && (
                      <p className="text-sm text-gray-700 mt-1">
                        <span className="font-medium">Notes:</span> {req.notes}
                      </p>
                    )}
                  </div>

                  {/* Right side - status */}
                  <div className="text-right">
                    <span
                      className="px-2 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: styles.bg,
                        color: styles.textColor,
                      }}
                    >
                      {req.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <ClockIcon size={24} className="mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-500">
            No pending prescription requests
          </p>
        </div>
      )}
    </div>
  );
};

export default PendingPrescriptionRequest;
