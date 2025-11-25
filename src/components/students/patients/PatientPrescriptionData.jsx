import { useState } from "react";
import CurrentMedications from "./medication/CurrentMedications";
import MedicationsHeader from "./medication/MedicationsHeader";
import PendingPrescriptionRequest from "./medication/PendingPrescriptionRequest";
import NewMedicationForm from "./medication/NewMedicationForm";
import { useQuery } from "@tanstack/react-query";
import { fetchMedicationsByAssignment } from "../../../services/studentMedication";
import { useLocation } from "react-router-dom";

const PatientPrescriptionData = ({ assignmentId }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const location = useLocation();
  const isStaffRoute = location.pathname.includes("/faculty");

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

  // Filter prescriptions by status
  const pendingRequests = prescriptions.filter(
    (item) => item.status === "pending"
  );
  const currentMedications = prescriptions.filter(
    (item) => item.status === "approved"
  );
  const rejectedRequests = prescriptions.filter(
    (item) => item.status === "rejected"
  );

  return (
    <div className="bg-white rounded-2xl">
      <MedicationsHeader
        isStaffRoute={isStaffRoute}
        showAddForm={showAddForm}
        onToggle={() => setShowAddForm(!showAddForm)}
      />

      {showAddForm && !isStaffRoute && (
        <NewMedicationForm
          onToggle={() => setShowAddForm(!showAddForm)}
          assignmentId={assignmentId}
        />
      )}

      {/* ✅ Pass filtered data to child components */}
      <CurrentMedications medications={currentMedications} />
      <PendingPrescriptionRequest requests={pendingRequests} />
      <PendingPrescriptionRequest
        requests={rejectedRequests}
        title="Rejected Requests"
      />
    </div>
  );
};

export default PatientPrescriptionData;
