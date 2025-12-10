import { useQuery } from "@tanstack/react-query";
import { fetchDoctorById } from "../../services/doctorService";
import { useParams } from "react-router-dom";
import PersonProfileHeader from "../../components/PersonProfileHeader";
import PersonPersonalInformation from "../../components/PersonPersonalInformation";
import PersonContactInfo from "../../components/PersonContactInfo";
import PersonEmergencyContactInfo from "../../components/PersonEmergencyContactInfo";

const FacultyProfile = () => {
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
    <div className="px-4 py-5 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex-1 sm:pb-6 ">
          {/* Profile Header */}
          <PersonProfileHeader userDataVal={userDoctorData} />
        </div>
        <div className="flex-1 ">
          {/* Emergency Contact */}
          <PersonEmergencyContactInfo />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
        <div className="flex-1 ">
          {/* Personal Information */}
          <PersonPersonalInformation userDataVal={userDoctorData} />
        </div>
        <div className="flex-1 ">
          {/* Contact Information */}
          <PersonContactInfo userDataVal={userDoctorData} />
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
