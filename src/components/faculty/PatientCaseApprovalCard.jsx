import {
  AlertTriangleIcon,
  CheckIcon,
  HeartPulseIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { formatDate } from "../../utils/constants";
import PatientMedicalRecordReport from "../../components/patient/PatientMedicalRecordReport";
import { approveCaseRecord } from "../../services/doctorCaseRecords";
import { useMutation } from "@tanstack/react-query";

const PatientCaseApprovalCard = ({ patient }) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [viewSummary, setViewSummary] = useState(false);

  const {
    mutate: approveRecord,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: approveCaseRecord,
    onSuccess: (data) => {
      console.log("✅ Record approved:", data);
      alert(`Record ${patient.record_id} approved successfully.`);
    },
    onError: (error) => {
      console.error("❌ Error approving record:", error);
      alert("Failed to approve record.");
    },
  });

  const handleCloseSummary = () => {
    setViewSummary(false);
  };

  const handleReject = () => setShowFeedbackModal(true);
  const handleCloseModal = () => {
    setShowFeedbackModal(false);
  };

  const handleApprove = () => {
    // alert("I approve you");
    approveRecord(patient.record_id);
    return;
  };

  return (
    <div
      key={patient.record_id}
      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-3 sm:p-4 flex flex-col gap-2 my-2"
    >
      {/* === Row 1: 4 Columns (Responsive) === */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 items-center">
        {/* Patient Info */}
        <div className="flex items-center gap-2">
          <img
            src={patient.patientPhoto}
            alt={patient.patient_name}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover border border-gray-300"
          />
          <div className="leading-tight">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {patient.patient_name}
            </h3>
            <p className="text-xs text-gray-500 truncate">
              {patient.patient_id}
            </p>
          </div>
        </div>

        {/* Department */}
        <div>
          <p className="text-gray-500 text-xs">Dept</p>
          <p className="font-medium text-gray-800 text-sm truncate">
            {patient.dept_name}
          </p>
        </div>

        {/* Requested By */}
        <div className="sm:pl-2 md:pl-4">
          <p className="text-gray-500 text-xs">Requested By</p>
          <p className="font-medium text-gray-800 text-sm truncate">
            {patient.student_name}
          </p>
        </div>

        {/* Admission Date */}
        <div className="text-left md:text-right">
          <p className="text-gray-500 text-xs">Admission</p>
          <p className="font-medium text-gray-800 text-sm">
            {formatDate ? formatDate("2023-08-30") : "Aug 30, 2023"}
          </p>
        </div>
      </div>

      {/* === Row 2: Reason, Alerts, and Actions === */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-gray-100 pt-2">
        {/* Reason + Alerts */}
        <div className="flex flex-col text-xs leading-snug flex-1">
          <p className="flex items-center text-blue-600 font-medium">
            <HeartPulseIcon size={12} className="mr-1" /> {patient.diagnosis}
          </p>
          <p className="flex items-center text-red-600 font-medium mt-0.5">
            <AlertTriangleIcon size={12} className="mr-1" />
            {patient.findings}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-start sm:justify-end items-center gap-2">
          <button
            onClick={() => setViewSummary(true)}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm rounded-full text-white bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95 transition-all shadow-sm"
          >
            Report Docs
          </button>
          <button
            onClick={handleReject}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm rounded-full text-white bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:scale-95 transition-all shadow-sm"
          >
            <XIcon size={12} /> Reject
          </button>
          <button
            onClick={handleApprove}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm rounded-full text-white bg-gradient-to-b from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:scale-95 transition-all shadow-sm"
          >
            <CheckIcon size={12} /> Approve
          </button>
        </div>
      </div>

      {/* === Feedback Modal === */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center">
                <XCircleIcon size={14} className="text-red-600 mr-2" />
                Rejection Feedback
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <XIcon size={14} className="text-gray-500" />
              </button>
            </div>
            <div className="p-3">
              <p className="py-3 pl-2 text-gray-800">
                Sure want to Reject this patient !
              </p>
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={handleCloseModal}
                  className="px-3 py-1.5 rounded-full text-xs bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert("data submitted !");
                    handleCloseModal();
                  }}
                  className="px-3 py-1.5 rounded-full text-xs text-white bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === Summary Modal === */}
      {viewSummary && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-800">
                Patient Medical Data
              </p>
              <button onClick={() => setViewSummary(false)}>
                <XIcon
                  size={20}
                  className="text-gray-600 hover:text-gray-800"
                />
              </button>
            </div>
            <div className="p-4">
              <PatientMedicalRecordReport
                onClose={handleCloseSummary}
                patient={patient}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientCaseApprovalCard;
