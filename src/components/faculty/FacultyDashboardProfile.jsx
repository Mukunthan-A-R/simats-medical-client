import { BookOpenIcon } from "lucide-react";
import React from "react";

const FacultyDashboardProfile = () => {
  return (
    <div className="px-3 py-4  w-full">
      {/* Faculty Profile Card */}
      <div
        className="overflow-hidden mb-4 cursor-pointer"
        onClick={() => onNavigate("faculty-profile")}
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05), inset 0 -5px 10px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div className="p-4 flex items-center">
          <div className="relative mr-3">
            <div
              className="h-12 w-12 rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(255,255,255,0.9)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBdLQG7I_PMLSCLV9rJGZ3CaHmKFyj9CA4A&s"
                alt="Faculty"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Faculty Badge */}
            <div
              className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                border: "2px solid white",
                boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
              }}
              title="Faculty Member"
            >
              <BookOpenIcon size={12} className="text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 truncate">
              Welcome, Dr. Sarah Johnson
            </h2>
            <p className="text-xs text-gray-500">
              ID: FAC-2023-0078 • Department: Cardiology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboardProfile;
