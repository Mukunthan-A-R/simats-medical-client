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
    <div className="break-inside-avoid flex flex-col justify-between bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200">
      {/* ---------- TOP: PATIENT PROFILE ---------- */}
      <div className="p-4 flex items-center gap-3 border-b border-gray-100 bg-linear-to-b from-gray-50 to-white">
        <img
          src={
            patient?.patientPhoto ||
            "https://img.freepik.com/premium-vector/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-vector-illustration_561158-4195.jpg?semt=ais_hybrid&w=740&q=80"
          }
          alt={patient.patient_name}
          className="h-12 w-12 rounded-full border object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-900 text-sm">
            {patient.patient_name}
          </h2>
          <p className="text-xs text-gray-400">{patient.patient_id}</p>
        </div>
      </div>

      {/* ---------- FILES PREVIEW IF EXIST ---------- */}
      {fileIds.length > 0 && (
        <div className="w-full bg-gray-50 p-2 ">
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
          <p className="text-gray-500">
            <span className="font-semibold text-gray-700">Dept:</span>{" "}
            {patient.dept_name}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold text-gray-700">Requested by:</span>{" "}
            {patient.student_name}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold text-gray-700">Admission:</span>{" "}
            {formatDate ? formatDate("2023-08-30") : "--"}
          </p>
        </div>

        {/* ---------- ACTION BUTTONS AT BOTTOM ---------- */}
        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={() => setViewSummary(true)}
            className="w-full py-2 text-sm rounded-xl text-white bg-linear-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all shadow-sm"
          >
            Report Docs
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => rejectRecord(patient.record_id)}
              className="w-full py-2 text-sm rounded-xl text-white bg-linear-to-b from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 transition-all shadow-sm"
            >
              <XIcon size={14} className="inline mr-1" /> Reject
            </button>

            <button
              onClick={() => approveRecord(patient.record_id)}
              className="w-full py-2 text-sm rounded-xl text-white bg-linear-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-all shadow-sm"
            >
              <CheckIcon size={14} className="inline mr-1" /> Approve
            </button>
          </div>
        </div>
      </div>

      {/* ---------- SUMMARY MODAL ---------- */}
      {viewSummary && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-800">
                Patient Medical Data
              </p>
              <button onClick={() => setViewSummary(false)}>
                <XIcon
                  size={20}
                  className="text-gray-500 hover:text-gray-700"
                />
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
