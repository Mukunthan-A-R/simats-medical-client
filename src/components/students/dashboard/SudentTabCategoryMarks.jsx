import { SearchIcon, ChevronDownIcon, StarIcon } from "lucide-react";
import React, { useState } from "react";

// Dummy data for procedure types
const procedureTypes = {
  "Internal Medicine": ["Procedure A", "Procedure B", "Procedure C"],
  Pediatrics: ["Procedure X", "Procedure Y", "Procedure Z"],
};

// Dummy data for filtered procedures
const getFilteredProcedures = (categoryName) => {
  // Mock data for detailed procedures by department
  const departmentProcedures = {
    "Internal Medicine": [
      {
        id: "IM-001",
        patientId: "SMC-2023-0042",
        patientName: "John Doe",
        procedure: "Physical Examination",
        date: "2023-04-15",
        approvedBy: "Dr. Sarah Johnson",
        grade: "A",
        score: 95,
        notes: "Thorough examination with proper technique",
      },
      {
        id: "IM-002",
        patientId: "SMC-2023-0039",
        patientName: "Maria Garcia",
        procedure: "Blood Pressure Monitoring",
        date: "2023-04-17",
        approvedBy: "Dr. Robert Chen",
        grade: "A-",
        score: 90,
        notes: "Good technique, could improve on patient positioning",
      },
      {
        id: "IM-003",
        patientId: "SMC-2023-0051",
        patientName: "Robert Chen",
        procedure: "ECG Interpretation",
        date: "2023-04-20",
        approvedBy: "Dr. Sarah Johnson",
        grade: "B+",
        score: 87,
        notes: "Correctly identified major patterns, missed subtle changes",
      },
      {
        id: "IM-004",
        patientId: "SMC-2023-0063",
        patientName: "Emily Wong",
        procedure: "Venipuncture",
        date: "2023-04-22",
        approvedBy: "Dr. Michael Chang",
        grade: "A",
        score: 93,
        notes: "Clean technique, minimal discomfort to patient",
      },
      {
        id: "IM-005",
        patientId: "SMC-2023-0071",
        patientName: "James Smith",
        procedure: "Insulin Administration",
        date: "2023-04-25",
        approvedBy: "Dr. Sarah Johnson",
        grade: "A-",
        score: 91,
        notes: "Proper technique and dosage calculation",
      },
      {
        id: "IM-006",
        patientId: "SMC-2023-0084",
        patientName: "Sophia Rodriguez",
        procedure: "Physical Examination",
        date: "2023-04-27",
        approvedBy: "Dr. Robert Chen",
        grade: "B",
        score: 85,
        notes: "Good overall approach, needs to be more systematic",
      },
      {
        id: "IM-007",
        patientId: "SMC-2023-0097",
        patientName: "David Kim",
        procedure: "ECG Interpretation",
        date: "2023-04-30",
        approvedBy: "Dr. Sarah Johnson",
        grade: "A",
        score: 94,
        notes: "Excellent interpretation with clinical correlation",
      },
      {
        id: "IM-008",
        patientId: "SMC-2023-0105",
        patientName: "Olivia Johnson",
        procedure: "Blood Pressure Monitoring",
        date: "2023-05-03",
        approvedBy: "Dr. Michael Chang",
        grade: "A-",
        score: 92,
        notes: "Proper technique with good patient communication",
      },
    ],
    Pediatrics: [
      {
        id: "PED-001",
        patientId: "SMC-2023-0107",
        patientName: "Tommy Lee",
        procedure: "Growth Assessment",
        date: "2023-04-16",
        approvedBy: "Dr. Emily Rodriguez",
        grade: "A",
        score: 96,
        notes: "Accurate measurements and plotting on growth chart",
      },
      {
        id: "PED-002",
        patientId: "SMC-2023-0109",
        patientName: "Lily Wang",
        procedure: "Developmental Screening",
        date: "2023-04-18",
        approvedBy: "Dr. Jessica Williams",
        grade: "B+",
        score: 88,
        notes:
          "Good rapport with child, could be more thorough with screening questions",
      },
      {
        id: "PED-003",
        patientId: "SMC-2023-0112",
        patientName: "Ethan Brown",
        procedure: "Vaccination",
        date: "2023-04-21",
        approvedBy: "Dr. Emily Rodriguez",
        grade: "A-",
        score: 92,
        notes: "Proper technique and good distraction methods",
      },
      {
        id: "PED-004",
        patientId: "SMC-2023-0115",
        patientName: "Sofia Martinez",
        procedure: "Otoscopic Examination",
        date: "2023-04-23",
        approvedBy: "Dr. Jessica Williams",
        grade: "B",
        score: 84,
        notes: "Needs improvement in handling uncooperative children",
      },
      {
        id: "PED-005",
        patientId: "SMC-2023-0118",
        patientName: "Noah Wilson",
        procedure: "Pediatric Physical Exam",
        date: "2023-04-26",
        approvedBy: "Dr. Emily Rodriguez",
        grade: "A",
        score: 95,
        notes: "Excellent approach and technique with pediatric patient",
      },
    ],
    Surgery: [
      {
        id: "SUR-001",
        patientId: "SMC-2023-0121",
        patientName: "William Taylor",
        procedure: "Suturing",
        date: "2023-04-17",
        approvedBy: "Dr. Michael Chang",
        grade: "A-",
        score: 91,
        notes: "Good technique and knot tying",
      },
      {
        id: "SUR-002",
        patientId: "SMC-2023-0124",
        patientName: "Emma Davis",
        procedure: "Wound Dressing",
        date: "2023-04-19",
        approvedBy: "Dr. Robert Miller",
        grade: "B+",
        score: 88,
        notes:
          "Proper cleaning technique, could improve on dressing application",
      },
      {
        id: "SUR-003",
        patientId: "SMC-2023-0127",
        patientName: "Lucas Garcia",
        procedure: "Surgical Scrubbing",
        date: "2023-04-22",
        approvedBy: "Dr. Michael Chang",
        grade: "A",
        score: 94,
        notes: "Excellent technique and attention to detail",
      },
      {
        id: "SUR-004",
        patientId: "SMC-2023-0130",
        patientName: "Ava Rodriguez",
        procedure: "Catheterization",
        date: "2023-04-24",
        approvedBy: "Dr. Sarah Johnson",
        grade: "B",
        score: 85,
        notes: "Needs to improve on maintaining sterile field",
      },
      {
        id: "SUR-005",
        patientId: "SMC-2023-0133",
        patientName: "Jackson Brown",
        procedure: "Sterile Field Preparation",
        date: "2023-04-27",
        approvedBy: "Dr. Michael Chang",
        grade: "A-",
        score: 92,
        notes: "Good awareness of sterile principles",
      },
    ],
    "OB/GYN": [
      {
        id: "OBG-001",
        patientId: "SMC-2023-0136",
        patientName: "Olivia Martinez",
        procedure: "Prenatal Assessment",
        date: "2023-04-18",
        approvedBy: "Dr. Jessica Williams",
        grade: "A",
        score: 95,
        notes: "Thorough assessment with good patient communication",
      },
      {
        id: "OBG-002",
        patientId: "SMC-2023-0139",
        patientName: "Isabella Johnson",
        procedure: "Fetal Heart Rate Monitoring",
        date: "2023-04-20",
        approvedBy: "Dr. Emily Rodriguez",
        grade: "B+",
        score: 87,
        notes: "Good technique, needs to improve interpretation",
      },
      {
        id: "OBG-003",
        patientId: "SMC-2023-0142",
        patientName: "Sophia Wilson",
        procedure: "Breast Examination",
        date: "2023-04-23",
        approvedBy: "Dr. Jessica Williams",
        grade: "A-",
        score: 90,
        notes: "Proper technique and patient education",
      },
      {
        id: "OBG-004",
        patientId: "SMC-2023-0145",
        patientName: "Mia Taylor",
        procedure: "Pelvic Examination",
        date: "2023-04-25",
        approvedBy: "Dr. Sarah Johnson",
        grade: "B",
        score: 84,
        notes: "Needs more practice with speculum insertion",
      },
      {
        id: "OBG-005",
        patientId: "SMC-2023-0148",
        patientName: "Charlotte Brown",
        procedure: "Pap Smear Collection",
        date: "2023-04-28",
        approvedBy: "Dr. Jessica Williams",
        grade: "A-",
        score: 91,
        notes: "Good sample collection technique",
      },
    ],
    Psychiatry: [
      {
        id: "PSY-001",
        patientId: "SMC-2023-0151",
        patientName: "Liam Davis",
        procedure: "Mental Status Examination",
        date: "2023-04-19",
        approvedBy: "Dr. Robert Miller",
        grade: "A",
        score: 94,
        notes: "Comprehensive assessment with good rapport",
      },
      {
        id: "PSY-002",
        patientId: "SMC-2023-0154",
        patientName: "Amelia Garcia",
        procedure: "Depression Screening",
        date: "2023-04-21",
        approvedBy: "Dr. Sarah Johnson",
        grade: "B+",
        score: 86,
        notes:
          "Good use of screening tools, needs to improve follow-up questions",
      },
      {
        id: "PSY-003",
        patientId: "SMC-2023-0157",
        patientName: "Benjamin Martinez",
        procedure: "Anxiety Assessment",
        date: "2023-04-24",
        approvedBy: "Dr. Robert Miller",
        grade: "A-",
        score: 92,
        notes: "Thorough assessment with appropriate tools",
      },
      {
        id: "PSY-004",
        patientId: "SMC-2023-0160",
        patientName: "Evelyn Wilson",
        procedure: "Cognitive Evaluation",
        date: "2023-04-26",
        approvedBy: "Dr. Emily Rodriguez",
        grade: "A",
        score: 95,
        notes: "Excellent approach and interpretation",
      },
      {
        id: "PSY-005",
        patientId: "SMC-2023-0163",
        patientName: "Henry Johnson",
        procedure: "Risk Assessment",
        date: "2023-04-29",
        approvedBy: "Dr. Robert Miller",
        grade: "B",
        score: 85,
        notes: "Needs improvement in detecting subtle risk factors",
      },
    ],
    "Emergency Medicine": [],
  };

  return departmentProcedures[categoryName] || [];
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
      <div className="overflow-hidden">
        {/* Mobile View */}
        <div className="block md:hidden space-y-3">
          {getFilteredProcedures(category)
            .filter(
              (proc) =>
                (!selectedProcedureFilter ||
                  proc.procedure === selectedProcedureFilter) &&
                (proc.patientName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                  proc.procedure
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()))
            )
            .map((proc) => (
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
        <table className="hidden md:table w-full divide-y divide-gray-200">
          <thead>
            <tr
              style={{
                backgroundImage: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
              }}
            >
              <th
                scope="col"
                className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                Patient
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                Procedure
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                Approved By
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                Grade
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                Score
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {getFilteredProcedures(category)
              .filter(
                (proc) =>
                  (!selectedProcedureFilter ||
                    proc.procedure === selectedProcedureFilter) &&
                  (proc.patientName
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                    proc.procedure
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()))
              )
              .map((proc) => (
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
  );
};

export default StudentTabCategoryMarks;
