import React, { useRef, useEffect } from "react";
import { XIcon } from "lucide-react";
import { formatDate } from "../../utils/constants";

export function StudentNotificationPopup({ notification, onClose, onRespond }) {
  const modalRef = useRef(null);

  if (!notification) return null;

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        ref={modalRef}
        className="max-w-md w-full max-h-[90vh] overflow-auto animate-slideUp rounded-xl"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)",
          border: "1px solid rgba(255,255,255,0.8)",
        }}
      >
        {/* Modal Header */}
        <div
          className="sticky top-0 border-b border-gray-200 p-4 flex items-center justify-between z-10"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <h2 className="text-lg font-semibold text-gray-800">
            {notification.title}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{
              background: "linear-gradient(to bottom, #f8f9fa, #e2e6ea)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <XIcon size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          <p className="text-gray-800">{notification.description}</p>
          <p className="mt-2 text-sm text-gray-500">
            {formatDate(notification.date)} at {notification.time}
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors"
          >
            Close
          </button>
          <button
            onClick={onRespond}
            className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-medium transition-colors"
          >
            Respond Now
          </button>
        </div>
      </div>
    </div>
  );
}
