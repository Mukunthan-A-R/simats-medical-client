import React from "react";
import { UserCheckIcon, ShieldIcon, ChartBarIcon } from "lucide-react";

export default function AdminProfileCard({ userData, setMetricsTab }) {
  return (
    <div>
      {/* Admin Profile Card */}
      <div
        className="overflow-hidden mb-6 cursor-pointer transform transition-transform duration-200 hover:scale-[1.01]"
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow:
            "0 2px 5px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04), inset 0 -5px 10px rgba(0,0,0,0.03)",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div className="p-6 flex items-center">
          {/* Avatar */}
          <div className="relative mr-5">
            <div
              className="h-16 w-16 rounded-full overflow-hidden flex items-center justify-center text-white text-xl font-bold"
              style={{
                backgroundColor: "#4d90fe",
                border: "2px solid rgba(255,255,255,0.9)",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
              }}
            >
              {userData?.name?.charAt(0)}
            </div>

            {/* Admin Role Indicator */}
            <div
              className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                border: "2px solid white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
              title="Admin"
            >
              <ShieldIcon size={14} className="text-white" />
            </div>
          </div>

          {/* Admin Info */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-xl font-semibold text-gray-900 truncate"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
            >
              Welcome, {userData?.name}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              ID: {userData?.user_id}
            </p>
            <p className="text-sm text-gray-500 mt-0.5">{userData?.email}</p>
            <p className="text-sm text-gray-500 mt-0.5">{userData?.phone_no}</p>
            <p className="text-sm text-gray-500 mt-0.5">{userData?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
