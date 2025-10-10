import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { formatDate } from "../../utils/constants";

const CollegeEntryDischargeSummary = ({ selectedDischargeSummary }) => {
  return (
    <>
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
                {selectedDischargeSummary.department?.includes("Rehabilitation")
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

        <div
          className="bg-white p-5 rounded-lg mb-6 relative overflow-hidden"
          style={{
            border: "1px solid rgba(0,0,0,0.15)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-8 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(240,245,250,0.8), rgba(240,245,250,0))",
              borderTopLeftRadius: "7px",
              borderTopRightRadius: "7px",
            }}
          />
          <h4
            className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200 relative"
            style={{
              textShadow: "none",
            }}
          >
            Patient Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-2">
                <span className="font-medium">Name:</span> John Doe
              </p>
              <p className="text-sm mb-2">
                <span className="font-medium">Patient ID:</span> SMC-2023-0042
              </p>
              <p className="text-sm">
                <span className="font-medium">Date of Birth:</span> 15 Jan 1980
              </p>
            </div>
            <div>
              <p className="text-sm mb-2">
                <span className="font-medium">Gender:</span> Male
              </p>
              <p className="text-sm mb-2">
                <span className="font-medium">Contact:</span> (555) 123-4567
              </p>
              <p className="text-sm">
                <span className="font-medium">Emergency Contact:</span> Jane Doe
                (555) 987-6543
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeEntryDischargeSummary;
