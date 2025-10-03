import React, { cloneElement } from "react";
import {
  ClipboardListIcon,
  BedIcon,
  WalletIcon,
  PillIcon,
  FileTextIcon,
  HeartPulseIcon,
} from "lucide-react";

export default function PatientDashboardServices({
  onNavigate = () => {},
  showMedicationReminder = true,
}) {
  const menuGroups = [
    {
      title: "Patient Services",
      items: [
        {
          icon: <ClipboardListIcon size={18} />,
          title: "Health Records",
          action: () => onNavigate("records"),
          iconColor: "text-blue-500",
        },
        {
          icon: <BedIcon size={18} />,
          title: "Admission Records",
          action: () => onNavigate("admissions"),
          highlight: true,
          iconColor: "text-blue-500",
        },
        {
          icon: <WalletIcon size={18} />,
          title: "Hospital Wallet",
          action: () => onNavigate("hospital-wallet"),
          info: "₹350.75",
          iconColor: "text-blue-500",
        },
        {
          icon: <PillIcon size={18} />,
          title: "Pharmacy Wallet",
          action: () => onNavigate("pharmacy-wallet"),
          info: "₹125.50",
          iconColor: "text-blue-500",
        },
      ],
    },
    {
      title: "Medical Services",
      items: [
        {
          icon: <FileTextIcon size={18} />,
          title: "Investigation Reports",
          action: () => onNavigate("reports"),
          iconColor: "text-blue-500",
        },
        {
          icon: <PillIcon size={18} />,
          title: "Prescriptions",
          action: () => onNavigate("prescriptions"),
          iconColor: "text-blue-500",
        },
        {
          icon: <HeartPulseIcon size={18} />,
          title: "Vitals",
          action: () => onNavigate("vitals"),
          iconColor: "text-blue-500",
        },
      ],
    },
  ];

  return (
    <div className="p-4">
      {/* Dashboard Menu Groups */}
      {menuGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-5">
          <h3
            className="text-xs font-semibold mb-3 text-gray-500 uppercase tracking-wide"
            style={{
              textShadow: "0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {group.title}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {group.items.map((item, index) => (
              <button
                key={index}
                className="p-3 text-left flex flex-col"
                onClick={item.action}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(255,255,255,1), rgba(245,245,245,0.9))",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05), inset 0 -5px 10px rgba(0,0,0,0.03)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-center mb-1">
                  <div
                    className="w-7 h-7 rounded-full text-white flex items-center justify-center mr-2"
                    style={{
                      background:
                        "linear-gradient(to bottom, #4d90fe, #0066cc)",
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                    }}
                  >
                    {cloneElement(item.icon, {
                      size: 14,
                    })}
                  </div>
                  <span
                    className="text-sm font-medium text-gray-900 truncate"
                    style={{
                      textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
                {item.info && (
                  <span className="text-xs text-blue-600 font-medium ml-9 truncate">
                    {item.info}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
