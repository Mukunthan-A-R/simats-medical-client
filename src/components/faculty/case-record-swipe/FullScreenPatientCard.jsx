import { useState } from "react";
import { CheckIcon, ClipboardListIcon, XIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  approveProcedureCaseRecord,
  rejectProcedureCaseRecord,
} from "../../../services/doctorProcedureCaseRecord";
import PatientMedicalRecordReport from "../../patient/PatientMedicalRecordReport";
import DoctorCaseRecordFileReader from "../dashboard/file-reader/DoctorCaseRecordFileReader";
import CaseRecordData from "./CaseRecordData";

const FullScreenPatientCard = ({ patient }) => {
  const [viewSummary, setViewSummary] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: approveRecord } = useMutation({
    mutationFn: approveProcedureCaseRecord,
    onSuccess: () => {
      queryClient.invalidateQueries(["patient"]);
      queryClient.invalidateQueries(["patientCaseRecords"]);
      toast.success("Record Approved");
    },
    onError: () => toast.error("Failed to approve record"),
  });

  const { mutate: rejectRecord } = useMutation({
    mutationFn: rejectProcedureCaseRecord,
    onSuccess: () => {
      queryClient.invalidateQueries(["patient"]);
      queryClient.invalidateQueries(["patientCaseRecords"]);
      toast.success("Record Rejected");
    },
    onError: () => toast.error("Failed to reject record"),
  });

  const fileIds = patient?.form_data?.fields || [];

  return (
    <div className=" bg-white flex flex-col p-4 md:p-6 w-auto md:min-w-lg lg:min-w-xl">
      {/* Header */}
      <div className="w-full flex items-center gap-4 mb-4">
        <img
          src={
            patient?.patientPhoto ||
            "https://img.freepik.com/premium-vector/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-vector-illustration_561158-4195.jpg"
          }
          alt={patient.patient_name}
          className="w-16 h-16 rounded-full border object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{patient.patient_name}</h2>
          <p className="text-sm text-gray-500">{patient.patient_id}</p>
          <p className="text-sm text-gray-500">Dept: {patient.dept_name}</p>
        </div>
      </div>

      <CaseRecordData patient={patient} />
      <p className="mb-5"></p>

      {/* Optional: Divider before attachments */}
      {fileIds?.length > 0 && (
        <h4 className="mt-5 flex items-center text-sm font-medium text-gray-800 mb-3 pb-1 border-b border-gray-300">
          <ClipboardListIcon size={14} className="mr-2 text-blue-600" />
          Attachments
        </h4>
      )}
      <DoctorCaseRecordFileReader fileIds={fileIds} />

      {/* Report Docs Button */}
      <button
        onClick={() => setViewSummary(true)}
        className="w-full py-3 mb-4 rounded-xl text-white font-semibold shadow-sm transition-all
             bg-linear-to-b from-blue-400 to-blue-600
             hover:from-blue-500 hover:to-blue-700"
      >
        View Report
      </button>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => rejectRecord(patient.record_id)}
          className="flex-1 py-3 rounded-xl text-white font-semibold shadow-sm transition-all
               bg-linear-to-b from-red-400 to-red-600
               hover:from-red-500 hover:to-red-700"
        >
          <XIcon size={16} className="inline mr-1" /> Reject
        </button>

        <button
          onClick={() => approveRecord(patient.record_id)}
          className="flex-1 py-3 rounded-xl text-white font-semibold shadow-sm transition-all
               bg-linear-to-b from-green-400 to-green-600
               hover:from-green-500 hover:to-green-700"
        >
          <CheckIcon size={16} className="inline mr-1" /> Approve
        </button>
      </div>

      {/* Report Modal */}
      {viewSummary && (
        <PatientMedicalRecordReport
          patient={patient}
          onClose={() => setViewSummary(false)}
        />
      )}
    </div>
  );
};

export default FullScreenPatientCard;
