import PersonContactInfo from "../PersonContactInfo";
import PersonEmergencyContactInfo from "../PersonEmergencyContactInfo";
import PersonProfileHeader from "../PersonProfileHeader";
import PersonPersonalInformation from "../PersonPersonalInformation";
import PatientProfileInsurance from "./PatientProfileInsurance";
import { useParams } from "react-router-dom";
import { userData } from "../../context/userAtom";
import { useRecoilValue } from "recoil";

export default function PatientProfile() {
  const { patientId } = useParams();
  const userDataVal = useRecoilValue(userData);
  console.log("patientId : " + patientId);

  return (
    <div className="px-4 py-5 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex-1 sm:pb-6 ">
          {/* Profile Header */}
          <PersonProfileHeader userDataVal={userDataVal} />
        </div>
        <div className="flex-1 ">
          {/* Emergency Contact */}
          <PersonEmergencyContactInfo />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
        <div className="flex-1 ">
          {/* Personal Information */}
          <PersonPersonalInformation userDataVal={userDataVal} />
        </div>
        <div className="flex-1 ">
          {/* Contact Information */}
          <PersonContactInfo userDataVal={userDataVal} />
        </div>
      </div>

      <PatientProfileInsurance />
    </div>
  );
}
