import {
  PrinterIcon,
  DownloadIcon,
  UserIcon,
  FileIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
} from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";
import PatientMedicalReportSecondary from "./PatientMedicalReportSecondary";

const PatientMedicalRecordReport = ({
  patient: selectedReport,
  onClose: closeReportModal,
}) => {
  console.log("selectedReport");
  console.log(selectedReport);

  // if (!selectedReport) return null;

  return (
    <>
      {/* =================== REPORT MODAL =================== */}
      <div className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center p-2 print:p-0 print:static print:bg-white print:bg-opacity-100">
        <div
          className="w-full max-w-4xl max-h-[90vh] overflow-auto print:shadow-none print:max-w-none print:max-h-none print:w-full"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            border: "1px solid rgba(0,0,0,0.2)",
          }}
        >
          {/* HEADER */}
          <div
            className="sticky top-0 border-b border-gray-200 p-3 flex items-center justify-between print:hidden"
            style={{
              backgroundImage: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center">
              <div className="flex mr-3">
                <button
                  onClick={closeReportModal}
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, #ff5a5a, #cc0000)",
                    boxShadow:
                      "0 1px 1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
                    border: "1px solid rgba(100,0,0,0.4)",
                  }}
                />
              </div>
              <h2 className="text-base font-semibold text-gray-800">
                Medical Report
              </h2>
            </div>

            <div className="flex space-x-2">
              <button
                // onClick={handlePrintReport}
                className={`p-1.5 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                  border: "1px solid rgba(0,0,0,0.2)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <PrinterIcon size={16} className="text-blue-700" />
              </button>
              <button
                // onClick={handleDownloadReport}
                className={`p-1.5 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                  border: "1px solid rgba(0,0,0,0.2)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <DownloadIcon size={16} className="text-blue-700" />
              </button>
            </div>
          </div>

          {/* =================== CONTENT =================== */}
          <div className="p-4 print:p-8">
            {/* Institution Header */}
            <div
              className="text-white p-4 rounded-lg mb-4 print:bg-blue-600"
              style={{
                background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="mb-3 md:mb-0">
                  <h2 className="text-lg font-bold">
                    Saveetha Medical College Hospital
                  </h2>
                  <p className="text-sm">Saveetha Nagar, Thandalam</p>
                  <p className="text-sm">Chennai 600077</p>
                  <p className="text-sm">Tel: (044) 2680-1050</p>
                </div>
                <div className="md:text-right">
                  <h3 className="text-base font-semibold">MEDICAL REPORT</h3>
                  <p className="text-sm">Report ID: {selectedReport.id}</p>
                  <p className="text-sm">Date: {selectedReport.date}</p>
                  <p className="text-sm">Time: {selectedReport.time}</p>
                </div>
              </div>
            </div>

            {/* Patient & Record Info */}
            <div className="grid grid-cols-1 gap-4 mb-4">
              {/* Patient Information */}
              <div
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(245,245,245,0.8)",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="font-medium text-gray-700 mb-2 text-sm flex items-center">
                  <UserIcon size={14} className="mr-1 text-blue-600" />
                  Patient Information
                </h4>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Name:</span> John Doe
                  </p>
                  <p>
                    <span className="font-medium">Patient ID:</span>{" "}
                    SMC-2023-0042
                  </p>
                  <p>
                    <span className="font-medium">Date of Birth:</span> January
                    15, 1980
                  </p>
                  <p>
                    <span className="font-medium">Gender:</span> Male
                  </p>
                  <p>
                    <span className="font-medium">Contact:</span> (555) 987-6543
                  </p>
                </div>

                {/* Medical Alert */}
                <div
                  className="mt-2 px-2 py-1.5 rounded-md flex items-center"
                  style={{
                    backgroundColor: "rgba(255,0,0,0.05)",
                    border: "1px solid rgba(220,50,50,0.2)",
                  }}
                >
                  <AlertTriangleIcon
                    size={12}
                    className="text-red-600 mr-1.5"
                  />
                  <span className="text-red-700 text-xs font-medium">
                    Penicillin Allergy
                  </span>
                </div>
              </div>

              {/* Record Information */}
              <div
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(245,245,245,0.8)",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="font-medium text-gray-700 mb-2 text-sm flex items-center">
                  <FileIcon size={14} className="mr-1 text-blue-600" />
                  Record Information
                </h4>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Type:</span>{" "}
                    {selectedReport.type}
                  </p>
                  <p>
                    <span className="font-medium">Description:</span>{" "}
                    {selectedReport.description}
                  </p>
                  <p>
                    <span className="font-medium">Department:</span>{" "}
                    {selectedReport.department}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                      style={{
                        // ...getStatusBadgeStyle(selectedReport.status),
                        height: "20px",
                        width: "100px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {selectedReport.status}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium inline-flex items-center">
                      <UserIcon size={14} className="mr-1 text-blue-600" />
                      Performed By:
                    </span>{" "}
                    {selectedReport.performedBy}
                  </p>
                  <p>
                    <span className="font-medium inline-flex items-center">
                      <CheckCircleIcon
                        size={14}
                        className="mr-1 text-blue-600"
                      />
                      Supervised By:
                    </span>{" "}
                    {selectedReport.supervisedBy}
                  </p>
                </div>
              </div>
            </div>

            <PatientMedicalReportSecondary></PatientMedicalReportSecondary>

            {/* Footer */}
            <div className="mt-6 pt-3 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500">
                This is an official medical report from Saveetha Medical College
                Hospital.
              </p>
              <p className="text-xs text-gray-500">
                For inquiries: records@saveethamedical.com
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Generated on: {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientMedicalRecordReport;
