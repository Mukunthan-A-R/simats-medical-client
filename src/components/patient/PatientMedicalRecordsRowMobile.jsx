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
import CaseRecordFilesViewer from "../students/patients/case-records/CaseRecordFilesViewer";

const PatientMedicalRecordCard = ({ record }) => {
  const [expanded, setExpanded] = useState(false);
  const [openReportModal, setOpenReportModal] = useState(false);

  // Map department to icons
  const iconMap = {
    Cardiology: <HeartPulseIcon size={16} className="text-white" />,
    Pathology: <TestTubeIcon size={16} className="text-white" />,
    Pharmacy: <PillIcon size={16} className="text-white" />,
    Radiology: <StethoscopeIcon size={16} className="text-white" />,
    Default: <FileTextIcon size={16} className="text-white" />,
  };

  const badgeColor =
    record.approval === "approved"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <div className="sm:hidden bg-white border border-gray-200 rounded-lg shadow-sm p-3 my-2 hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white shrink-0">
            {iconMap[record.department_name] || iconMap.Default}
          </div>
          <div className="flex flex-col truncate">
            <div className="text-sm font-semibold text-gray-900 truncate">
              {record.procedure_name}
            </div>
            <div className="text-xs text-gray-500 truncate">
              Form: {record.form_name} | Entered by: {record.student_name}
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
          <p className="font-medium truncate">{record.record_id}</p>
        </div>
        <div className="flex-1 text-right min-w-[40%]">
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColor}`}
          >
            {record.approval}
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
            <p className="font-medium truncate">{record.department_name}</p>
          </div>
          <div>
            <p className="text-gray-500">Form Data</p>
            {record.form_data &&
              Object.entries(record.form_data).map(([key, value]) => (
                <p key={key} className="font-medium truncate">
                  {key}: {value || "-"}
                </p>
              ))}
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <div className="flex-1 min-w-[45%] flex items-center gap-1">
              <UserIcon size={12} />{" "}
              <span className="truncate">{record.student_name}</span>
            </div>
            <div className="flex-1 min-w-[45%] flex items-center gap-1">
              <CheckCircleIcon size={12} />{" "}
              <span className="truncate">{record.doctor_name}</span>
            </div>
          </div>

          {record.images && record.images.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {record.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 rounded overflow-hidden border shrink-0"
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

          {record.form_data?.fields.length > 0 && (
            <>
              <div className="">
                <CaseRecordFilesViewer
                  fileIds={record.form_data?.fields || []}
                  isOpen={true}
                />
              </div>
            </>
          )}

          <div className="mt-2 flex justify-end">
            <button
              onClick={() => setOpenReportModal(true)}
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
          closeReportModal={() => setOpenReportModal(false)}
        />
      )}
    </div>
  );
};

export default PatientMedicalRecordCard;
