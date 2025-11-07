import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  RefreshCwIcon,
  UsersIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchStudentPatients } from "../../../services/studentPatientsServices";

const StudentMyPatientTab = () => {
  const navigate = useNavigate();

  const { studentId } = useParams();
  const [showAllPatients, setShowAllPatients] = useState(false);

  const {
    data: patients,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["studentPatients", studentId],
    queryFn: () => fetchStudentPatients(studentId),
    enabled: !!studentId,
  });

  // console.log("patients");
  // console.log(patients);

  if (isLoading)
    return <p className="text-gray-700 text-center">Loading patients...</p>;
  if (isError)
    return (
      <p className="text-red-500 text-center ">Failed to load patients.</p>
    );

  const patientList = patients?.data || [];
  const displayedPatients = showAllPatients
    ? patientList
    : patientList.slice(0, 5);

  return (
    <div className="overflow-hidden mb-6 rounded-lg shadow-sm bg-white animate-fadeIn">
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="flex items-center">
          <UsersIcon size={18} className="text-blue-600 mr-2.5" />
          <h3 className="font-medium text-gray-800 text-base">
            Patients Assigned to Me
          </h3>
        </div>
        <button
          onClick={() => refetch()}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-gradient-to-b from-gray-100 to-gray-200 text-blue-600 flex items-center border border-gray-300 shadow-inner"
        >
          <RefreshCwIcon size={12} className="mr-1.5" /> Refresh List
        </button>
      </div>

      <div className="py-4 text-center text-gray-600">
        {patientList.length === 0 && <p>No patients for now !</p>}
      </div>

      {/* Patient List */}
      <div className="divide-y divide-gray-100">
        {displayedPatients.map((patient) => (
          <div
            onClick={() => {
              navigate(`/student/${studentId}/patient/${patient.patient_id}`);
            }}
            key={patient.patient_id}
            className="p-4 hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 flex items-center justify-center mr-3 shadow-inner border border-gray-300">
                <UsersIcon size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {patient.name}
                </p>
                <p className="text-xs text-gray-600">
                  {patient.gender} • {patient.blood_group || "N/A"}
                </p>
              </div>
            </div>
            <ArrowRightIcon size={14} className="text-blue-600" />
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {patientList.length > 5 && (
        <div className="px-5 py-3 flex justify-center bg-gradient-to-b from-gray-100 to-gray-200">
          <button
            onClick={() => setShowAllPatients(!showAllPatients)}
            className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-700 text-white flex items-center shadow-inner border border-gray-300"
          >
            <span>{showAllPatients ? "Show Less" : "View All Patients"}</span>
            <ChevronDownIcon
              size={16}
              className={`ml-1.5 transition-transform duration-300 ${
                showAllPatients ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentMyPatientTab;
