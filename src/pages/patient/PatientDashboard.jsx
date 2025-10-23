import React from "react";
import PatientDashboardProfile from "../../components/patient/PatientDashboardProfile";
import { useParams } from "react-router-dom";
import PatientDashboardServices from "../../components/patient/PatientDashboardServices";
import PatientDashboardNotification from "../../components/patient/PatientDashboardNotification";

const PatientDashboard = () => {
  // const { patientId } = useParams();
  // console.log("patientId : " + patientId);

  return (
    <div className="px-2 sm:px-4 py-2 sm:py-5 max-w-6xl mx-auto">
      <PatientDashboardProfile></PatientDashboardProfile>
      {/* <PatientDashboardNotification></PatientDashboardNotification> */}
      <PatientDashboardServices
        onNavigate={(path) => console.log("Navigate to:", path)}
        patientId={123}
        showMedicationReminder={true}
        handleMarkAsTaken={() => console.log("Marked as taken")}
      />
    </div>
  );
};

export default PatientDashboard;
