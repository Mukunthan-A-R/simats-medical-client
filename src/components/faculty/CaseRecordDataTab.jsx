import { useState } from "react";
import DoctorCaseRecordFileReader from "./dashboard/file-reader/DoctorCaseRecordFileReader";
import CaseRecordDataPanel from "./CaseRecordDataPanel";

const CaseRecordDataTab = ({ fileIds = [], defaultTab = "data", patient }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full font-sans mt-3">
      {/* Tabs Header */}
      <div className="flex w-max rounded-lg overflow-hidden border border-gray-300 bg-linear-to-b from-gray-200 to-gray-100 shadow-inner">
        {/* Case Data Tab */}
        <button
          className={`px-5 py-2 text-sm font-semibold focus:outline-none transition-colors duration-200 ${
            activeTab === "data"
              ? "bg-linear-to-b from-white to-gray-200 text-blue-600 border-r border-gray-300 shadow-inner"
              : "text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("data")}
        >
          Case Data
        </button>

        {/* Attachments Tab */}
        <button
          className={`px-5 py-2 text-sm font-semibold focus:outline-none transition-colors duration-200 ${
            activeTab === "files"
              ? "bg-linear-to-b from-white to-gray-200 text-blue-600 border-l border-gray-300 shadow-inner"
              : "text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("files")}
        >
          Attachments
        </button>
      </div>

      {/* Tabs Content */}
      <div className="mt-3 p-4 rounded-lg bg-gray-100 border border-gray-200 shadow-sm">
        {activeTab === "data" && <CaseRecordDataPanel patient={patient} />}

        {activeTab === "files" && fileIds?.length > 0 && (
          <div className="mt-2">
            <DoctorCaseRecordFileReader fileIds={fileIds} />
          </div>
        )}

        {activeTab === "files" && fileIds.length === 0 && (
          <p className="text-gray-500 text-sm mt-2">
            No attachments available.
          </p>
        )}
      </div>
    </div>
  );
};

export default CaseRecordDataTab;
