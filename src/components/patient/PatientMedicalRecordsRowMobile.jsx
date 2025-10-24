import {
  StethoscopeIcon,
  TestTubeIcon,
  HeartPulseIcon,
  PillIcon,
  FileTextIcon,
  UserIcon,
  CheckCircleIcon,
  XIcon,
  AlertTriangleIcon,
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
    <div className="sm:hidden bg-white border border-gray-200 rounded-lg shadow-sm p-3 my-2 hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {iconMap[record.iconType]}
          </div>
          <div className="flex flex-col truncate">
            <div className="text-sm font-semibold text-gray-900 truncate">
              {record.type}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {record.date} {record.time}
            </div>
          </div>
        </div>
        <div
          className={`cursor-pointer transform transition-transform ml-2 ${
            expanded ? "rotate-90" : ""
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
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

      {/* Summary Info */}
      <div className="mt-2 flex flex-wrap justify-between gap-2 text-xs text-gray-700">
        <div className="flex-1 min-w-[40%]">
          <p className="text-gray-500">Record ID</p>
          <p className="font-medium truncate">{record.id}</p>
        </div>
        <div className="flex-1 text-right min-w-[40%]">
          <span
            className="px-2 py-0.5 rounded-full text-xs font-semibold"
            style={getStatusBadgeStyle(record.status)}
          >
            {record.status}
          </span>
        </div>
        {record.alerts && record.alerts.length > 0 && (
          <div className="w-full flex items-center gap-1 text-red-600 text-xs truncate mt-1">
            <AlertTriangleIcon size={12} /> {record.alerts.join(", ")}
          </div>
        )}
      </div>

      {/* Expanded Section */}
      {expanded && (
        <div className="mt-2 space-y-2 border-t border-gray-200 pt-2 text-xs text-gray-700">
          <div>
            <p className="text-gray-500">Department</p>
            <p className="font-medium truncate">{record.department}</p>
          </div>
          <div>
            <p className="text-gray-500">Description</p>
            <p className="font-medium truncate">{record.description}</p>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <div className="flex-1 min-w-[45%] flex items-center gap-1">
              <UserIcon size={12} />{" "}
              <span className="truncate">{record.performedBy}</span>
            </div>
            {record.performedBy !== record.supervisedBy && (
              <div className="flex-1 min-w-[45%] flex items-center gap-1">
                <CheckCircleIcon size={12} />{" "}
                <span className="truncate">{record.supervisedBy}</span>
              </div>
            )}
          </div>

          {record.images && record.images.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {record.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 rounded overflow-hidden border flex-shrink-0"
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

          <div className="mt-2 flex justify-end">
            <button
              onClick={() => setOpenReportModal(!openReportModal)}
              className="px-3 py-1 text-white text-xs font-medium rounded-full bg-blue-500"
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
