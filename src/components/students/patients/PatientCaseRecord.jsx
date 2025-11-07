import { useState } from "react";
import { ClipboardListIcon, PlusIcon, X, XIcon } from "lucide-react";
import {
  Check,
  Clock,
  ChevronDown,
  ChevronUp,
  User,
  UserCheck,
} from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../../utils/constants";
import CreateCaseRecord from "./CreateCaseRecord";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientCaseRecords } from "../../../services/patientCaseRecordsServices";

// Header component
const CaseRecordsHeader = ({ onAdd, isFormOpen }) => (
  <div className="px-5 py-4 bg-gradient-to-b from-gray-100 to-gray-200 shadow-inner flex items-center justify-between rounded-t-xl">
    <div className="flex items-center gap-2">
      <ClipboardListIcon size={18} className="text-blue-600" />
      <h3 className="font-medium text-gray-800 text-base">Case Records</h3>
    </div>
    <button
      className={`px-3 py-1.5 rounded-md text-xs font-medium ${aquaButtonStyle} ${aquaGlossEffect} flex items-center`}
      style={{
        background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
        border: "1px solid rgba(0,0,0,0.2)",
        boxShadow:
          "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
        color: "white",
      }}
      onClick={onAdd}
    >
      {/* Toggle the icon and text based on isFormOpen */}
      {isFormOpen ? (
        <>
          <XIcon size={12} className="mr-1.5" />
          Close Entry
        </>
      ) : (
        <>
          <PlusIcon size={12} className="mr-1.5" />
          Add Entry
        </>
      )}
    </button>
  </div>
);

// Individual case record card
const CaseRecordCard = ({ record }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Normalize approval status
  const isApproved = record.approval?.toLowerCase();

  // Determine gradient based on status
  let statusGradient;
  if (isApproved === "approved") {
    statusGradient = "from-green-400 to-green-600";
  } else if (isApproved === "rejected") {
    statusGradient = "from-red-400 to-red-600";
  } else {
    statusGradient = "from-orange-400 to-yellow-500";
  }

  return (
    <div className="border border-gray-200 rounded-md shadow-sm mb-3">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-gradient-to-b ${statusGradient} border border-gray-300 shadow`}
          >
            {isApproved === "approved" ? (
              <Check size={16} className="text-white" />
            ) : isApproved === "rejected" ? (
              <X size={16} className="text-white" />
            ) : (
              <Clock size={16} className="text-white" />
            )}
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              {record.procedure}
            </h4>
            <p className="text-xs text-gray-500">
              {record.patient_id} • Dept {record.dept_id} •{" "}
              {new Date(record.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div>
          {isOpen ? (
            <ChevronUp size={18} className="text-gray-500" />
          ) : (
            <ChevronDown size={18} className="text-gray-500" />
          )}
        </div>
      </div>

      {/* Card content */}
      {isOpen && (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-sm text-gray-700">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Case Record Details
            </h3>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                record.approval === "approved"
                  ? "bg-green-100 text-green-700"
                  : record.approval === "rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {record.approval.charAt(0).toUpperCase() +
                record.approval.slice(1)}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            <p>
              <span className="font-medium text-gray-800">Assignment ID:</span>{" "}
              {record.assignment_id}
            </p>
            <p>
              <span className="font-medium text-gray-800">Vital Signs:</span>{" "}
              {record.vital_signs}
            </p>
            <p>
              <span className="font-medium text-gray-800">Symptoms:</span>{" "}
              {record.symptoms}
            </p>
            <p>
              <span className="font-medium text-gray-800">Observation:</span>{" "}
              {record.observation}
            </p>
            <p>
              <span className="font-medium text-gray-800">Findings:</span>{" "}
              {record.findings}
            </p>
            <p>
              <span className="font-medium text-gray-800">Diagnosis:</span>{" "}
              {record.diagnosis}
            </p>
            <p className="sm:col-span-2">
              <span className="font-medium text-gray-800">Treatment:</span>{" "}
              {record.treatment}
            </p>
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-gray-200"></div>

          {/* Footer Info */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 text-gray-600">
            <div>
              <p className="flex items-center">
                <User size={14} className="mr-2 text-blue-600" />
                <span className="font-medium">Provider:</span>{" "}
                {record.student_id}
              </p>
              <p className="flex items-center mt-1">
                <UserCheck size={14} className="mr-2 text-green-600" />
                <span className="font-medium">Doctor:</span> {record.doctor_id}
              </p>
            </div>

            <div className="text-right">
              <p>
                <span className="font-medium text-gray-800">Approved On:</span>{" "}
                {record.approved_time
                  ? new Date(record.approved_time).toLocaleString()
                  : "Pending"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main component
const PatientCaseRecord = ({ assignmentId }) => {
  const [newRecord, setNewRecord] = useState(false);

  const {
    data: caseRecord,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["patientCaseRecords", assignmentId],
    queryFn: () => fetchPatientCaseRecords(assignmentId),
    enabled: !!assignmentId,
  });

  // console.log("caseRecord");
  // console.log(caseRecord?.caseRecords);
  // console.log(caseRecord?.total_records);

  const caseRecords = caseRecord?.caseRecords || [];

  const handleAddEntry = () => {
    console.log("Add entry clicked");
    setNewRecord(!newRecord);
  };

  return (
    <div className="overflow-hidden mb-6 rounded-xl shadow-sm border border-gray-200 bg-white animate-fadeIn">
      <CaseRecordsHeader onAdd={handleAddEntry} isFormOpen={newRecord} />
      {newRecord && (
        <CreateCaseRecord
          assignmentId={assignmentId}
          onClose={() => {
            setNewRecord(false);
          }}
        />
      )}
      <div className="divide-y divide-gray-100 px-3 pt-2">
        {caseRecords.length > 0 ? (
          caseRecords.map((record) => (
            <CaseRecordCard key={record.record_id} record={record} />
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No case records yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientCaseRecord;
