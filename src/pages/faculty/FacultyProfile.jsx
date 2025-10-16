import React from "react";
import PersonProfileHeader from "../../components/PersonProfileHeader";
import PersonPersonalInformation from "../../components/PersonPersonalInformation";
import PersonContactInfo from "../../components/PersonContactInfo";
import PersonEmergencyContactInfo from "../../components/PersonEmergencyContactInfo";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

const FacultyProfile = () => {
  return (
    <div className="px-4 py-5 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex-1 sm:pb-6 ">
          {/* Profile Header */}
          <PersonProfileHeader />
        </div>
        <div className="flex-1 ">
          {/* Emergency Contact */}
          <PersonEmergencyContactInfo />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
        <div className="flex-1 ">
          {/* Personal Information */}
          <PersonPersonalInformation />
        </div>
        <div className="flex-1 ">
          {/* Contact Information */}
          <PersonContactInfo />
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
