import { useQuery } from "@tanstack/react-query";
import { fetchStudentById } from "../../services/studentService";
import { useParams } from "react-router-dom";
import PersonProfileHeader from "../../components/PersonProfileHeader";
import PersonPersonalInformation from "../../components/PersonPersonalInformation";
import PersonContactInfo from "../../components/PersonContactInfo";
import PersonEmergencyContactInfo from "../../components/PersonEmergencyContactInfo";

export default function StudentProfileScreen() {
  const { studentId } = useParams();

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentData", studentId],
    queryFn: () => fetchStudentById(studentId),
    enabled: !!studentId,
  });

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="px-4 py-5 max-w-6xl mx-auto flex flex-col min-h-screen w-full">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex-1 sm:pb-6 ">
          {/* Profile Header */}
          <PersonProfileHeader userDataVal={userData} />
        </div>
        <div className="flex-1 ">
          {/* Emergency Contact */}
          <PersonEmergencyContactInfo />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
        <div className="flex-1 ">
          {/* Personal Information */}
          <PersonPersonalInformation userDataVal={userData} />
        </div>
        <div className="flex-1 ">
          {/* Contact Information */}
          <PersonContactInfo userDataVal={userData} />
        </div>
      </div>
    </div>
  );
}
