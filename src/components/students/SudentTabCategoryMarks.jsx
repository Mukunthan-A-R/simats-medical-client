import { SearchIcon, ChevronDownIcon, StarIcon } from "lucide-react";
import React, { useState } from "react";

// Dummy data for procedure types
const procedureTypes = {
  "Internal Medicine": ["Procedure A", "Procedure B", "Procedure C"],
  Pediatrics: ["Procedure X", "Procedure Y", "Procedure Z"],
};

// Dummy data for filtered procedures
const getFilteredProcedures = (categoryName) => {
  const procedures = {
    "Internal Medicine": [
      {
        id: 1,
        patientName: "John Doe",
        patientId: "12345",
        procedure: "Procedure A",
        date: "2025-10-01",
        approvedBy: "Dr. Smith",
        grade: "A",
        score: 95,
      },
      {
        id: 2,
        patientName: "Jane Smith",
        patientId: "67890",
        procedure: "Procedure B",
        date: "2025-10-02",
        approvedBy: "Dr. Brown",
        grade: "B",
        score: 85,
      },
      {
        id: 3,
        patientName: "Michael Johnson",
        patientId: "13579",
        procedure: "Procedure C",
        date: "2025-10-05",
        approvedBy: "Dr. Lee",
        grade: "A-",
        score: 92,
      },
    ],
    Pediatrics: [
      {
        id: 4,
        patientName: "Alice Cooper",
        patientId: "11223",
        procedure: "Procedure X",
        date: "2025-09-15",
        approvedBy: "Dr. Lee",
        grade: "A-",
        score: 90,
      },
      {
        id: 5,
        patientName: "Bob Johnson",
        patientId: "44556",
        procedure: "Procedure Y",
        date: "2025-09-16",
        approvedBy: "Dr. Clark",
        grade: "B+",
        score: 88,
      },
      {
        id: 6,
        patientName: "Emma White",
        patientId: "98765",
        procedure: "Procedure Z",
        date: "2025-09-17",
        approvedBy: "Dr. Miller",
        grade: "B",
        score: 80,
      },
    ],
  };

  return procedures[categoryName] || [];
};

// Dummy function for procedure type stats
const getProcedureTypeStats = (categoryName, procedureName) => {
  return {
    count: 10,
    totalScore: 950,
    avgScore: 95,
  };
};

const StudentTabCategoryMarks = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProcedureFilter, setSelectedProcedureFilter] = useState("");

  return (
    <div className="mt-3 mb-4 animate-fadeIn">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-2 mb-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <SearchIcon size={12} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search procedures..."
            className="block w-full pl-7 pr-2 py-1.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div className="relative sm:w-40">
          <div className="relative">
            <select
              className="block w-full pl-2 pr-6 py-1.5 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md appearance-none"
              value={selectedProcedureFilter || ""}
              onChange={(e) =>
                setSelectedProcedureFilter(
                  e.target.value === "" ? null : e.target.value
                )
              }
              style={{
                backgroundImage: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
                boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
              }}
            >
              <option value="">All Procedures</option>
              {procedureTypes[category]?.map((proc) => (
                <option key={proc} value={proc}>
                  {proc}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-1.5 pointer-events-none">
              <ChevronDownIcon size={12} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Procedure Type Summary */}
      {selectedProcedureFilter && (
        <div
          className="mb-3 p-2 rounded-md"
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div className="flex justify-between items-center">
            <div>
              <h5 className="text-sm font-medium text-gray-800">
                {selectedProcedureFilter}
              </h5>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500 mr-3">
                  Completed:{" "}
                  {
                    getProcedureTypeStats(category, selectedProcedureFilter)
                      .count
                  }
                </span>
                <span className="text-xs text-gray-500">
                  Total Score:{" "}
                  {
                    getProcedureTypeStats(category, selectedProcedureFilter)
                      .totalScore
                  }
                </span>
              </div>
            </div>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  size={14}
                  className={
                    i <
                    Math.round(
                      getProcedureTypeStats(category, selectedProcedureFilter)
                        .avgScore / 20
                    )
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Procedures Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Mobile View */}
          <div className="md:hidden space-y-3">
            {getFilteredProcedures(category).map((proc) => (
              <div
                key={proc.id}
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {proc.procedure}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {proc.patientName}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background:
                          proc.grade === "A" || proc.grade === "A-"
                            ? "rgba(16, 185, 129, 0.1)"
                            : proc.grade === "B+" || proc.grade === "B"
                            ? "rgba(59, 130, 246, 0.1)"
                            : "rgba(249, 115, 22, 0.1)",
                        color:
                          proc.grade === "A" || proc.grade === "A-"
                            ? "#059669"
                            : proc.grade === "B+" || proc.grade === "B"
                            ? "#2563eb"
                            : "#c2410c",
                      }}
                    >
                      {proc.grade}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Score: {proc.score}
                    </p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Approved by: {proc.approvedBy}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Date: {proc.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <table className="hidden md:table min-w-full divide-y divide-gray-200">
            <thead>
              <tr
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
                }}
              >
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Patient
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Procedure
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Approved By
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Grade
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getFilteredProcedures(category).map((proc) => (
                <tr key={proc.id} className="hover:bg-blue-50">
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {proc.patientName}
                    </div>
                    <div className="text-xs text-gray-500">
                      {proc.patientId}
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {proc.procedure}
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{proc.date}</div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {proc.approvedBy}
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-center">
                    <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                      style={{
                        background:
                          proc.grade === "A" || proc.grade === "A-"
                            ? "rgba(16, 185, 129, 0.1)"
                            : proc.grade === "B+" || proc.grade === "B"
                            ? "rgba(59, 130, 246, 0.1)"
                            : "rgba(249, 115, 22, 0.1)",
                        color:
                          proc.grade === "A" || proc.grade === "A-"
                            ? "#059669"
                            : proc.grade === "B+" || proc.grade === "B"
                            ? "#2563eb"
                            : "#c2410c",
                      }}
                    >
                      {proc.grade}
                    </span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-center">
                    <div className="text-sm text-gray-900">{proc.score}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTabCategoryMarks;
