import React from "react";
import PersonProfileHeader from "../../components/PersonProfileHeader";
import PersonPersonalInformation from "../../components/PersonPersonalInformation";
import PersonContactInfo from "../../components/PersonContactInfo";
import PersonEmergencyContactInfo from "../../components/PersonEmergencyContactInfo";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

const FacultyProfile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-4 py-5 max-w-6xl mx-auto w-full">
        {/* Profile Header */}
        <PersonProfileHeader />

        {/* Personal Information */}
        <PersonPersonalInformation />

        {/* Contact Information */}
        <PersonContactInfo
          aquaButtonStyle={aquaButtonStyle}
          aquaGlossEffect={aquaGlossEffect}
        />

        {/* Emergency Contact */}
        <PersonEmergencyContactInfo
          aquaButtonStyle={aquaButtonStyle}
          aquaGlossEffect={aquaGlossEffect}
        />

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
    </div>
  );
};

export default FacultyProfile;
