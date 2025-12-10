import { useParams } from "react-router-dom";
import AdminDashboardServices from "../../components/admin/AdminDashboardServices";
import AdminProfileCard from "../../components/admin/dashboard/AdminProfileCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminById } from "../../services/adminService";

const AdminDashboard = () => {
  const { adminId } = useParams();

  const {
    data: userAdminData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["adminData", adminId],
    queryFn: () => fetchAdminById(adminId),
    enabled: !!adminId,
  });

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="min-h-screen px-2 sm:px-4 py-2 sm:py-5 max-w-6xl mx-auto">
      <AdminProfileCard userData={userAdminData} />
      <AdminDashboardServices adminId={adminId} />
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
