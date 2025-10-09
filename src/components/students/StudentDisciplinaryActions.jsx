import React from "react";
import { AlertTriangleIcon, CheckCircleIcon, XCircleIcon } from "lucide-react";

const StudentDisciplinaryActions = ({ studentData }) => {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md"
      style={{
        backgroundColor: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.2)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="px-4 py-3 border-b flex items-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f8f9fb, #d9e1ea)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <AlertTriangleIcon size={16} className="text-amber-600 mr-2" />
        <h3
          className="font-medium text-gray-800"
          style={{
            textShadow: "0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          Disciplinary Actions
        </h3>
      </div>
      <div className="p-4">
        {studentData.disciplinaryActions.length > 0 ? (
          <div className="space-y-4">
            {studentData.disciplinaryActions.map((action) => (
              <div
                key={action.id}
                className="p-3 rounded-lg"
                style={{
                  backgroundColor:
                    action.status === "Resolved"
                      ? "rgba(243,244,246,0.7)"
                      : "rgba(254,242,242,0.4)",
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
                  border:
                    action.status === "Resolved"
                      ? "1px solid rgba(0,0,0,0.1)"
                      : "1px solid rgba(252,165,165,0.3)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {action.status === "Resolved" ? (
                      <CheckCircleIcon
                        size={16}
                        className="text-green-600 mr-2"
                      />
                    ) : (
                      <XCircleIcon size={16} className="text-red-600 mr-2" />
                    )}
                    <span className="text-sm font-medium text-gray-800">
                      {action.type}
                    </span>
                  </div>
                  <div
                    className="px-2 py-0.5 rounded text-xs font-medium"
                    style={{
                      background:
                        action.status === "Resolved"
                          ? "linear-gradient(to bottom, #a7f3d0, #6ee7b7)"
                          : "linear-gradient(to bottom, #fecaca, #fca5a5)",
                      boxShadow:
                        "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                      border:
                        action.status === "Resolved"
                          ? "1px solid rgba(16,185,129,0.3)"
                          : "1px solid rgba(220,38,38,0.3)",
                      color:
                        action.status === "Resolved" ? "#065f46" : "#b91c1c",
                    }}
                  >
                    {action.status}
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-1">{action.reason}</p>
                <p className="text-xs text-gray-500">
                  Date:{" "}
                  {new Date(action.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-600">{action.actionTaken}</p>
                  {action.status === "Resolved" && (
                    <p className="text-xs text-gray-600 mt-1">
                      {action.resolution}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
              style={{
                background: "linear-gradient(to bottom, #10b981, #059669)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <CheckCircleIcon size={24} className="text-white" />
            </div>
            <p className="text-gray-700 font-medium">
              No disciplinary actions on record
            </p>
            <p className="text-gray-500 text-sm">Student is in good standing</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDisciplinaryActions;
