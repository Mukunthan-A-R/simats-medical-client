import {
  XIcon,
  PrinterIcon,
  DownloadIcon,
  PillIcon,
  UserIcon,
  FileTextIcon,
} from "lucide-react";

const PatientPrescriptionDetails = ({ prescription, onClose }) => {
  if (!prescription) return null;

  const formatDate = (date) => new Date(date).toLocaleDateString();

  const getStatusBadgeStyle = (status) => {
    switch (status.toLowerCase()) {
      case "active":
      case "approved":
        return { color: "bg-green-500", icon: "🟢" };
      case "rejected":
        return { color: "bg-gray-500", icon: "⚪" };
      case "pending":
        return { color: "bg-blue-500", icon: "🔵" };
      default:
        return { color: "bg-gray-300", icon: "⚪" };
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div className="rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto bg-white animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 border-b border-gray-200 p-4 flex items-center justify-between bg-gray-100">
          <h2 className="text-base font-semibold text-gray-800">
            Prescription Details
          </h2>
          <div className="flex space-x-2">
            <button onClick={() => alert("Printing prescription")}>
              <PrinterIcon size={16} />
            </button>
            <button onClick={() => alert("Downloading prescription")}>
              <DownloadIcon size={16} />
            </button>
            <button onClick={onClose}>
              <XIcon size={16} />
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
          <span
            className={`px-4 py-2 text-white rounded-full ${
              getStatusBadgeStyle(prescription.status).color
            }`}
          >
            {getStatusBadgeStyle(prescription.status).icon}{" "}
            {prescription.status}
          </span>
        </div>

        {/* Prescription Info */}
        <div className="p-6 space-y-6">
          {/* Prescriber Info */}
          <div className="p-5 bg-gray-100 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center">
              <UserIcon size={16} className="mr-2" />
              Prescriber Information
            </h4>
            <p>
              <span className="font-medium">Doctor:</span>{" "}
              {prescription.doctor_name}
            </p>
            <p>
              <span className="font-medium">Department:</span>{" "}
              {prescription.department_name}
            </p>
          </div>

          {/* Student Info */}
          <div className="p-5 bg-gray-100 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center">
              <UserIcon size={16} className="mr-2" />
              Student / Assistant Information
            </h4>
            <p>
              <span className="font-medium">Name:</span>{" "}
              {prescription.student_name}
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              {prescription.student_phone}
            </p>
          </div>

          {/* Medications */}
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <PillIcon size={16} className="mr-2" />
              Medications
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h5 className="font-medium flex items-center">
                  {prescription.medication_name} {prescription.dosage}
                </h5>
                <p>Frequency: {prescription.frequency}</p>
                <p>Timing: {prescription.medication_timing}</p>
                <p>Instructions: {prescription.instructions}</p>
                <p>
                  Valid: {formatDate(prescription.start_date)} -{" "}
                  {formatDate(prescription.end_date)}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="p-5 bg-blue-100 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center">
              <FileTextIcon size={16} className="mr-2" />
              Additional Notes
            </h4>
            <p>
              Please take medications as prescribed. Contact your doctor if any
              issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPrescriptionDetails;
