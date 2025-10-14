import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const FacultyPatientsData = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center flex-wrap">
          <button
            className="mr-2 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={() => navigate(-1)}
            style={{
              background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            <ChevronLeftIcon size={18} className="text-blue-700" />
          </button>
          <h1 className="text-base sm:text-xl font-semibold text-blue-900 mr-2">
            Patient Medication Details
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FacultyPatientsData;
