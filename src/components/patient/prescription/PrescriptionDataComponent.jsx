import { useState } from "react";
import PatientPrescriptionDetails from "./PatientPrescriptionDetails";
import { FileTextIcon, PillIcon } from "lucide-react";

const PrescriptionDataComponent = ({ patientMedicationData = [] }) => {
  const [prescriptionModal, setPrescriptionModal] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  if (!patientMedicationData || patientMedicationData.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No prescriptions found.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-b-lg">
      {patientMedicationData.map((item) => (
        <div
          key={item.medication_id}
          className="text-black p-4 flex flex-row justify-between border-b border-gray-200 last:border-none"
        >
          {/* Left side */}
          <div className="flex flex-row items-center gap-2">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center mr-3"
              style={{
                background: "linear-gradient(to bottom, #e6f0ff, #cce0ff)",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <PillIcon size={20} className="text-blue-600" />
            </div>
            <div className="text-gray-600 text-sm">
              <p className="font-medium text-black text-base">
                RX-{item.medication_id}
              </p>
              <p>{new Date(item.created_at).toLocaleDateString()}</p>
              <p className="font-medium">Dr. {item.doctor_name}</p>
              <p className="font-medium">Dept: {item.department_name}</p>
            </div>
          </div>

          {/* Right side */}
          <div className="text-right flex flex-col items-end gap-y-1">
            {/* <p className="font-medium capitalize">{item.status}</p> */}

            <button
              className={`px-4 py-0.5 rounded-full text-xs text-white font-medium ${
                item.status.toLowerCase() === "approved"
                  ? "bg-green-600"
                  : item.status.toLowerCase() === "rejected"
                  ? "bg-gray-500"
                  : "bg-blue-600"
              }`}
              onClick={() => alert("Renew prescription")}
              style={{
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.status}
            </button>

            <button
              className="h-7 flex items-center px-2 py-0 text-xs font-medium text-white rounded-md mt-1"
              onClick={() => {
                setSelectedPrescription(item);
                setPrescriptionModal(true);
              }}
              style={{
                background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <FileTextIcon size={10} className="mr-1" />
              View
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {prescriptionModal && selectedPrescription && (
        <PatientPrescriptionDetails
          prescription={selectedPrescription}
          onClose={() => {
            setPrescriptionModal(false);
            setSelectedPrescription(null);
          }}
        />
      )}
    </div>
  );
};

export default PrescriptionDataComponent;
