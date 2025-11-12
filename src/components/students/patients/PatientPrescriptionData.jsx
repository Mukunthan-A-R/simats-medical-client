import { useState } from "react";
import CurrentMedications from "./medication/CurrentMedications";
import MedicationsHeader from "./medication/MedicationsHeader";
import PendingPrescriptionRequest from "./medication/PendingPrescriptionRequest";
import NewMedicationForm from "./medication/NewMedicationForm";
import { useQuery } from "@tanstack/react-query";
import { fetchMedicationsByAssignment } from "../../../services/studentMedication";

const PatientPrescriptionData = ({ assignmentId }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  console.log("assignmentId");
  console.log(assignmentId);

  const {
    data: patientsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentMedications", assignmentId],
    queryFn: () => fetchMedicationsByAssignment(assignmentId),
    enabled: !!assignmentId,
  });

  console.log("patientsData");
  console.log(patientsData);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const sampleMeds = patientsData || [];

  const sampleRequests = patientsData || [];

  return (
    <div className="bg-white rounded-2xl">
      <MedicationsHeader
        showAddForm={showAddForm}
        onToggle={() => setShowAddForm(!showAddForm)}
      />
      {showAddForm && (
        <NewMedicationForm onToggle={() => setShowAddForm(!showAddForm)} />
      )}

      <CurrentMedications medications={sampleMeds} />

      <PendingPrescriptionRequest requests={sampleRequests} />
    </div>
  );
};

export default PatientPrescriptionData;
