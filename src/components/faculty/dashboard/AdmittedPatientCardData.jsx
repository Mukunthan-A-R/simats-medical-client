import AdmittedPatientCard from "./AdmittedPatientCard";
import { useQuery } from "@tanstack/react-query";
import { fetchDoctorPatients } from "../../../services/doctorPatientsServices";
import { useParams } from "react-router-dom";

const AdmittedPatientCardData = () => {
  const id = useParams();
  const doctorId = id.facultyId;

  // const {
  //   data: patientsData,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["doctorPatients", doctorId],
  //   queryFn: () => fetchDoctorPatients(doctorId),
  //   enabled: !!doctorId,
  // });
  const patientsData = [];

  // if (isLoading) {
  //   return <p className="p-4 text-center text-gray-700">Loading patients...</p>;
  // }

  // if (isError) {
  //   return (
  //     <p className="p-4 text-center text-red-600">
  //       Failed to load patients. Please try again.
  //     </p>
  //   );
  // }

  const admittedPatients = patientsData?.data || [];

  if (admittedPatients.length === 0) {
    return (
      <p className="p-4 text-center text-gray-700">No patients for now!</p>
    );
  }

  return (
    <div className="space-y-3">
      {admittedPatients.map((patient) => (
        <AdmittedPatientCard key={patient?.patient_id} patient={patient} />
      ))}
    </div>
  );
};

export default AdmittedPatientCardData;
