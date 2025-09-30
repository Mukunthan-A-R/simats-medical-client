import { ChevronRightIcon, ClipboardListIcon } from "lucide-react";
import React from "react";

const ApprovalDashboardButton = ({
  as: Tag = "ClipboardListIcon",
  caseRecords = 8,
  title,
  onNavigate,
}) => {
  // Aqua button style classes
  const aquaButtonStyle =
    "relative overflow-hidden text-white font-medium transition-all active:translate-y-0.5 active:shadow-inner";
  const aquaGlossEffect =
    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50";

  return (
    <div
      className="overflow-hidden cursor-pointer mt-3"
      onClick={() => onNavigate("faculty-notifications/case-records")}
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.1)",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
      }}
    >
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center min-w-0 flex-1">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
              border: "1px solid rgba(0,0,0,0.3)",
            }}
          >
            <Tag size={18} className="text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 truncate">
              {title}
            </p>
            <div className="flex items-center">
              <span className="text-xs text-gray-600 truncate">
                {caseRecords} pending approval requests
              </span>
              <div
                className="ml-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium text-white"
                style={{
                  background: "linear-gradient(to bottom, #ff3b30, #dc2626)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                  fontSize: "10px",
                }}
              >
                {caseRecords}
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full"
          style={{
            background: "rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <ChevronRightIcon size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ApprovalDashboardButton;
