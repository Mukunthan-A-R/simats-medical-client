import {
  AlertTriangleIcon,
  CheckIcon,
  HeartPulseIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { formatDate } from "../../utils/constants";
import PatientMedicalRecordReport from "../../components/patient/PatientMedicalRecordReport";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  approveProcedureCaseRecord,
  rejectProcedureCaseRecord,
} from "../../services/doctorProcedureCaseRecord";
import DoctorCaseRecordFileReader from "./dashboard/file-reader/DoctorCaseRecordFileReader";

const PatientCaseApprovalCard = ({ patient }) => {
  const [viewSummary, setViewSummary] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: approveRecord } = useMutation({
    mutationFn: approveProcedureCaseRecord,
    onSuccess: () => {
      queryClient.invalidateQueries(["patient"]);
      queryClient.invalidateQueries(["patientCaseRecords"]);
      toast.success(`Record Approved`);
    },
    onError: () => toast.error(`Failed to approve record`),
  });

  const { mutate: rejectRecord } = useMutation({
    mutationFn: rejectProcedureCaseRecord,
    onSuccess: () => {
      queryClient.invalidateQueries(["patient"]);
      queryClient.invalidateQueries(["patientCaseRecords"]);
      toast.success(`Record Rejected`);
    },
    onError: () => toast.error(`Error Rejecting Approval`),
  });

  if (patient?.approval !== "requested") return null;

  const fileIds = patient?.form_data?.fields || [];

  return (
    <div className="break-inside-avoid flex flex-col justify-between bg-white rounded-xl border shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden">
      {/* ---------- TOP: PATIENT PROFILE ---------- */}
      <div className="p-4 flex items-center gap-3 border-b">
        <img
          src={patient.patientPhoto}
          alt={patient.patient_name}
          className="h-12 w-12 rounded-full border object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-900">
            {patient.patient_name}
          </h2>
          <p className="text-xs text-gray-500">{patient.patient_id}</p>
        </div>
      </div>

      {/* ---------- FILES PREVIEW IF EXIST ---------- */}
      {fileIds.length > 0 && (
        <div className="w-full bg-gray-100 p-2 border-b">
          <DoctorCaseRecordFileReader fileIds={fileIds} />
        </div>
      )}

      {/* ---------- PATIENT DETAILS ---------- */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="text-xs space-y-1">
          <p className="flex items-center text-blue-600 font-medium">
            <HeartPulseIcon size={12} className="mr-1" /> {patient.diagnosis}
          </p>
          <p className="flex items-center text-red-600 font-medium">
            <AlertTriangleIcon size={12} className="mr-1" /> {patient.findings}
          </p>
          <p>
            <b>Dept:</b> {patient.dept_name}
          </p>
          <p>
            <b>Requested by:</b> {patient.student_name}
          </p>
          <p>
            <b>Admission:</b> {formatDate ? formatDate("2023-08-30") : "--"}
          </p>
        </div>

        {/* ---------- ACTION BUTTONS AT BOTTOM ---------- */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setViewSummary(true)}
            className="flex-1 py-2 text-sm rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            Report Docs
          </button>

          <button
            onClick={() => rejectRecord(patient.record_id)}
            className="flex-1 py-2 text-sm rounded-lg text-white bg-red-500 hover:bg-red-600 transition"
          >
            <XIcon size={14} className="inline" /> Reject
          </button>

          <button
            onClick={() => approveRecord(patient.record_id)}
            className="flex-1 py-2 text-sm rounded-lg text-white bg-green-500 hover:bg-green-600 transition"
          >
            <CheckIcon size={14} className="inline" /> Approve
          </button>
        </div>
      </div>

      {/* ---------- SUMMARY MODAL ---------- */}
      {viewSummary && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <p className="text-sm font-medium">Patient Medical Data</p>
              <button onClick={() => setViewSummary(false)}>
                <XIcon size={20} />
              </button>
            </div>
            <div className="p-4">
              <PatientMedicalRecordReport
                patient={patient}
                onClose={() => setViewSummary(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientCaseApprovalCard;
