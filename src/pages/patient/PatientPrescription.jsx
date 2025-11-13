import {
  ChevronDownIcon,
  ChevronLeftIcon,
  FileTextIcon,
  PillIcon,
  SearchIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PatientPrescriptionDetails from "../../components/patient/PatientPrescriptionDetails";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientById } from "../../services/patientService";
import { fetchMedicationsByAssignment } from "../../services/studentMedication";

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
    data: patientMedicationData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentMedications", assignmentId],
    queryFn: () => fetchMedicationsByAssignment(assignmentId),
    enabled: !!assignmentId,
  });

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error loading prescriptions.</p>;

  console.log("patientData");
  console.log(patientMedicationData);
  // console.log(patientData?.assignment_id);

  return (
    <div className="px-6 py-4">
      <div className="flex flex-row items-center">
        <button
          className={`mr-2 w-8 h-8 flex items-center justify-center rounded-full       `}
          onClick={() => navigate(-1)}
          style={{
            background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <ChevronLeftIcon size={18} className="text-blue-700" />
        </button>
        <h2 className="text-xl text-blue-900 font-medium">My Prescriptions</h2>
      </div>

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
            6 Prescriptions
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
const PrescriptionDataComponent = ({ patientMedicationData = [] }) => {
  const [prescriptionModal, setPrescriptionModal] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  if (!patientMedicationData || patientMedicationData.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No prescriptions found.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-b-lg">
      {patientMedicationData.map((item) => (
        <div
          key={item.medication_id}
          className="text-black p-4 flex flex-row justify-between border-b border-gray-200 last:border-none"
        >
          {/* Left side */}
          <div className="flex flex-row items-center gap-2">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center mr-3"
              style={{
                background: "linear-gradient(to bottom, #e6f0ff, #cce0ff)",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <PillIcon size={20} className="text-blue-600" />
            </div>
            <div className="text-gray-600 text-sm">
              <p className="font-medium text-black text-base">
                RX-{item.medication_id}
              </p>
              <p>{new Date(item.created_at).toLocaleDateString()}</p>
              <p className="font-medium">Dr. {item.doctor_name}</p>
              <p className="font-medium">Dept: {item.department_name}</p>
            </div>
          </div>

          {/* Right side */}
          <div className="text-right flex flex-col items-end gap-y-1">
            {/* <p className="font-medium capitalize">{item.status}</p> */}

            <button
              className={`px-4 py-0.5 rounded-full text-xs text-white font-medium ${
                item.status.toLowerCase() === "approved"
                  ? "bg-green-600"
                  : item.status.toLowerCase() === "rejected"
                  ? "bg-gray-500"
                  : "bg-blue-600"
              }`}
              onClick={() => alert("Renew prescription")}
              style={{
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.status}
            </button>

            <button
              className="h-7 flex items-center px-2 py-0 text-xs font-medium text-white rounded-md mt-1"
              onClick={() => {
                setSelectedPrescription(item);
                setPrescriptionModal(true);
              }}
              style={{
                background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <FileTextIcon size={10} className="mr-1" />
              View
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {prescriptionModal && selectedPrescription && (
        <PatientPrescriptionDetails
          prescription={selectedPrescription}
          onClose={() => {
            setPrescriptionModal(false);
            setSelectedPrescription(null);
          }}
        />
      )}
    </div>
  );
};
