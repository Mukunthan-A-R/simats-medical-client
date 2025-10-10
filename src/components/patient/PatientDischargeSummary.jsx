import {
  DownloadIcon,
  MailIcon,
  PhoneIcon,
  PrinterIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { formatDate, iconButtonStyle } from "../../utils/constants";

const PatientDischargeSummary = ({
  closeDischargeSummary,
  admission: selectedDischargeSummary,
}) => {
  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-10 flex items-center justify-center p-4 z-50 print:p-0 print:static print:bg-white print:bg-opacity-100">
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-auto rounded-xl print:shadow-none print:max-w-none print:max-h-none print:w-full"
        style={{
          backgroundColor: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          border: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        {/* Report Header */}
        <div
          className="sticky top-0 border-b border-gray-200 p-4 flex items-center justify-between z-10 print:hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, #f8f9fb, #d9e1ea)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
          }}
        >
          <div className="flex items-center">
            <div className="flex mr-3">
              <button
                onClick={closeDischargeSummary}
                className="w-3.5 h-3.5 rounded-full relative"
                style={{
                  background: "linear-gradient(to bottom, #ff5f57, #e0443e)",
                  boxShadow:
                    "0 1px 1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25)",
                  border: "1px solid rgba(100,0,0,0.4)",
                }}
              >
                <XIcon
                  size={8}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#7d0000] opacity-0 hover:opacity-100"
                />
              </button>
            </div>
            <h2
              className="text-base font-semibold text-gray-800"
              style={{ textShadow: "none" }}
            >
              {selectedDischargeSummary.department?.includes("Rehabilitation")
                ? "Rehabilitation Discharge Summary"
                : "Discharge Summary"}
            </h2>
          </div>
          <div className="flex space-x-2">
            <button
              //   onClick={handlePrintSummary}
              className={iconButtonStyle}
              style={{
                background: "linear-gradient(to bottom, #f8f9fb, #d9e1ea)",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
              title="Print Summary"
            >
              <PrinterIcon size={16} className="text-blue-700" />
            </button>
            <button
              //   onClick={handleDownloadSummary}
              className={iconButtonStyle}
              style={{
                background: "linear-gradient(to bottom, #f8f9fb, #d9e1ea)",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
              title="Download Summary"
            >
              <DownloadIcon size={16} className="text-blue-700" />
            </button>
          </div>
        </div>

        {/* Discharge Summary Content */}
        <div className="p-6 print:p-8">
          {/* Institution Header */}
          <div
            className="text-white p-6 rounded-lg mb-6 print:bg-blue-600 overflow-hidden relative"
            style={{
              background: selectedDischargeSummary.department?.includes(
                "Rehabilitation"
              )
                ? "linear-gradient(135deg, #9333ea 0%, #8b5cf6 50%, #7e22ce 100%)"
                : "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2), 0 0 1px rgba(0,0,0,0.3)",
              border: "1px solid rgba(0,0,0,0.15)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 51%, rgba(0,0,0,0.05) 100%)",
                borderRadius: "7px",
              }}
            />
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 relative">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Saveetha Medical College Hospital
                </h2>
                <p className="mt-1 font-medium text-white">
                  Saveetha Nagar, Thandalam
                </p>
                <p className="font-medium text-white">Chennai 600077</p>
                <div className="flex items-center mt-2">
                  <PhoneIcon size={14} className="mr-1.5 text-white" />
                  <p className="font-medium text-white">(044) 2680-1050</p>
                </div>
                <div className="flex items-center mt-1">
                  <MailIcon size={14} className="mr-1.5 text-white" />
                  <p className="font-medium text-white">
                    info@saveethamedical.com
                  </p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <h3 className="text-lg font-extrabold tracking-wide text-white">
                  {selectedDischargeSummary.department?.includes(
                    "Rehabilitation"
                  )
                    ? "REHABILITATION DISCHARGE SUMMARY"
                    : "DISCHARGE SUMMARY"}
                </h3>
                <p className="mt-2 font-medium text-white">
                  Admission ID: {selectedDischargeSummary.id}
                </p>
                <p className="mt-1 font-medium text-white">
                  Admission Date:{" "}
                  {formatDate(selectedDischargeSummary.admissionDate)}
                </p>
                <p className="mt-1 font-medium text-white">
                  Discharge Date:{" "}
                  {formatDate(selectedDischargeSummary.dischargeDate)}
                </p>
              </div>
            </div>
          </div>

          {/* ... the rest of your JSX sections (Patient Info, Admission Details, Clinical Info, etc.) follow here with the same structure ... */}
        </div>
      </div>
    </div>
  );
};

export default PatientDischargeSummary;
