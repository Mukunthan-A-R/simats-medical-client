import { useState } from "react";
import { fetchPatientCaseRecords } from "../../../../services/patientCaseRecordsServices";
import { useQuery } from "@tanstack/react-query";
import { ClipboardListIcon, PlusIcon, XIcon } from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../../../utils/constants";
import NewPatientFormCaseRecord from "./NewPatientFormCaseRecord";
import ProcedureCaseRecordsList from "./ProcedureCaseRecordsList";

const PatientFormCaseRecord = ({ assignmentId }) => {
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

  const caseRecords = caseRecord?.caseRecords || [];

  const handleAddEntry = () => {
    console.log("Add entry clicked");
    setNewRecord(!newRecord);
  };

  return (
    <div className="overflow-hidden mb-6 rounded-xl shadow-sm border border-gray-200 bg-white animate-fadeIn">
      <CaseRecordsHeader
        onAdd={handleAddEntry}
        assignmentId={assignmentId}
        isFormOpen={newRecord}
      />
      <ProcedureCaseRecordsList
        assignmentId={assignmentId}
      ></ProcedureCaseRecordsList>
    </div>
  );
};

export default PatientFormCaseRecord;

// Header component
const CaseRecordsHeader = ({ onAdd, isFormOpen, assignmentId }) => (
  <>
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
    {isFormOpen && (
      <NewPatientFormCaseRecord
        assignmentId={assignmentId}
      ></NewPatientFormCaseRecord>
    )}
  </>
);
