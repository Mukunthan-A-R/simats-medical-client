import React from "react";

import PersonContactInfo from "../PersonContactInfo";
import PersonEmergencyContactInfo from "../PersonEmergencyContactInfo";
import PersonProfileHeader from "../PersonProfileHeader";
import PersonPersonalInformation from "../PersonPersonalInformation";
import PatientProfileInsurance from "./PatientProfileInsurance";
import { useParams } from "react-router-dom";

export default function PatientProfile() {
  const { patientId } = useParams();
  console.log("patientId : " + patientId);

  return (
    <div className="px-4 py-5 max-w-6xl mx-auto w-full">
      {/* Profile Header */}
      <PersonProfileHeader />

      {/* Personal Information */}
      <PersonPersonalInformation />

      {/* Contact Information */}
      <PersonContactInfo />

      {/* Emergency Contact */}
      <PersonEmergencyContactInfo />

      <PatientProfileInsurance />

      {/* Optional global animation */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}
