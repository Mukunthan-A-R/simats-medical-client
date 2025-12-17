import { ChevronDownIcon, ChevronLeftIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientById } from "../../services/patientService";
import { fetchPatientMedications } from "../../services/patient/fetchPatientMedications";
import PrescriptionDataComponent from "../../components/patient/prescription/PrescriptionDataComponent";
import PageHeader from "../../components/header/PageHeader";

const PatientPrescription = () => {
  const navigate = useNavigate();
  const { patientId } = useParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const {
    data: patientData,
    // isLoading,
    // isError,
  } = useQuery({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatientById(patientId),
    enabled: !!patientId,
  });

  let assignmentId = patientData?.assignment_id;

  const {
    data: patientMedicationData1,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["patientMedications", assignmentId, patientId],
    queryFn: () => fetchPatientMedications(assignmentId, patientId),
    enabled: !!assignmentId && !!patientId,
  });

  // console.log("patientMedicationData1");
  // console.log(patientMedicationData1);

  if (isLoading) return <p className="p-4 text-amber-500">Loading ...</p>;
  if (isError)
    return (
      <div className="p-4">
        <PageHeader title={"My Prescriptions"} />
        <p className="pt-4 text-red-500">Error loading prescriptions Data !</p>
      </div>
    );

  const patientMedicationData = patientMedicationData1?.data;

  return (
    <div className="px-6 py-4">
      <PageHeader title={"My Prescriptions"} />

      {/* Search and Filter */}
      <div
        className="rounded-xl shadow-sm p-5 my-5"
        style={{
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05), inset 0 -5px 10px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
        }}
      >
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon size={18} className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by medication, doctor, or ID..."
            className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
              backgroundColor: "rgba(255,255,255,0.9)",
            }}
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="status-filter"
            className="block text-sm font-medium text-gray-700 mr-3"
            style={{
              textShadow: "0 1px 0 rgba(255,255,255,0.7)",
            }}
          >
            Status:
          </label>
          <div className="relative">
            <select
              id="status-filter"
              className="block pl-3 pr-10 py-2.5 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg appearance-none"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
            >
              <option value="All">All Prescriptions</option>
              <option value="Active">Active</option>
              <option value="Bought">Bought</option>
              <option value="Receive">Receive</option>
              <option value="Completed">Completed</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDownIcon size={18} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <div
          className="p-4 border-b border-gray-100 flex justify-between items-center"
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
            borderBottom: "1px solid rgba(0,0,0,0.2)",
          }}
        >
          <h2 className="font-medium text-white">Prescription History</h2>
          <span
            className="px-3 py-1 text-xs font-medium rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
              color: "#0066cc",
              minWidth: "80px",
              height: "22px",
            }}
          >
            {patientMedicationData1?.count} Prescriptions
          </span>
        </div>
        <PrescriptionDataComponent
          patientMedicationData={patientMedicationData}
        />
      </div>
    </div>
  );
};

export default PatientPrescription;
