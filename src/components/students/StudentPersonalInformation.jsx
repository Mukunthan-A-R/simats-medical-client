import React from "react";
import { ShieldIcon, CalendarIcon, UserIcon, DropletIcon } from "lucide-react";

// Small reusable badge component for “Verified”
const VerifiedBadge = () => (
  <div
    className="ml-2 px-2 py-0.5 rounded text-xs font-medium"
    style={{
      background: "linear-gradient(to bottom, #a7f3d0, #6ee7b7)",
      boxShadow:
        "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
      border: "1px solid rgba(16,185,129,0.3)",
      color: "#065f46",
    }}
  >
    Verified
  </div>
);

// Main component
export default function StudentPersonalInformation({
  aadhaar = "XXXX XXXX 4567",
  abha = "12-3456-7890-1234",
  dob = "15 May 1985",
  gender = "Male",
  bloodGroup = "O+",
}) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md mb-6"
      style={{
        backgroundColor: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.2)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      {/* Card header */}
      <div
        className="px-4 py-3 border-b flex items-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f8f9fb, #d9e1ea)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <ShieldIcon size={16} className="text-blue-600 mr-2" />
        <h3
          className="font-medium text-gray-800"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
        >
          Personal Information
        </h3>
      </div>

      {/* Card content */}
      <div className="p-4 space-y-4">
        {/* Aadhaar */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Aadhaar ID</span>
          <div className="flex items-center mt-1">
            <span className="text-gray-800 font-medium">{aadhaar}</span>
            <VerifiedBadge />
          </div>
        </div>

        {/* ABHA */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">ABHA ID</span>
          <div className="flex items-center mt-1">
            <span className="text-gray-800 font-medium">{abha}</span>
            <VerifiedBadge />
          </div>
        </div>

        {/* DOB */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Date of Birth</span>
          <div className="flex items-center mt-1">
            <CalendarIcon size={14} className="text-blue-600 mr-2" />
            <span className="text-gray-800">{dob}</span>
          </div>
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Gender</span>
          <div className="flex items-center mt-1">
            <UserIcon size={14} className="text-blue-600 mr-2" />
            <span className="text-gray-800">{gender}</span>
          </div>
        </div>

        {/* Blood Group */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Blood Group</span>
          <div className="flex items-center mt-1">
            <DropletIcon size={14} className="text-red-600 mr-2" />
            <span className="text-gray-800">{bloodGroup}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
