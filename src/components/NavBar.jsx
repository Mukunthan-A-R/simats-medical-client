import React from "react";
import {
  ArrowLeftIcon,
  BellIcon,
  HeartPulseIcon,
  MenuIcon,
} from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../utils/constants";

export function NavBar({
  onNavigate,
  notificationCount = 0,
  menuIconClick,
  backTo = "dashboard",
}) {
  const navigateToNotifications = () => {
    if (onNavigate) onNavigate("notifications");
  };

  return (
    <div
      className="px-4 py-4 flex items-center justify-between sticky top-0 z-20"
      style={{
        backgroundImage: "linear-gradient(to bottom, #d1dbed, #b8c6df)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.7)",
        borderBottom: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      <div className="flex items-center">
        <button
          onClick={menuIconClick}
          className={`mr-2 w-8 h-8 flex items-center justify-center rounded-full text-white ${aquaButtonStyle} ${aquaGlossEffect}`}
          title="Menu"
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            border: "1px solid rgba(0,0,0,0.3)",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          <MenuIcon size={16} className="text-white" />
        </button>

        <div className="flex items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            <HeartPulseIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1
              className="text-lg font-semibold text-blue-900 leading-tight"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
            >
              Saveetha Medical
            </h1>
            <p className="text-xs text-blue-800 opacity-80 -mt-0.5">
              College Hospital
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full mr-2 relative"
          onClick={navigateToNotifications}
          style={{
            background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            position: "relative",
          }}
        >
          <BellIcon className="h-5 w-5 text-blue-700" />
          {notificationCount > 0 && (
            <div
              style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#ff0000",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold",
                border: "2px solid white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                zIndex: 9999,
                animation: "notificationPulse 1.5s infinite",
              }}
            >
              {notificationCount > 9 ? "9+" : notificationCount}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
