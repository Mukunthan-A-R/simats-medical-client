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

  const aquaButtonStyle =
    "rounded-full text-sm font-medium transition-all duration-200 active:scale-95";
  const aquaGlossEffect = "shadow-sm active:shadow-none";
  const iconButtonStyle =
    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95";

  const handleReject = () => {
    setShowFeedbackModal(!showFeedbackModal);
  };

  return (
    <div className="p-4 bg-white rounded-2xl my-4">
      {/* Patient Image and Name side by side */}
      <div className="flex items-center mb-4">
        <img
          src={patient.patientPhoto}
          alt={patient.patientName}
          className="h-16 w-16 rounded-full object-cover border-2 border-white mr-4 flex-shrink-0"
          style={{
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            {patient.patientName}
          </h3>
          <p className="text-sm text-gray-500">{patient.patientId}</p>
        </div>
      </div>
      {/* Department, Requester, Date */}
      <div className="flex justify-between items-center mb-4 px-1">
        <div className="text-center flex-1">
          <span className="block text-xs text-gray-500 mb-1">Department</span>
          <span className="block text-sm font-medium text-gray-800">
            {patient.department}
          </span>
        </div>
        <div className="text-center flex-1">
          <span className="block text-xs text-gray-500 mb-1">Requested by</span>
          <span className="block text-sm font-medium text-gray-800">
            {patient.requestedBy}
          </span>
        </div>
        <div className="text-center flex-1">
          <span className="block text-xs text-gray-500 mb-1">Date</span>
          <span className="block text-sm font-medium text-gray-800">
            {formatDate(patient.requestDate)}
          </span>
        </div>
      </div>
      {/* Primary Diagnosis */}
      <div className="w-full mb-3">
        <div
          className="w-full px-3 py-2 rounded-lg"
          style={{
            background:
              "linear-gradient(145deg, rgba(240,249,255,0.6), rgba(220,240,250,0.4))",
            border: "1px solid rgba(200,220,240,0.5)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          <span className="text-xs text-blue-600 font-medium flex items-center">
            <HeartPulseIcon size={12} className="mr-1.5" />
            Reason for Admission
          </span>
          <p className="text-sm font-medium text-gray-800 mt-0.5">
            {patient.reason}
          </p>
        </div>
      </div>
      {/* Medical Alerts */}
      {patient.alerts && patient.alerts.length > 0 && (
        <div className="w-full mb-4">
          <div
            className="w-full px-3 py-2 rounded-lg"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,240,240,0.7), rgba(255,220,220,0.5))",
              border: "1px solid rgba(240,200,200,0.6)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <span className="text-xs text-red-600 font-medium flex items-center">
              <AlertTriangleIcon size={12} className="mr-1.5" />
              Medical Alerts
            </span>
            <p className="text-sm font-medium text-red-700 mt-0.5">
              {patient.alerts.join(", ")}
            </p>
          </div>
        </div>
      )}
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          className={`px-5 py-2 rounded-full text-white ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: "linear-gradient(to bottom, #ff3b30, #ff453a)",
            boxShadow:
              "0 2px 4px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.25)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
          onClick={() => handleReject(patient)}
        >
          <XIcon size={16} className="inline-block mr-1.5" />
          Reject
        </button>
        <button
          className={`px-5 py-2 rounded-full text-white ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: "linear-gradient(to bottom, #34c759, #30d158)",
            boxShadow:
              "0 2px 4px rgba(16,185,129,0.3), inset 0 1px 0 rgba(255,255,255,0.25)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
          onClick={() => handleApprove(patient)}
        >
          <CheckIcon size={16} className="inline-block mr-1.5" />
          Admit
        </button>
      </div>

      {/* Rejection Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div
            className="rounded-xl max-w-md w-full overflow-hidden animate-scaleIn"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(250,253,255,0.9))",
              border: "1px solid rgba(220,230,240,0.8)",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <div
              className="px-5 py-4 border-b border-gray-200 flex justify-between items-center"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(250,253,255,0.9), rgba(240,249,255,0.8))",
              }}
            >
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <XCircleIcon size={20} className="text-red-600 mr-2" />
                Rejection Feedback
              </h3>
              <button
                onClick={() => {
                  setShowFeedbackModal(false);
                }}
                className={`${iconButtonStyle} w-8 h-8`}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,249,255,0.8))",
                  border: "1px solid rgba(220,230,240,0.8)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                <XIcon size={16} className="text-gray-500" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">
                Please provide feedback on why you are rejecting this admission
                request.
              </p>
              <textarea
                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                rows={4}
                placeholder="Enter your feedback here..."
                // value={feedbackText}
                // onChange={(e) => setFeedbackText(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
                }}
              ></textarea>
              <div className="mt-5 flex justify-end space-x-3">
                <button
                  className={`px-4 py-2 rounded-full ${aquaButtonStyle}`}
                  style={{
                    background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
                    boxShadow:
                      "0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                  onClick={() => {
                    setShowFeedbackModal(false);
                    setFeedbackText("");
                    setCurrentItem(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-white ${aquaButtonStyle}`}
                  style={{
                    background: "linear-gradient(to bottom, #ff3b30, #ff453a)",
                    boxShadow:
                      "0 2px 4px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.25)",
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                  //   onClick={submitRejection}
                >
                  Submit Rejection
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
