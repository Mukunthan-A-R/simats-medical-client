import { PrinterIcon, DownloadIcon, UserIcon } from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";
import PatientMedicalReportSecondary from "./PatientMedicalReportSecondary";

const PatientMedicalRecordReport = ({
  patient: selectedReport,
  onClose: closeReportModal,
}) => {
  if (!selectedReport) return null;

  return (
    <>
      {/* =================== REPORT MODAL =================== */}
      <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-2 print:p-0 print:static print:bg-white print:bg-opacity-100">
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
                className={`p-1.5 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
              >
                <PrinterIcon size={16} className="text-blue-700" />
              </button>
              <button
                className={`p-1.5 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
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
                  <p className="text-sm">
                    Report ID: {selectedReport.record_id}
                  </p>
                  <p className="text-sm">
                    Created:{" "}
                    {new Date(selectedReport.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-sm">
                    Time:{" "}
                    {new Date(selectedReport.created_at).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Patient Information */}
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(245,245,245,0.8)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="font-medium text-gray-700 mb-2 text-sm flex items-center">
                  <UserIcon size={14} className="mr-1 text-blue-600" />
                  Patient Information
                </h4>
                <p className="text-sm text-gray-700">
                  Name: {selectedReport.patient_name} <br />
                  ID: {selectedReport.patient_id} <br />
                  Gender: {selectedReport.patient_gender} <br />
                  DOB:{" "}
                  {new Date(
                    selectedReport.patient_dob
                  ).toLocaleDateString()}{" "}
                  <br />
                  Blood Group: {selectedReport.patient_blood_group} <br />
                  Contact: {selectedReport.patient_phone} <br />
                  Email: {selectedReport.patient_email} <br />
                  Address: {selectedReport.patient_address}
                </p>
              </div>

              {/* Doctor Information */}
              <div
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(245,245,245,0.8)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="font-medium text-gray-700 mb-2 text-sm flex items-center">
                  <UserIcon size={14} className="mr-1 text-blue-600" />
                  Doctor Information
                </h4>
                <p className="text-sm text-gray-700">
                  Name: {selectedReport.doctor_name} <br />
                  Gender: {selectedReport.doctor_gender} <br />
                  DOB:{" "}
                  {new Date(
                    selectedReport.doctor_dob
                  ).toLocaleDateString()}{" "}
                  <br />
                  Blood Group: {selectedReport.doctor_blood_group} <br />
                  Contact: {selectedReport.doctor_phone} <br />
                  Email: {selectedReport.doctor_email} <br />
                  Address: {selectedReport.doctor_address}
                </p>
              </div>

              {/* Student Information */}
              <div
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(245,245,245,0.8)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="font-medium text-gray-700 mb-2 text-sm flex items-center">
                  <UserIcon size={14} className="mr-1 text-blue-600" />
                  Student Information
                </h4>
                <p className="text-sm text-gray-700">
                  Name: {selectedReport.student_name} <br />
                  ID: {selectedReport.student_id} <br />
                  Gender: {selectedReport.student_gender} <br />
                  DOB:{" "}
                  {new Date(
                    selectedReport.student_dob
                  ).toLocaleDateString()}{" "}
                  <br />
                  Blood Group: {selectedReport.student_blood_group} <br />
                  Contact: {selectedReport.student_phone} <br />
                  Email: {selectedReport.student_email} <br />
                  Address: {selectedReport.student_address}
                </p>
              </div>
            </div>

            {/* Case Record Details */}
            <PatientMedicalReportSecondary patient={selectedReport} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientMedicalRecordReport;
