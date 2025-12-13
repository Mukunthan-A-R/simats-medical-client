import { useState } from "react";
import { CheckIcon, XIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  approveProcedureCaseRecord,
  rejectProcedureCaseRecord,
} from "../../../services/doctorProcedureCaseRecord";
import CaseRecordDataTab from "../CaseRecordDataTab";
import PatientMedicalRecordReport from "../../patient/PatientMedicalRecordReport";

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
    <div className=" bg-white flex flex-col p-4 md:p-6 ">
      {/* Header */}
      <div className="w-screen flex items-center gap-4 mb-4">
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

      {/* Case Data & Attachments */}
      <div className="flex-1 overflow-auto mb-4">
        <CaseRecordDataTab fileIds={fileIds} patient={patient} />
      </div>

      {/* Report Docs Button */}
      <button
        onClick={() => setViewSummary(true)}
        className="w-full py-3 mb-4 text-white bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
      >
        View Report
      </button>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => rejectRecord(patient.record_id)}
          className="flex-1 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition"
        >
          <XIcon size={16} className="inline mr-1" /> Reject
        </button>
        <button
          onClick={() => approveRecord(patient.record_id)}
          className="flex-1 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
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
