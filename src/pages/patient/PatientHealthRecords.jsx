import React from "react";
import { ArrowLeft } from "lucide-react";
import PatientInfoCard from "../../components/patient/PatientInfoCard";
import PatientMedicalRecords from "../../components/patient/PatientMedicalRecords";

const PatientHealthRecords = () => {
  const aquaButtonStyle =
    "relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner";
  const aquaGlossEffect =
    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50";

  return (
    <div className="my-4 mx-5 sm:mt-6 sm:mx-6">
      <div className="flex flex-row items-center mb-4">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </div>
        <h1
          className="text-lg md:text-xl font-semibold text-blue-900 leading-tight"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
        >
          Medical Records
        </h1>
      </div>
      <PatientInfoCard></PatientInfoCard>
      <PatientMedicalRecords></PatientMedicalRecords>
    </div>
  );
};

export default PatientHealthRecords;
