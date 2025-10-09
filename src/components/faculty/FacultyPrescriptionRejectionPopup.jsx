import { XCircleIcon, XIcon } from "lucide-react";
import React from "react";

const FacultyPrescriptionRejectionPopup = ({ handleCancel }) => {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #ffffff, #f8fafc)",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div
          className="px-4 py-3 border-b border-gray-200 flex justify-between items-center"
          style={{
            background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
          }}
        >
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <XCircleIcon size={18} className="text-red-600 mr-2" />
            Rejection Feedback
          </h3>
          <button
            // onClick={() => {
            //   setShowFeedbackModal(false);
            //   setCurrentItem(null);
            // }}
            className="text-gray-400 hover:text-gray-500"
            style={{
              background: "linear-gradient(to bottom, #f8f9fb, #e2e8f0)",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <XIcon size={14} />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">
            Please provide feedback on why you are rejecting this prescription.
          </p>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="Enter your feedback here..."
            // value={feedbackText}
            // onChange={(e) => setFeedbackText(e.target.value)}
            style={{
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
            }}
          ></textarea>
          <div className="mt-4 flex justify-end space-x-3">
            <button
              className="px-4 py-2 rounded-full text-gray-700 text-sm font-medium"
              style={{
                background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{
                background: "linear-gradient(to bottom, #ff3b30, #dc2626)",
                boxShadow:
                  "0 1px 3px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
              // onClick={submitRejection}
            >
              Submit Rejection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyPrescriptionRejectionPopup;
