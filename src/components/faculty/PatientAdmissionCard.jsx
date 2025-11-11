import { useQueryClient, useMutation } from "@tanstack/react-query";
import {
  AlertTriangleIcon,
  CheckIcon,
  HeartPulseIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { updateDoctorApprovalStatus } from "../../services/doctorApprovalService";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const PatientAdmissionCard = ({ patient }) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const queryClient = useQueryClient();
  const { facultyId: doctorId } = useParams();

  const handleReject = () => setShowFeedbackModal(true);
  const handleCloseModal = () => {
    setShowFeedbackModal(false);
    setFeedbackText("");
  };

  const { mutate: handleApproval, isPending: isMutating } = useMutation({
    mutationFn: ({ requestId, doctorId, status, remarks }) =>
      updateDoctorApprovalStatus(requestId, doctorId, status, remarks),
    onSuccess: (data) => {
      toast.success(`Request ${data?.message || "updated successfully"}`);
      queryClient.invalidateQueries(["doctorPendingApprovals"]);
    },
    onError: (error) => {
      console.error("Approval update failed:", error);
      toast.error("Failed to update request.");
    },
  });

  const onAdmit = () => {
    handleApproval({
      requestId: patient?.request_id,
      doctorId,
      status: "approved",
      remarks: "",
    });
  };

  const onRejectSubmit = () => {
    handleApproval({
      requestId: patient?.request_id,
      doctorId,
      status: "rejected",
      remarks: feedbackText || "No remarks provided",
    });
    setShowFeedbackModal(false);
    setFeedbackText("");
  };

  const formatDate = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString() : "N/A";

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-3 sm:p-4 flex flex-col gap-2 my-2">
      {/* === Row 1: Patient Info + Requested By + Status === */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 items-center">
        {/* Patient Info */}
        <div className="flex items-center gap-2">
          <img
            src={
              patient?.patientPhoto ||
              "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
            }
            alt={patient?.patient_name}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover border border-gray-300"
          />

          <div className="leading-tight">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {patient?.patient_name}
            </h3>
            <p className="text-xs text-gray-500 truncate">
              {patient?.patient_id}
            </p>
            <p className="text-xs text-gray-500 truncate">
              DOB: {formatDate(patient?.patient_dob)}
            </p>
          </div>
        </div>

        {/* Requested By */}
        <div>
          <p className="text-gray-500 text-xs">Requested By</p>
          <p className="font-medium text-gray-800 text-sm truncate">
            {patient?.student_name}
          </p>
        </div>

        {/* Status */}
        <div className="text-left md:text-right">
          <p className="text-gray-500 text-xs">Status</p>
          <p className="font-medium text-blue-600 text-sm">{patient?.status}</p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            Requested: {formatDate(patient?.requested_at)}
          </p>
        </div>
      </div>

      {/* === Row 2: Details, Alerts, Actions === */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-gray-100 pt-2">
        {/* Details & Alerts */}
        <div className="flex flex-col text-xs leading-snug flex-1">
          <p className="flex items-center text-blue-600 font-medium">
            <HeartPulseIcon size={12} className="mr-1" />
            Admission Date: {formatDate(patient?.admission_date)}
          </p>

          <p className="text-gray-500 text-xs mt-0.5">
            Blood Group: {patient?.patient_blood_group || "N/A"}, Gender:{" "}
            {patient?.patient_gender || "N/A"}
          </p>

          <p className="text-gray-500 text-xs mt-0.5">
            Phone: {patient?.patient_phone || "N/A"}
          </p>

          {/* <p className="text-gray-500 text-xs mt-0.5">
            Email: {patient?.patient_email || "N/A"}
          </p>

          <p className="text-gray-500 text-xs mt-0.5">
            Address: {patient?.patient_address || "N/A"}
          </p> */}

          {patient?.alerts?.length > 0 && (
            <p className="flex items-center text-red-600 font-medium mt-0.5">
              <AlertTriangleIcon size={12} className="mr-1" />
              {patient?.alerts?.join(", ")}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-start sm:justify-end items-center gap-2">
          <button
            onClick={handleReject}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm rounded-full text-white bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:scale-95 transition-all shadow-sm"
          >
            <XIcon size={12} /> Reject
          </button>
          <button
            disabled={isMutating}
            onClick={onAdmit}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm rounded-full text-white bg-gradient-to-b from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:scale-95 transition-all shadow-sm"
          >
            <CheckIcon size={12} /> Admit
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
              <textarea
                className="w-full border border-gray-200 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                rows={3}
                placeholder="Enter feedback..."
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={handleCloseModal}
                  className="px-3 py-1.5 rounded-full text-xs bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  disabled={isMutating}
                  onClick={onRejectSubmit}
                  className="px-3 py-1.5 rounded-full text-xs text-white bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:opacity-50"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientAdmissionCard;
