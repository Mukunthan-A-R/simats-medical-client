import React from "react";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

// Single contact row
const ContactItem = ({
  icon: Icon,
  value,
  label,
  aquaButtonStyle,
  aquaGlossEffect,
}) => {
  return (
    <div
      className="flex items-start p-3 rounded-lg"
      style={{
        backgroundColor: "rgba(249,250,251,0.7)",
        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`}
        style={{
          background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
          border: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        <Icon size={14} className="text-white" />
      </div>
      <div>
        <span className="text-gray-800 font-medium">{value}</span>
        {label && <p className="text-xs text-gray-500">{label}</p>}
      </div>
    </div>
  );
};

// Main component
export default function PersonContactInfo({
  phone = "+91 98765 43210",
  email = "johndoe@example.com",
  addressLine1 = "123 Main Street, Anna Nagar",
  addressLine2 = "Chennai, Tamil Nadu - 600040",
  aquaButtonStyle = "",
  aquaGlossEffect = "",
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
        <PhoneIcon size={16} className="text-blue-600 mr-2" />
        <h3
          className="font-medium text-gray-800"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
        >
          Contact Information
        </h3>
      </div>

      {/* Card content */}
      <div className="p-4 space-y-4">
        <ContactItem
          icon={PhoneIcon}
          value={phone}
          label="Primary"
          aquaButtonStyle={aquaButtonStyle}
          aquaGlossEffect={aquaGlossEffect}
        />
        <ContactItem
          icon={MailIcon}
          value={email}
          label="Email"
          aquaButtonStyle={aquaButtonStyle}
          aquaGlossEffect={aquaGlossEffect}
        />
        <ContactItem
          icon={MapPinIcon}
          value={addressLine1}
          label={addressLine2}
          aquaButtonStyle={aquaButtonStyle}
          aquaGlossEffect={aquaGlossEffect}
        />
      </div>
    </div>
  );
}
