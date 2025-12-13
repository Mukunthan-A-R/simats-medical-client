import React from "react";
import { ClipboardListIcon } from "lucide-react";

const CaseRecordDataPanel = ({ patient }) => {
  if (!patient) return null;

  // Fallback to empty object if form_data missing
  const dynamicData = patient.form_data || {};
  const fileIds = patient?.form_data?.fields || [];

  return (
    <div className="w-full max-w-lg mx-auto mt-4 font-sans">
      {/* Container */}
      <div>
        {/* Header
        <h4 className="flex items-center text-sm font-medium text-gray-800 mb-3 pb-1 border-b border-gray-300">
          <ClipboardListIcon size={14} className="mr-2 text-blue-600" />
          Findings and Parameters
        </h4> */}
        {/* Content */}
        <div className="text-sm text-gray-700 space-y-2">
          {Object.entries(dynamicData).length === 0 && (
            <p className="text-gray-500">No data available.</p>
          )}

          {Object.entries(dynamicData)
            .filter(([key, value]) => key !== "fields")
            .map(([key, value]) => (
              <p key={key}>
                <span className="font-semibold text-gray-800">
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                  :
                </span>{" "}
                {typeof value === "object"
                  ? JSON.stringify(value)
                  : value || "-"}
              </p>
            ))}
        </div>
        {/* Optional: Divider before attachments */}
        {fileIds?.length > 0 && (
          <div className="mt-2 border-t border-gray-300 pt-1">
            <p className="text-xs text-gray-500">Attachments available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseRecordDataPanel;
