import React from "react";
import {
  PrinterIcon,
  DownloadIcon,
  UserIcon,
  FileIcon,
  AlertTriangleIcon,
  ClipboardListIcon,
  CheckCircleIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

const PatientMedicalRecordReport = ({ record: selectedReport }) => {
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
                  // onClick={closeReportModal}
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

            {/* Findings */}
            {/* <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center text-sm">
                <ClipboardListIcon size={14} className="mr-1 text-blue-600" />
                Findings and Parameters
              </h4>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-1 gap-2">
                  {selectedReport.findings.map((finding, index) => (
                    <div
                      key={index}
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor:
                          finding.status !== "Normal" &&
                          finding.status !== "As directed" &&
                          finding.status !== "Appropriate" &&
                          finding.status !== "Prescribed"
                            ? "rgba(255,250,230,0.7)"
                            : "rgba(245,245,245,0.8)",
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {finding.parameter}
                        </span>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                          style={{
                            background:
                              finding.status === "Normal" ||
                              finding.status === "As directed" ||
                              finding.status === "Appropriate" ||
                              finding.status === "Prescribed"
                                ? "linear-gradient(to bottom, #34c759, #30b350)"
                                : finding.status === "Elevated" ||
                                  finding.status === "High" ||
                                  finding.status === "Borderline High"
                                ? "linear-gradient(to bottom, #ff9500, #ff5e3a)"
                                : finding.status === "Low" ||
                                  finding.status === "Decreased"
                                ? "linear-gradient(to bottom, #4d90fe, #0066cc)"
                                : "linear-gradient(to bottom, #8e8e93, #636366)",
                            boxShadow:
                              "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                            border: "1px solid rgba(0,0,0,0.2)",
                            color: "white",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "20px",
                          }}
                        >
                          {finding.status}
                        </span>
                      </div>
                      <div className="mt-1 flex justify-between">
                        <span className="text-sm font-medium text-gray-900">
                          {finding.value}
                        </span>
                        <span className="text-xs text-gray-500">
                          Ref: {finding.reference}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Diagnosis & Recommendations */}
            {/* <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 text-sm">
                  Diagnosis
                </h4>
                <p className="text-sm text-gray-700">
                  {selectedReport.diagnosis}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 text-sm">
                  Recommendations
                </h4>
                <p className="text-sm text-gray-700">
                  {selectedReport.recommendations}
                </p>
              </div>
            </div> */}

            {/* Evaluation */}
            {/* <div className="mb-4 bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-blue-100 flex items-center text-sm">
                <CheckCircleIcon size={14} className="mr-1 text-blue-600" />
                Evaluation by {selectedReport.supervisedBy}
              </h4>
              <p className="text-sm text-gray-700">
                {selectedReport.evaluation}
              </p>
            </div> */}

            {/* Notes */}
            {/* <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 text-sm">
                Additional Notes
              </h4>
              <p className="text-sm text-gray-700">{selectedReport.notes}</p>
            </div> */}

            {/* Signatures */}
            {/* <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <div className="h-12 border-b border-gray-400 mb-1"></div>
                <p className="text-sm font-medium">
                  {selectedReport.performedBy}
                </p>
                <p className="text-xs text-gray-500">Performed By</p>
              </div>
              <div>
                <div className="h-12 border-b border-gray-400 mb-1"></div>
                <p className="text-sm font-medium">
                  {selectedReport.supervisedBy}
                </p>
                <p className="text-xs text-gray-500">Verified By</p>
              </div>
            </div> */}

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

      {/* =================== IMAGE MODAL =================== */}
      {/* {imageModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-3 print:hidden">
          <div className="relative w-full max-w-lg">
            <div
              className="mb-2 p-2 rounded-t-lg flex items-center"
              style={{
                backgroundImage: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                border: "1px solid rgba(0,0,0,0.2)",
                borderBottom: "none",
              }}
            >
              <div className="flex mr-3">
                <button
                  onClick={closeImageModal}
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, #ff5a5a, #cc0000)",
                    border: "1px solid rgba(100,0,0,0.4)",
                  }}
                />
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-sm font-medium text-gray-800">
                  {selectedImage.title}
                </h3>
              </div>
              <div className="w-3" />
            </div>

            <div
              className="overflow-hidden rounded-b-lg"
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full transform transition-transform duration-200 ease-in-out"
                style={{ transform: `scale(${imageZoom})` }}
              />
              <div className="p-2 text-xs text-gray-300 bg-gray-800 border-t border-gray-700">
                {selectedImage.description}
              </div>
            </div>

       
            <div className="flex justify-center mt-3 space-x-4">
              <button
                onClick={zoomOutImage}
                className={`p-2 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                disabled={imageZoom <= 0.5}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  opacity: imageZoom <= 0.5 ? 0.5 : 1,
                }}
              >
                <ZoomOutIcon size={18} className="text-white" />
              </button>
              <button
                onClick={zoomInImage}
                className={`p-2 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                disabled={imageZoom >= 3}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  opacity: imageZoom >= 3 ? 0.5 : 1,
                }}
              >
                <ZoomInIcon size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default PatientMedicalRecordReport;
