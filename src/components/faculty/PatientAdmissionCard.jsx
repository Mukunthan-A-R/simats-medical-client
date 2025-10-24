import {
  AlertTriangleIcon,
  CheckIcon,
  HeartPulseIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { formatDate } from "../../utils/constants";

const PatientAdmissionCard = ({ patient }) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleReject = () => setShowFeedbackModal(true);
  const handleCloseModal = () => {
    setShowFeedbackModal(false);
    setFeedbackText("");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-3 sm:p-4 flex flex-col gap-2 my-2">
      {/* === Row 1: Patient Info + Dept + Requested By + Status === */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 items-center">
        {/* Patient Info */}
        <div className="flex items-center gap-2">
          <img
            src={patient.patientPhoto}
            alt={patient.patientName}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover border border-gray-300"
          />
          <div className="leading-tight">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {patient.patientName}
            </h3>
            <p className="text-xs text-gray-500 truncate">
              {patient.patientId}
            </p>
          </div>
        </div>

        {/* Department */}
        <div>
          <p className="text-gray-500 text-xs">Dept</p>
          <p className="font-medium text-gray-800 text-sm truncate">
            {patient.department}
          </p>
        </div>

        {/* Requested By */}
        <div className="sm:pl-2 md:pl-4">
          <p className="text-gray-500 text-xs">Requested By</p>
          <p className="font-medium text-gray-800 text-sm truncate">
            {patient.requestedBy}
          </p>
        </div>

        {/* Status */}
        <div className="text-left md:text-right">
          <p className="text-gray-500 text-xs">Status</p>
          <p className="font-medium text-blue-600 text-sm">Pending</p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            {formatDate(patient.requestDate)}
          </p>
        </div>
      </div>

      {/* === Row 2: Reason, Alerts, Actions === */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-gray-100 pt-2">
        {/* Reason & Alerts */}
        <div className="flex flex-col text-xs leading-snug flex-1">
          <p className="flex items-center text-blue-600 font-medium">
            <HeartPulseIcon size={12} className="mr-1" /> {patient.reason}
          </p>

          {patient.alerts?.length > 0 && (
            <p className="flex items-center text-red-600 font-medium mt-0.5">
              <AlertTriangleIcon size={12} className="mr-1" />
              {patient.alerts.join(", ")}
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
            onClick={() => alert("Admitted")}
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
                  onClick={() => {
                    alert("Rejected with feedback!");
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
    </div>
  );
};

export default PatientAdmissionCard;
