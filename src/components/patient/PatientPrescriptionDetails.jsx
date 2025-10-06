import React from "react";
import {
  XIcon,
  PrinterIcon,
  DownloadIcon,
  PillIcon,
  UserIcon,
  FileTextIcon,
  ShoppingBagIcon,
  RefreshCwIcon,
  ClockIcon,
  ExternalLinkIcon,
} from "lucide-react"; // adjust imports as per your icons

const PatientPrescriptionDetails = ({ prescription, onClose }) => {
  if (!prescription) return null;

  // Example helper functions
  const formatDate = (date) => new Date(date).toLocaleDateString();

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "Active":
        return { aquaColor: "bg-green-500", icon: "🟢" };
      case "Completed":
        return { aquaColor: "bg-gray-500", icon: "⚪" };
      case "Pending":
        return { aquaColor: "bg-blue-500", icon: "🔵" };
      default:
        return { aquaColor: "bg-gray-300", icon: "⚪" };
    }
  };

  const handlePrintPrescription = () => alert("Printing prescription...");
  const handleDownloadPrescription = () => alert("Downloading prescription...");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div className="rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto bg-white animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 border-b border-gray-200 p-4 flex items-center justify-between bg-gradient-to-b from-gray-100 to-gray-200">
          <h2 className="text-base font-semibold text-gray-800">
            Prescription Details
          </h2>
          <div className="flex space-x-2">
            <button onClick={handlePrintPrescription}>
              <PrinterIcon size={16} />
            </button>
            <button onClick={handleDownloadPrescription}>
              <DownloadIcon size={16} />
            </button>
            <button onClick={onClose}>
              <XIcon size={16} />
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
          <span
            className={`px-4 py-2 text-white rounded-full ${
              getStatusBadgeStyle(prescription.status).aquaColor
            }`}
          >
            {getStatusBadgeStyle(prescription.status).icon}{" "}
            {prescription.status}
          </span>
          <div className="flex space-x-2">
            {prescription.status === "Active" && (
              <button onClick={() => alert("Buy medication")}>Buy</button>
            )}
            {prescription.status === "Completed" && (
              <button onClick={() => alert("Renew prescription")}>
                Renew Prescription
              </button>
            )}
            {prescription.status === "Pending" && (
              <button onClick={() => alert("Check status")}>
                Check Status
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Prescription Header */}
          <div className="p-4 bg-blue-600 text-white rounded-lg">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">Saveetha Medical College Hospital</h2>
                <p className="text-xs mt-1">
                  Saveetha Nagar, Thandalam, Chennai 600077
                </p>
                <p className="text-xs">www.saveethamedical.com</p>
              </div>
              <div className="text-right">
                <h3 className="font-semibold">PRESCRIPTION</h3>
                <p className="text-xs mt-1">ID: {prescription.id}</p>
                <p className="text-xs">Date: {formatDate(prescription.date)}</p>
              </div>
            </div>
          </div>

          {/* Patient Info */}
          <div className="p-5 bg-gray-100 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center">
              <UserIcon size={16} className="mr-2" />
              Patient Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <p>
                  <span className="font-medium">Name:</span> John Doe
                </p>
                <p>
                  <span className="font-medium">Patient ID:</span> SMC-2023-0042
                </p>
                <p>
                  <span className="font-medium">Date of Birth:</span> January
                  15, 1980
                </p>
              </div>
              <div>
                <p>
                  <span className="font-medium">Gender:</span> Male
                </p>
                <p>
                  <span className="font-medium">Contact:</span> (555) 987-6543
                </p>
                <p>
                  <span className="font-medium">Address:</span> 123 Main St,
                  Chennai
                </p>
              </div>
            </div>
          </div>

          {/* Prescriber Info */}
          <div className="p-5 bg-gray-100 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center">
              <UserIcon size={16} className="mr-2" />
              Prescriber Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <p>
                  <span className="font-medium">Doctor:</span>{" "}
                  {prescription.doctor}
                </p>
                <p>
                  <span className="font-medium">Department:</span>{" "}
                  {prescription.department}
                </p>
                <p>
                  <span className="font-medium">License No:</span> SMC-DR-2023-
                  {prescription.id.split("-")[2]}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-medium">Hospital:</span> Saveetha
                  Medical College Hospital
                </p>
                <p>
                  <span className="font-medium">Contact:</span> (044) 2680-1050
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {prescription.doctor.split(" ")[1].toLowerCase()}
                  @saveethamedical.com
                </p>
              </div>
            </div>
          </div>

          {/* Medications */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <PillIcon size={16} className="mr-2" />
              Medications
            </h4>
            <div className="space-y-4">
              {prescription.medications.map((med, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-200"
                >
                  <h5 className="font-medium flex items-center">
                    {med.name} {med.dosage}
                  </h5>
                  <p>Frequency: {med.frequency}</p>
                  <p>Duration: {med.duration}</p>
                  <p>Instructions: {med.instructions}</p>
                  <p>
                    Valid: {formatDate(med.startDate)} -{" "}
                    {formatDate(med.endDate)}
                  </p>
                  {prescription.status === "Active" && (
                    <p>Refills: {med.refillsRemaining}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div className="p-5 bg-blue-100 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center">
              <FileTextIcon size={16} className="mr-2" />
              Additional Notes
            </h4>
            <p>
              Please take medications as prescribed. Contact your doctor if you
              experience any severe side effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPrescriptionDetails;
