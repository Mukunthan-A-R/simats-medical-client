import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import PatientVitalsData from "../../components/patient/PatientVitalsData";

const PatientVitals = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-4 h-screen flex flex-col">
      {/* Header */}
      <div className="flex flex-row items-center mb-4">
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
        <h2 className="text-xl text-blue-900 font-medium">Vitals Tracker</h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto rounded-xl">
        {/* Patient Info Card */}
        <div
          className="rounded-xl shadow-sm overflow-hidden my-4"
          style={{
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05), inset 0 -5px 10px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.1)",
            backgroundColor: "white",
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
          }}
        >
          <div className="p-4 flex items-center">
            <div
              className="h-12 w-12 rounded-full overflow-hidden mr-4"
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.8)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Patient"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2
                className="font-medium text-gray-800"
                style={{
                  textShadow: "0 1px 0 rgba(255,255,255,0.7)",
                }}
              >
                John Doe
              </h2>
              <p className="text-sm text-gray-500">Patient ID: SMC-2023-0042</p>
            </div>
          </div>
        </div>

        {/* Patient Vitals Data Section */}
        <PatientVitalsData />
      </div>
    </div>
  );
};

export default PatientVitals;
