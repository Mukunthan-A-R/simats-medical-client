import { useState } from "react";
import CurrentMedications from "./medication/CurrentMedications";
import MedicationsHeader from "./medication/MedicationsHeader";
import PendingPrescriptionRequest from "./medication/PendingPrescriptionRequest";
import NewMedicationForm from "./medication/NewMedicationForm";

const PatientPrescriptionData = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const sampleMeds = [
    {
      id: 1,
      name: "Amoxicillin",
      dosage: "500mg",
      frequency: "Twice a day",
      startDate: "2025-10-01",
      endDate: "2025-11-01",
      instructions: "Take after meals",
      status: "Active",
      prescribedBy: "Dr. Smith",
      department: "General Medicine",
    },
    {
      id: 2,
      name: "Vitamin D",
      dosage: "1000 IU",
      frequency: "Once daily",
      startDate: "2025-09-10",
      endDate: null,
      status: "Inactive",
      prescribedBy: "Dr. Lee",
      department: "Nutrition",
    },
  ];

  const sampleRequests = [
    {
      id: 1,
      medicationName: "Amoxicillin",
      dosage: "500mg",
      requestDate: "2025-10-03",
      notes: "Urgent refill",
      status: "Pending",
    },
    {
      id: 2,
      medicationName: "Vitamin D",
      dosage: "1000 IU",
      requestDate: "2025-09-28",
      status: "Approved",
    },
  ];

  return (
    <div className="bg-white rounded-2xl">
      <MedicationsHeader
        showAddForm={showAddForm}
        onToggle={() => setShowAddForm(!showAddForm)}
      />
      {showAddForm && <NewMedicationForm />}

      <CurrentMedications medications={sampleMeds} />

      <PendingPrescriptionRequest requests={sampleRequests} />
    </div>
  );
};

export default PatientPrescriptionData;
