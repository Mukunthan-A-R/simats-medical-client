import {
  StethoscopeIcon,
  TestTubeIcon,
  HeartPulseIcon,
  PillIcon,
  FileTextIcon,
  UserIcon,
  CheckCircleIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import PatientMedicalRecordReport from "./PatientMedicalRecordReport";

const PatientMedicalRecordCard = ({ record }) => {
  const [expanded, setExpanded] = useState(false);
  const [openReportModal, setOpenReportModal] = useState(false);

  const iconMap = {
    stethoscope: <StethoscopeIcon size={16} className="text-white" />,
    "test-tube": <TestTubeIcon size={16} className="text-white" />,
    "heart-pulse": <HeartPulseIcon size={16} className="text-white" />,
    pill: <PillIcon size={16} className="text-white" />,
    file: <FileTextIcon size={16} className="text-white" />,
  };

  const getStatusBadgeStyle = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return { backgroundColor: "#2da659", color: "#f2f2f2" };
      case "active":
        return { backgroundColor: "#facc15", color: "#f2f2f2" };
      case "results available":
        return { backgroundColor: "#60a5fa", color: "#f2f2f2" };
      default:
        return { backgroundColor: "#d1d5db", color: "#f2f2f2" };
    }
  };

  return (
    <div className="sm:hidden border border-gray-200 rounded-lg p-3 my-2 shadow-sm hover:shadow-md transition-all bg-white">
      {/* Header: Icon + Type + Chevron */}
      <div
        className="flex items-center justify-between mb-2 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
            {iconMap[record.iconType]}
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {record.type}
            </div>
            <div className="text-xs text-gray-500">
              {record.date} {record.time}
            </div>
          </div>
        </div>
        <div
          className={`transform transition-transform ${
            expanded ? "rotate-90" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Collapsible Details */}
      {expanded && (
        <div className="mt-2 border-t border-gray-200 pt-2 text-sm text-gray-700 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Department</span>
            <span>{record.department}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span
              className="px-2 py-0.5 rounded-full text-xs font-semibold"
              style={getStatusBadgeStyle(record.status)}
            >
              {record.status}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Description</span>
            <p className="mt-1">{record.description}</p>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-1 text-gray-500">
              <UserIcon size={14} /> Performed By
            </span>
            <span>{record.performedBy}</span>
          </div>
          {record.performedBy !== record.supervisedBy && (
            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-gray-500">
                <CheckCircleIcon size={14} /> Supervised By
              </span>
              <span>{record.supervisedBy}</span>
            </div>
          )}
          {record.images && record.images.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {record.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 rounded overflow-hidden border cursor-pointer hover:border-blue-500 transition-colors"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="mt-3 flex justify-end">
            <button
              onClick={() => setOpenReportModal(!openReportModal)}
              className="px-4 py-2 text-white text-sm font-medium rounded-full bg-blue-500"
            >
              View Full Report
            </button>
          </div>
        </div>
      )}

      {openReportModal && (
        <PatientMedicalRecordReport
          record={record}
          closeReportModal={() => setOpenReportModal(!openReportModal)}
        />
      )}
    </div>
  );
};

export default PatientMedicalRecordCard;
