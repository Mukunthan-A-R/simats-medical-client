import PatientDashboardProfile from "../../components/patient/dashboard/PatientDashboardProfile";
import { useParams } from "react-router-dom";
import PatientDashboardServices from "../../components/patient/dashboard/PatientDashboardServices";
import PatientDashboardNotification from "../../components/patient/dashboard/PatientDashboardNotification";
import { fetchPatientById } from "../../services/patientService";
import { useQuery } from "@tanstack/react-query";

const PatientDashboard = () => {
  const { patientId } = useParams();

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentData", patientId],
    queryFn: () => fetchPatientById(patientId),
    enabled: !!patientId,
  });

  if (isLoading) {
    return <p className="p-4 text-yellow-800">Loading ...</p>;
  }
  if (isError) {
    return <p className="p-4 text-red-500">Error Fetching Patient Details !</p>;
  }

  return (
    <div className="px-2 sm:px-4 py-2 sm:py-5 max-w-6xl mx-auto">
      <PatientDashboardProfile userDataVal={userData}></PatientDashboardProfile>
      <PatientDashboardNotification></PatientDashboardNotification>
      <PatientDashboardServices
        onNavigate={(path) => console.log("Navigate to:", path)}
        patientId={patientId}
        showMedicationReminder={true}
        handleMarkAsTaken={() => console.log("Marked as taken")}
      />
    </div>
  );
};

export default PatientDashboard;
