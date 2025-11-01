import { ChartBarIcon } from "lucide-react";
import React from "react";

const StudentCategoryTabData = () => {
  // Hardcoded dummy data
  const stats = {
    cumulativeScore: 85,
    targetScore: 100,
    scorePercentage: 85,
    procedureCount: 28,
    totalProcedures: 35,
    completionPercentage: 80,
    gradeDistribution: {
      A: 12,
      B: 10,
      C: 3,
      D: 0,
    },
  };

  return (
    <div className="mt-3 mb-4 animate-fadeIn">
      <div
        className="p-4 rounded-lg mb-3"
        style={{
          backgroundColor: "rgba(235,245,255,0.9)",
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <ChartBarIcon size={16} className="text-blue-600 mr-1.5" />
            <h4 className="text-sm font-medium text-gray-800">
              Department Performance Summary
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          {/* Cumulative Score Progress */}
          <div
            className="p-3 rounded-lg"
            style={{
              backgroundColor: "white",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-medium text-gray-700">
                Cumulative Score
              </p>
              <p className="text-xs font-medium text-gray-700">
                {stats.cumulativeScore} / {stats.targetScore}
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden mb-1">
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: `${stats.scorePercentage}%`,
                  background: "linear-gradient(to right, #4d90fe, #0066cc)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">
              {stats.scorePercentage}% of target score achieved
            </p>
          </div>
          {/* Procedure Completion Progress */}
          <div
            className="p-3 rounded-lg"
            style={{
              backgroundColor: "white",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-medium text-gray-700">
                Procedures Completed
              </p>
              <p className="text-xs font-medium text-gray-700">
                {stats.procedureCount} / {stats.totalProcedures}
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden mb-1">
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: `${stats.completionPercentage}%`,
                  background: "linear-gradient(to right, #10b981, #059669)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">
              {stats.completionPercentage}% of required procedures completed
            </p>
          </div>
        </div>
        {/* Grade Distribution */}
        <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center space-x-1">
            <span className="text-xs text-gray-500">Grade Distribution:</span>
            {Object.entries(stats.gradeDistribution).map(
              ([grade, count]) =>
                count > 0 && (
                  <span
                    key={grade}
                    className="px-1.5 py-0.5 rounded text-xs font-medium"
                    style={{
                      background:
                        grade === "A"
                          ? "rgba(16, 185, 129, 0.1)"
                          : grade === "B"
                          ? "rgba(59, 130, 246, 0.1)"
                          : grade === "C"
                          ? "rgba(249, 115, 22, 0.1)"
                          : "rgba(239, 68, 68, 0.1)",
                      color:
                        grade === "A"
                          ? "#059669"
                          : grade === "B"
                          ? "#2563eb"
                          : grade === "C"
                          ? "#d97706"
                          : "#dc2626",
                    }}
                  >
                    {grade}: {count}
                  </span>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCategoryTabData;
