import {
  ArrowRightIcon,
  ChevronDownIcon,
  RefreshCwIcon,
  UsersIcon,
} from "lucide-react";
import React, { useState } from "react";
import {
  additionalPatients,
  assignedPatients,
} from "./StudentDashboardSliderWindow";

const StudentMyPatientTab = () => {
  const [showAllPatients, setShowAllPatients] = useState(false);

  return (
    <div className="overflow-hidden mb-6 rounded-lg shadow-sm bg-white animate-fadeIn">
      <div className="px-5 py-4  flex items-center justify-between bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="flex items-center">
          <UsersIcon size={18} className="text-blue-600 mr-2.5" />
          <h3 className="font-medium text-gray-800 text-base">
            Patients Assigned to Me
          </h3>
        </div>
        <button
          //   onClick={handleChangeClinic}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-gradient-to-b from-gray-100 to-gray-200 text-blue-600 flex items-center border border-gray-300 shadow-inner"
        >
          <RefreshCwIcon size={12} className="mr-1.5" /> Refresh List
        </button>
      </div>
      <div className="divide-y divide-gray-100">
        {[
          ...assignedPatients,
          ...(showAllPatients ? additionalPatients : []),
        ].map((patient) => (
          <div
            key={patient.id}
            className="p-4 hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-between"
            onClick={() => onNavigate(`patient-case-record/${patient.id}`)}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 flex items-center justify-center mr-3 shadow-inner border border-gray-300">
                <UsersIcon size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {patient.name}
                </p>
                <p className="text-xs text-gray-600">
                  {patient.age} years • {patient.diagnosis}
                </p>
              </div>
            </div>
            <ArrowRightIcon size={14} className="text-blue-600" />
          </div>
        ))}
      </div>
      <div className="px-5 py-3  flex justify-center bg-gradient-to-b from-gray-100 to-gray-200">
        <button
          onClick={() => setShowAllPatients(!showAllPatients)}
          className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-700 text-white flex items-center shadow-inner border border-gray-300"
        >
          <span>{showAllPatients ? "Show Less" : "View All Patients"}</span>
          <ChevronDownIcon
            size={16}
            className={`ml-1.5 transition-transform duration-300 ${
              showAllPatients ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default StudentMyPatientTab;
