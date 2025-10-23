import { HomeIcon, UserIcon, LogOutIcon } from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

export default function FacultySidebar({
  isOpen,
  onClose,
  onNavigate,
  notificationCount = 0,
}) {
  const facultyId = 123;

  return (
    <>
      {/* Sidebar */}
      <div
        className={`max-h-full w-64 z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundColor: "#f0f4fa",
          borderRight: "1px solid rgba(0,0,0,0.2)",
          boxShadow: "2px 0 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Menu items */}
        <div className="p-4 space-y-3">
          {[
            {
              icon: HomeIcon,
              label: "Dashboard",
              path: `/faculty/dashboard/${facultyId}`,
            },
            {
              icon: UserIcon,
              label: "Profile",
              path: `/faculty/profile/${facultyId}`,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => onNavigate(item.path)}
                className={`w-full p-3 flex items-center rounded-lg ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
                  style={{
                    background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                    boxShadow:
                      "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
                    border: "1px solid rgba(0,0,0,0.2)",
                  }}
                >
                  <Icon size={16} className="text-white" />
                </div>
                <span className="text-gray-800 font-medium text-base">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Logout */}
          <button
            onClick={() => onNavigate("/")}
            className={`w-full p-3 flex items-center rounded-lg ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
              style={{
                background: "linear-gradient(to bottom, #ff5a5a, #cc0000)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              <LogOutIcon size={16} className="text-white" />
            </div>
            <span className="text-gray-800 font-medium text-base">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
