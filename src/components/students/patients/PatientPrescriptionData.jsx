import { useState } from "react";
import CurrentMedications from "./medication/CurrentMedications";
import MedicationsHeader from "./medication/MedicationsHeader";
import PendingPrescriptionRequest from "./medication/PendingPrescriptionRequest";
import NewMedicationForm from "./medication/NewMedicationForm";
import { useQuery } from "@tanstack/react-query";
import { fetchMedicationsByAssignment } from "../../../services/studentMedication";

const PatientPrescriptionData = ({ assignmentId }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const {
    data: patientsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentMedications", assignmentId],
    queryFn: () => fetchMedicationsByAssignment(assignmentId),
    enabled: !!assignmentId,
  });

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error loading prescriptions.</p>;

  // Default to empty array if no data
  const prescriptions = patientsData || [];

  // ✅ Filter prescriptions by status
  const pendingRequests = prescriptions.filter(
    (item) => item.status === "pending"
  );

  const currentMedications = prescriptions.filter(
    (item) => item.status !== "pending" // You can refine this (e.g. === "approved")
  );

  return (
    <div className="bg-white rounded-2xl">
      <MedicationsHeader
        showAddForm={showAddForm}
        onToggle={() => setShowAddForm(!showAddForm)}
      />

      {showAddForm && (
        <NewMedicationForm onToggle={() => setShowAddForm(!showAddForm)} />
      )}

      {/* ✅ Pass filtered data to child components */}
      <CurrentMedications medications={currentMedications} />
      <PendingPrescriptionRequest requests={pendingRequests} />
    </div>
  );
};

export default PatientPrescriptionData;
