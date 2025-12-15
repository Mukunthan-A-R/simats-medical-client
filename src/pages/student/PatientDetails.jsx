import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeftIcon } from "lucide-react";
import PatientProfileData from "../../components/students/patients/PatientProfileData";
import PatientMedicalData from "../../components/students/patients/PatientMedicalData";
import { fetchPatientById } from "../../services/patientService";
import PatientNotesList from "../../components/students/patient-notes/PatientNotesList";
import DischargeComponent from "../../components/students/discharge/DischargeComponent";
import DischargeStatusComponent from "../../components/students/discharge/DischargeStatusComponent";

const PatientDetails = () => {
  const navigate = useNavigate();
  const { patientId } = useParams();

  const {
    data: patientData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatientById(patientId),
    enabled: !!patientId,
  });

  if (isLoading) {
    <p>Loading ...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col p-4 bg-gray-50">
      {/* Header */}
      <div className="mb-4 flex items-center">
        <button
          className="mr-2 w-8 h-8 flex items-center justify-center rounded-full"
          onClick={() => navigate(-1)}
          style={{
            background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <ChevronLeftIcon size={18} className="text-blue-700" />
        </button>
        <h1 className="text-xl font-semibold text-blue-900">Patient Details</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <PatientProfileData patient={patientData} />
        <div className="my-3">
          {patientData && (
            <PatientNotesList patientData={patientData}></PatientNotesList>
          )}
        </div>
        <DischargeComponent
          assignmentId={patientData?.assignment_id}
        ></DischargeComponent>
        <DischargeStatusComponent
          assignmentId={patientData?.assignment_id}
        ></DischargeStatusComponent>
        <PatientMedicalData patient={patientData} />
      </div>
    </div>
  );
};

export default PatientDetails;
