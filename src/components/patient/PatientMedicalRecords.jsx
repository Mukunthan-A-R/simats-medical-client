import React, { useState } from "react";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import PatientMedicalRecordsList from "./PatientMedicalRecordsList";
import { fetchPatientCaseRecordsData } from "../../services/patient/fetchPatientCaseRecords";
import { useQuery } from "@tanstack/react-query";

const PatientMedicalRecords = ({ assignmentId }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterDepartment, setFilterDepartment] = useState("All");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["patientCaseRecords", assignmentId],
    queryFn: () => fetchPatientCaseRecordsData(assignmentId),
    enabled: !!assignmentId,
  });

  if (isLoading) return <p>Loading case records...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  // const caseRecords = data?.caseRecords ?? [];

  console.log("data");
  console.log(data.caseRecords);

  const dataRecords = data?.caseRecords;

  const departments = ["All", "cardiology", "dermatology", "radiology"];

  const sampleMedicalRecords = [
    {
      id: "MR-2025-001",
      date: "2025-10-01",
      time: "09:00 AM",
      type: "Consultation",
      description: "Routine checkup for blood pressure and vitals.",
      performedBy: "Dr. Sarah Johnson",
      supervisedBy: "Dr. Robert Chen",
      department: "General Medicine",
      status: "Completed",
      iconType: "stethoscope",
      images: [],
    },
    {
      id: "MR-2025-002",
      date: "2025-10-03",
      time: "11:30 AM",
      type: "Laboratory",
      description: "Complete Blood Count (CBC) test.",
      performedBy: "Lab Tech Michael Wong",
      supervisedBy: "Dr. Emily Rodriguez",
      department: "Pathology",
      status: "Results Available",
      iconType: "test-tube",
      images: [
        {
          title: "Blood Smear",
          description: "Peripheral blood smear under 100x magnification.",
          url: "https://via.placeholder.com/100",
          type: "image",
        },
      ],
    },
    {
      id: "MR-2025-003",
      date: "2025-10-05",
      time: "02:15 PM",
      type: "Procedure",
      description: "Electrocardiogram (ECG) recording.",
      performedBy: "Nurse Lisa Chen",
      supervisedBy: "Dr. James Wilson",
      department: "Cardiology",
      status: "Completed",
      iconType: "heart-pulse",
      images: [
        {
          title: "ECG Lead II",
          description: "Normal sinus rhythm observed.",
          url: "https://via.placeholder.com/100",
          type: "image",
        },
      ],
    },
    {
      id: "MR-2025-004",
      date: "2025-10-07",
      time: "10:00 AM",
      type: "Medication",
      description: "Prescription for Amoxicillin 500mg for sinus infection.",
      performedBy: "Dr. Mark Thompson",
      supervisedBy: "Dr. Mark Thompson",
      department: "Internal Medicine",
      status: "Active",
      iconType: "pill",
      images: [],
    },
    {
      id: "MR-2025-005",
      date: "2025-10-09",
      time: "03:45 PM",
      type: "Laboratory",
      description: "Lipid profile test.",
      performedBy: "Lab Tech Jennifer Lee",
      supervisedBy: "Dr. Emily Rodriguez",
      department: "Pathology",
      status: "Results Available",
      iconType: "test-tube",
      images: [
        {
          title: "Cholesterol Chart",
          description: "Graphical representation of patient's lipid profile.",
          url: "https://via.placeholder.com/100",
          type: "image",
        },
      ],
    },
  ];

  const selectClasses =
    "w-full pl-2 pr-6 py-1.5 text-sm border border-gray-300 rounded-md appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white";
  const wrapperClasses =
    "p-3 mb-4 bg-white rounded-lg shadow-sm border border-gray-200 print:hidden";
  const iconClasses =
    "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none";

  return (
    <div>
      {/* Search & Filter Section */}
      <div className={wrapperClasses}>
        <div className="flex flex-col sm:flex-row gap-2">
          Search Box
          <div className="relative flex-1">
            <SearchIcon
              size={14}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search records..."
              className="w-full pl-7 pr-2 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-36">
              <select
                className={selectClasses}
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Consultation">Consultations</option>
                <option value="Laboratory">Laboratory Tests</option>
                <option value="Procedure">Procedures</option>
                <option value="Medication">Medications</option>
              </select>
              <ChevronDownIcon size={14} className={iconClasses} />
            </div>
            <div className="relative flex-1 sm:w-36">
              <select
                className={selectClasses}
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
              >
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department === "All"
                      ? "All Departments"
                      : department.charAt(0).toUpperCase() +
                        department.slice(1)}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={14} className={iconClasses} />
            </div>
          </div>
        </div>
      </div>
      <PatientMedicalRecordsList
        records={dataRecords}
      ></PatientMedicalRecordsList>
    </div>
  );
};

export default PatientMedicalRecords;
