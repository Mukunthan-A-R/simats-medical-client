import { DownloadIcon, PrinterIcon, XIcon } from "lucide-react";
import { iconButtonStyle } from "../../utils/constants";
import PatientDiagnosisComplaints from "./PatientDiagnosisComplaints";
import PatientDiagnosisFooter from "./PatientDiagnosisFooter";
import CurrentPatientAdmissionDetails from "./CurrentPatientAdmissionDetails";
import CollegeEntryDischargeSummary from "./CollegeEntryDischargeSummary";

const PatientDischargeSummary = ({
  closeDischargeSummary,
  admission: selectedDischargeSummary,
}) => {
  return (
    <div className="p-6 fixed inset-0 bg-black/30 bg-opacity-10 flex items-center justify-center z-50 print:p-0 print:static print:bg-white print:bg-opacity-100">
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

        <CollegeEntryDischargeSummary
          selectedDischargeSummary={selectedDischargeSummary}
        />

        <CurrentPatientAdmissionDetails
          selectedDischargeSummary={selectedDischargeSummary}
        />

        <PatientDiagnosisComplaints
          selectedDischargeSummary={selectedDischargeSummary}
        />
        <PatientDiagnosisFooter
          selectedDischargeSummary={selectedDischargeSummary}
        />
      </div>
    </div>
  );
};

export default PatientDischargeSummary;
