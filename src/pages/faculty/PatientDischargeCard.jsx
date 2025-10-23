import {
  AlertTriangleIcon,
  CheckIcon,
  HeartPulseIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { formatDate } from "../../utils/constants";
import PatientMedicalRecordReport from "../../components/patient/PatientMedicalRecordReport";

const PatientDischargeCard = ({ patient }) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [viewSummary, setViewSummary] = useState(false);

  const handleReject = () => setShowFeedbackModal(true);
  const handleCloseModal = () => {
    setShowFeedbackModal(false);
    setFeedbackText("");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-3 sm:p-4 flex flex-col gap-2 my-2">
      {/* Header Section */}
      <div className="flex items-center gap-3">
        <img
          src={patient.patientPhoto}
          alt={patient.patientName}
          className="h-10 w-10 rounded-full object-cover border border-gray-300"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 truncate">
            {patient.patientName}
          </h3>
          <p className="text-xs text-gray-500 truncate">{patient.patientId}</p>
        </div>
        <span className="text-xs text-gray-700 font-medium">
          <p>Dischare Request Date</p>
          {formatDate(patient.requestDate)}
        </span>
      </div>
      {/* Key Info Row */}
      <div className="grid grid-cols-3 text-xs sm:text-sm mt-1">
        <div className="truncate">
          <p className="text-gray-500">Dept</p>
          <p className="font-medium text-gray-800 truncate">
            {patient.department}
          </p>
        </div>
        <div className="truncate">
          <p className="text-gray-500">Requested By</p>
          <p className="font-medium text-gray-800 truncate">
            {patient.requestedBy}
          </p>
        </div>
        <div className="truncate">
          <button
            onClick={() => setViewSummary(!viewSummary)}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm rounded-full text-white bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95 transition-all shadow-sm"
          >
            Summary Report
          </button>
        </div>
      </div>
      {/* Reason & Alerts Combined */}
      <div className="rounded-md border border-gray-100 bg-gray-50/50 p-2 text-xs leading-snug">
        <p className="flex items-center text-blue-600 font-medium mb-1">
          <HeartPulseIcon size={11} className="mr-1" /> {patient.reason}
        </p>
        {patient.alerts?.length > 0 && (
          <p className="flex items-center text-red-600 font-medium">
            <AlertTriangleIcon size={11} className="mr-1" />{" "}
            {patient.alerts.join(", ")}
          </p>
        )}
      </div>
      <div className="font-medium text-gray-600 text-sm">
        <p className="text-gray-900">Admission Date</p>
        <p>Aug 30, 2023</p>
      </div>
      {/* Actions */}
      <div className="flex justify-end gap-2 mt-1">
        <button
          onClick={handleReject}
          className="flex items-center gap-1 px-3 py-1 text-xs sm:text-sm rounded-full text-white bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:scale-95 transition-all shadow-sm"
        >
          <XIcon size={12} /> Reject
        </button>
        <button
          onClick={() => alert("Approve")}
          className="flex items-center gap-1 px-3 py-1 text-xs sm:text-sm rounded-full text-white bg-gradient-to-b from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:scale-95 transition-all shadow-sm"
        >
          <CheckIcon size={12} /> Approve
        </button>
      </div>
      {/* Feedback Modal */}
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
      <div className="relative">
        {viewSummary && (
          //   <PatientMedicalRecordReport></PatientMedicalRecordReport>
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
              <div className="flex flex-row justify-between p-4">
                <p className="text-lg font-medium">Patient Medical Data</p>
                <button
                  onClick={() => {
                    setViewSummary(false);
                  }}
                >
                  <XIcon size={20}></XIcon>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDischargeCard;
