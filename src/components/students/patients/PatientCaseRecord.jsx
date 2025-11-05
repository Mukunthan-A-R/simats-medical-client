import React, { useState } from "react";
import {
  CheckCircleIcon,
  ClipboardListIcon,
  ClockIcon,
  PlusIcon,
  UserCheckIcon,
  UserIcon,
} from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../../utils/constants";
import CreateCaseRecord from "./CreateCaseRecord";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientCaseRecords } from "../../../services/patientCaseRecordsServices";

// Header component
const CaseRecordsHeader = ({ onAdd }) => (
  <div className="px-5 py-4 border-b bg-gradient-to-b from-gray-100 to-gray-200 shadow-inner flex items-center justify-between rounded-t-xl">
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
      <PlusIcon size={12} className="mr-1.5" />
      Add Entry
    </button>
  </div>
);

// Individual case record card
const CaseRecordCard = ({ record }) => {
  const statusGradient =
    record.status === "Approved"
      ? "from-green-400 to-green-600"
      : "from-orange-400 to-red-500";

  return (
    <div className="p-4 hover:bg-blue-50 transition-colors rounded-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 bg-gradient-to-b ${statusGradient} border border-gray-300 shadow`}
          >
            {record.status === "Approved" ? (
              <CheckCircleIcon size={14} className="text-white" />
            ) : (
              <ClockIcon size={14} className="text-white" />
            )}
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              {record.procedure}
            </h4>
            <p className="text-xs text-gray-500 mt-0.5">
              {record.date} • {record.time} • {record.department}
            </p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-md text-sm bg-blue-50 border border-blue-100 mb-2">
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Findings:</span> {record.findings}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Diagnosis:</span> {record.diagnosis}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Treatment:</span> {record.treatment}
        </p>
      </div>

      <div className="flex justify-between text-xs text-gray-600">
        <div>
          <UserIcon size={12} className="inline mr-1" /> Provider:{" "}
          {record.provider}
          {record.approver && (
            <>
              {" "}
              • <UserCheckIcon
                size={12}
                className="inline mx-1"
              /> Approver: {record.approver}
            </>
          )}
        </div>
        <div className="text-green-600 font-medium">
          Approved on: {record.approvedOn}
        </div>
      </div>
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
    queryKey: ["patient", assignmentId],
    queryFn: () => fetchPatientCaseRecords(assignmentId),
    enabled: !!assignmentId,
  });

  console.log("caseRecord");
  console.log(caseRecord?.caseRecords);
  console.log(caseRecord?.total_records);

  const caseRecords = caseRecord?.caseRecords || [];

  // const caseRecords = [
  //   {
  //     id: 1,
  //     procedure: "Cardiac Examination",
  //     department: "Cardiology",
  //     findings: "Mild chest pain, normal ECG",
  //     diagnosis: "Angina",
  //     treatment: "Prescribed rest and medications",
  //     status: "Approved",
  //     provider: "Dr. Smith",
  //     approver: "Dr. Allen",
  //     date: "2025-11-01",
  //     time: "10:45 AM",
  //     grade: "A",
  //     approvedOn: "2025-11-02 14:15",
  //   },
  // ];

  const handleAddEntry = () => {
    console.log("Add entry clicked");
    setNewRecord(true);
  };

  return (
    <div className="overflow-hidden mb-6 rounded-xl shadow-sm border border-gray-200 bg-white animate-fadeIn">
      <CaseRecordsHeader onAdd={handleAddEntry} />
      <div className="divide-y divide-gray-100">
        {caseRecords.length > 0 ? (
          caseRecords.map((record) => (
            <CaseRecordCard key={record.id} record={record} />
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No case records yet.
          </div>
        )}
      </div>
      {newRecord && (
        <CreateCaseRecord
          onClose={() => {
            setNewRecord(false);
          }}
        />
      )}
    </div>
  );
};

export default PatientCaseRecord;
