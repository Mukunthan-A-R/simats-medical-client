import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchDoctorById } from "../../services/doctorService";
import FacultyDashboardProfile from "../../components/faculty/dashboard/FacultyDashboardProfile";
import FacultyDashboardApprovals from "../../components/faculty/dashboard/FacultyDashboardApprovals";
import FacultyDashboardWindow from "../../components/faculty/dashboard/FacultyDashboardWindow";

const FacultyDashboard = () => {
  const { facultyId } = useParams();

  const {
    data: userDoctorData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentData", facultyId],
    queryFn: () => fetchDoctorById(facultyId),
    enabled: !!facultyId,
  });

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="px-4 py-5 max-w-4xl mx-auto w-full">
      <FacultyDashboardProfile
        userData={userDoctorData}
      ></FacultyDashboardProfile>
      <FacultyDashboardApprovals></FacultyDashboardApprovals>
      <FacultyDashboardWindow></FacultyDashboardWindow>
    </div>
  );
};

export default FacultyDashboard;
