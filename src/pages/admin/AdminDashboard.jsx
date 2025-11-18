import { useParams } from "react-router-dom";
import { userData } from "../../context/userAtom";
import { useRecoilValue } from "recoil";
import AdminDashboardServices from "../../components/admin/AdminDashboardServices";
import PatientDashboardServices from "../../components/patient/dashboard/PatientDashboardServices";

const AdminDashboard = () => {
  const userDataVal = useRecoilValue(userData);
  const { patientId } = useParams();

  return (
    <div className="min-h-screen px-2 sm:px-4 py-2 sm:py-5 max-w-6xl mx-auto">
      <AdminDashboardServices />
      {/* <PatientDashboardServices
        onNavigate={(path) => console.log("Navigate to:", path)}
        patientId={patientId}
        showMedicationReminder={true}
        handleMarkAsTaken={() => console.log("Marked as taken")}
      /> */}
    </div>
  );
};

export default AdminDashboard;
