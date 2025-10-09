import { HomeIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react";
import React from "react";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

const StudentEmergencyContactDetails = ({ studentData }) => {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md mb-6"
      style={{
        backgroundColor: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.2)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="px-4 py-3 border-b flex items-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f8f9fb, #d9e1ea)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <PhoneIcon size={16} className="text-red-600 mr-2" />
        <h3
          className="font-medium text-gray-800"
          style={{
            textShadow: "0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          Emergency Contact
        </h3>
      </div>
      <div className="p-4 space-y-4">
        <div
          className="p-3 rounded-lg"
          style={{
            backgroundColor: "rgba(254,242,242,0.4)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
            border: "1px solid rgba(252,165,165,0.3)",
          }}
        >
          <div className="flex items-start mb-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`}
              style={{
                background: "linear-gradient(to bottom, #f87171, #dc2626)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <UserIcon size={14} className="text-white" />
            </div>
            <div>
              <span className="text-gray-800 font-medium">
                {studentData.emergencyContact.name}
              </span>
              <p className="text-xs text-gray-500">
                {studentData.emergencyContact.relationship}
              </p>
            </div>
          </div>
          <div className="flex items-start mb-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`}
              style={{
                background: "linear-gradient(to bottom, #f87171, #dc2626)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <PhoneIcon size={14} className="text-white" />
            </div>
            <div>
              <span className="text-gray-800 font-medium">
                {studentData.emergencyContact.phone}
              </span>
              <p className="text-xs text-gray-500">Mobile</p>
            </div>
          </div>
          <div className="flex items-start mb-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`}
              style={{
                background: "linear-gradient(to bottom, #f87171, #dc2626)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <MailIcon size={14} className="text-white" />
            </div>
            <div>
              <span className="text-gray-800 font-medium">
                {studentData.emergencyContact.email}
              </span>
              <p className="text-xs text-gray-500">Email</p>
            </div>
          </div>
          <div className="flex items-start">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`}
              style={{
                background: "linear-gradient(to bottom, #f87171, #dc2626)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <HomeIcon size={14} className="text-white" />
            </div>
            <div>
              <span className="text-gray-800 font-medium">
                {studentData.emergencyContact.address}
              </span>
              <p className="text-xs text-gray-500">Address</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEmergencyContactDetails;
