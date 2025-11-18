import React from "react";
import PatientDashboardProfile from "../../components/patient/dashboard/PatientDashboardProfile";
import { useParams } from "react-router-dom";
import PatientDashboardServices from "../../components/patient/dashboard/PatientDashboardServices";
import PatientDashboardNotification from "../../components/patient/dashboard/PatientDashboardNotification";
import { userData } from "../../context/userAtom";
import { useRecoilValue } from "recoil";

const AdminDashboard = () => {
  const userDataVal = useRecoilValue(userData);
  const { patientId } = useParams();

  return (
    <div className="min-h-screen px-2 sm:px-4 py-2 sm:py-5 max-w-6xl mx-auto">
      <PatientDashboardServices
        onNavigate={(path) => console.log("Navigate to:", path)}
        patientId={patientId}
        showMedicationReminder={true}
        handleMarkAsTaken={() => console.log("Marked as taken")}
      />
    </div>
  );
};

export default AdminDashboard;
