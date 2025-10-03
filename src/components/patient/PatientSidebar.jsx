import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  UserIcon,
  BellIcon,
  LogOutIcon,
  XIcon,
} from "lucide-react";

export default function PatientSidebar({
  isOpen,
  onClose,
  onNavigate,
  notificationCount = 0,
}) {
  // Aqua button styles (from your theme)
  const aquaButtonStyle =
    "relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner";
  const aquaGlossEffect =
    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50";

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-white/20"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundColor: "#f0f4fa",
          borderRight: "1px solid rgba(0,0,0,0.2)",
          boxShadow: "2px 0 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{
            backgroundImage: "linear-gradient(to bottom, #d1dbed, #b8c6df)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
        >
          <h2 className="text-lg font-semibold text-blue-900">Menu</h2>
          <button
            onClick={onClose}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            <XIcon className="h-5 w-5 text-blue-700" />
          </button>
        </div>

        {/* Menu items */}
        <div className="p-4 space-y-3">
          {[
            { icon: HomeIcon, label: "Dashboard", path: "/patient/dashboard" },
            { icon: UserIcon, label: "Profile", path: "/patient/profile" },
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
                <span className="text-gray-800 font-medium">{item.label}</span>
              </button>
            );
          })}

          {/* Notifications */}
          <button
            onClick={() => onNavigate("/patient/notifications")}
            className={`w-full p-3 flex items-center rounded-lg ${aquaButtonStyle} ${aquaGlossEffect} relative`}
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
              <BellIcon size={16} className="text-white" />
            </div>
            <span className="text-gray-800 font-medium">Notifications</span>
            {notificationCount > 0 && (
              <span className="absolute top-1 right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </button>

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
            <span className="text-gray-800 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
