import React from "react";
import StudentProfileHeader from "../../components/students/StudentProfileHeader";
import StudentPersonalInformation from "../../components/students/StudentPersonalInformation";
import StudentContactInfo from "../../components/students/StudentContactInfo";
import StudentEmergencyContactInfo from "../../components/students/StudentEmergencyContactInfo";

export default function StudentProfileScreen() {
  // Aqua button style classes (passed to child components)
  const aquaButtonStyle =
    "relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner";
  const aquaGlossEffect =
    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-4">
        {/* Profile Header */}
        <StudentProfileHeader />

        {/* Personal Information */}
        <StudentPersonalInformation />

        {/* Contact Information */}
        <StudentContactInfo
          aquaButtonStyle={aquaButtonStyle}
          aquaGlossEffect={aquaGlossEffect}
        />

        {/* Emergency Contact */}
        <StudentEmergencyContactInfo
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
}
