import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import {
  StethoscopeIcon,
  TestTubeIcon,
  HeartPulseIcon,
  PillIcon,
  FileTextIcon,
  ChevronRightIcon,
  UserIcon,
  CheckCircleIcon,
  XIcon,
} from "lucide-react";
import PatientMedicalRecordReport from "./PatientMedicalRecordReport";

// Map department / procedure type to icons
const iconMap = {
  Cardiology: <HeartPulseIcon size={16} className="text-white" />,
  Pathology: <TestTubeIcon size={16} className="text-white" />,
  Pharmacy: <PillIcon size={16} className="text-white" />,
  Radiology: <StethoscopeIcon size={16} className="text-white" />,
  Default: <FileTextIcon size={16} className="text-white" />,
};

const PatientMedicalRecordsRow = ({ record }) => {
  const [expanded, setExpanded] = useState(false);
  const [openReportModal, setOpenReportModal] = useState(false);

  const createdAt = new Date(record.created_at);
  const approvedAt = record.approved_time
    ? new Date(record.approved_time)
    : null;

  // Determine which icon to show
  const icon = iconMap[record.department_name] || iconMap["Default"];

  // Approval badge
  const approvalColor =
    record.approval === "approved"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <Fragment>
      {/* Main Row */}
      <tr className={`hover:bg-gray-100 ${expanded ? "bg-blue-50" : ""}`}>
        {/* Date & Time */}
        <td className="px-4 py-3 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">
            {createdAt.toLocaleDateString()}
          </div>
          <div className="text-sm text-gray-600">
            {createdAt.toLocaleTimeString()}
          </div>
        </td>

        {/* Type & Description */}
        <td
          className="px-4 py-3 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center">
            <span className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 bg-blue-500 text-white">
              {icon}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-900">
                  {record.procedure_name}
                </div>
                <ChevronRightIcon
                  size={16}
                  className={`text-gray-400 transition-transform ${
                    expanded ? "rotate-90" : ""
                  }`}
                />
              </div>
              <div className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Form: {record.form_name} | Evaluated By: {record.student_name}
              </div>
            </div>
          </div>
        </td>

        {/* Entered / Approved By */}
        <td className="px-4 py-3">
          <div className="text-sm text-gray-900 flex items-center">
            <UserIcon size={14} className="mr-1.5 text-gray-400" />
            {record.student_name}
          </div>
          <div className="text-xs text-gray-500 mt-1 flex items-center">
            <CheckCircleIcon size={12} className="mr-1.5 text-gray-400" />
            {record.approval === "approved"
              ? record.doctor_name
              : "Approval Pending"}
          </div>
        </td>
      </tr>

      {/* Expanded Row */}
      {expanded && (
        <tr>
          <td colSpan={3} className="px-4 py-3">
            <div className="border border-gray-300 p-4 bg-blue-50 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Record Details</h3>
                <button onClick={() => setExpanded(false)}>
                  <XIcon size={14} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Record ID</p>
                  <p className="font-medium">{record.record_id}</p>
                </div>

                <div>
                  <p className="text-gray-500">Approval Status</p>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${approvalColor}`}
                  >
                    {record.approval}
                  </span>
                </div>

                <div>
                  <p className="text-gray-500">Created At</p>
                  <p className="font-medium">{createdAt.toLocaleString()}</p>
                </div>

                {approvedAt && (
                  <div>
                    <p className="text-gray-500">Approved At</p>
                    <p className="font-medium">{approvedAt.toLocaleString()}</p>
                  </div>
                )}

                <div>
                  <p className="text-gray-500">Department</p>
                  <p className="font-medium">{record.department_name}</p>
                </div>

                <div className="col-span-2">
                  <p className="text-gray-500">Form Data</p>
                  {record.form_data &&
                    Object.entries(record.form_data).map(([key, value]) => (
                      <p key={key} className="font-medium">
                        {key}: {value}
                      </p>
                    ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setOpenReportModal(true)}
                  className="px-4 py-2 text-white text-sm rounded-full bg-blue-500"
                >
                  View Full Report
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}

      {/* Report Modal */}
      {openReportModal &&
        createPortal(
          <PatientMedicalRecordReport
            record={record}
            closeReportModal={() => setOpenReportModal(false)}
          />,
          document.body
        )}
    </Fragment>
  );
};

export default PatientMedicalRecordsRow;
