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
import React, { Fragment, useState } from "react";
import PatientMedicalRecordReport from "./PatientMedicalRecordReport";

const PatientMedicalRecordsRow = ({ record }) => {
  const [expandedRecord, setExpandedRecordId] = useState(false);
  const [openReportModal, setOpenReportModal] = useState(false);

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

  const iconMap = {
    stethoscope: <StethoscopeIcon size={16} className="text-white" />,
    "test-tube": <TestTubeIcon size={16} className="text-white" />,
    "heart-pulse": <HeartPulseIcon size={16} className="text-white" />,
    pill: <PillIcon size={16} className="text-white" />,
    file: <FileTextIcon size={16} className="text-white" />,
  };

  const toggleRecordExpansion = (id) => {
    setExpandedRecordId(!expandedRecord);
  };

  return (
    <Fragment key={record.id}>
      <tr
        key={record.id}
        className={`hover:bg-gray-200 
            ${expandedRecord ? "bg-blue-50" : ""}
            `}
      >
        <td className="px-4 py-3 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{record.date}</div>
          <div className="text-sm text-gray-500">{record.time}</div>
        </td>
        <td
          className="px-4 py-3 cursor-pointer"
          onClick={() => toggleRecordExpansion(!expandedRecord)}
        >
          <div className="flex items-center">
            <span className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 bg-blue-500 text-white">
              {iconMap[record.iconType]}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-900">
                  {record.type}
                </div>
                <ChevronRightIcon
                  size={16}
                  className={`text-gray-400 transition-transform ${
                    expandedRecord ? "rotate-90" : ""
                  }`}
                />
              </div>
              <div className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                {record.description}
              </div>
              <div className="text-xs text-gray-400">{record.department}</div>
            </div>
          </div>
        </td>
        <td className="px-4 py-3">
          <div className="text-sm text-gray-900 flex items-center">
            <UserIcon size={14} className="mr-1.5 text-gray-400" />
            {record.performedBy}
          </div>
          {record.performedBy !== record.supervisedBy && (
            <div className="text-xs text-gray-500 mt-1 flex items-center">
              <CheckCircleIcon size={12} className="mr-1.5 text-gray-400" />
              {record.supervisedBy}
            </div>
          )}
        </td>
      </tr>
      {expandedRecord && (
        <tr>
          <td colSpan={3} className="px-4 py-3">
            <div className="border-2 border-gray-300 p-4 bg-blue-50 rounded-md shadow-inner">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Record Details</h3>
                <button
                  onClick={() => setExpandedRecordId(null)}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                >
                  <XIcon size={12} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Record ID</p>
                  <p className="font-medium">{record.id}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Status</p>
                  <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    style={getStatusBadgeStyle(record.status)}
                  >
                    {record.status}
                  </span>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Date & Time</p>
                  <p className="font-medium">
                    {record.date}, {record.time}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Department</p>
                  <p className="font-medium">{record.department}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500 mb-1">Description</p>
                  <p className="font-medium">{record.description}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1 flex items-center">
                    <UserIcon size={14} className="mr-1 text-gray-400" />
                    Performed By
                  </p>
                  <p className="font-medium">{record.performedBy}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1 flex items-center">
                    <CheckCircleIcon size={14} className="mr-1 text-gray-400" />
                    Supervised By
                  </p>
                  <p className="font-medium">{record.supervisedBy}</p>
                </div>
                {record.images && record.images.length > 0 && (
                  <div className="col-span-2 mt-2 flex flex-wrap gap-2">
                    {record.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="w-16 h-16 rounded overflow-hidden cursor-pointer hover:border-blue-500 transition-colors border"
                        onClick={() => openImageModal(image)}
                      >
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    console.log("hi");
                    setOpenReportModal(!openReportModal);
                  }}
                  className="px-4 py-2 text-white text-sm font-medium rounded-full bg-blue-500"
                >
                  View Full Report
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
      {openReportModal && (
        <PatientMedicalRecordReport
          closeReportModal={() => setOpenReportModal(!openReportModal)}
          key={record.id}
          record={record}
        />
      )}
    </Fragment>
  );
};

export default PatientMedicalRecordsRow;
