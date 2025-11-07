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
        <div className="p-4 bg-white border-t border-gray-200 text-sm text-gray-700 space-y-2">
          <p>
            <span className="font-medium">Assignment ID:</span>{" "}
            {record.assignment_id}
          </p>
          <p>
            <span className="font-medium">Findings:</span> {record.findings}
          </p>
          <p>
            <span className="font-medium">Diagnosis:</span> {record.diagnosis}
          </p>
          <p>
            <span className="font-medium">Treatment:</span> {record.treatment}
          </p>
          <p>
            <span className="font-medium">Vital Signs:</span>{" "}
            {record.vital_signs}
          </p>
          <p>
            <span className="font-medium">Symptoms:</span> {record.symptoms}
          </p>
          <p>
            <span className="font-medium">Observation:</span>{" "}
            {record.observation}
          </p>
          <p>
            <span className="font-medium">Provider:</span>{" "}
            <User size={14} className="inline mr-1" /> {record.student_id}
          </p>
          <p>
            <span className="font-medium">Doctor:</span>{" "}
            <UserCheck size={14} className="inline mr-1" /> {record.doctor_id}
          </p>
          <p>
            <span className="font-medium">Approved On:</span>{" "}
            {record.approved_time
              ? new Date(record.approved_time).toLocaleString()
              : "Pending"}
          </p>
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
          onClose={() => {
            setNewRecord(false);
          }}
        />
      )}
      <div className="divide-y divide-gray-100">
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
