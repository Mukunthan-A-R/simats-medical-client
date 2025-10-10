import React, { useState } from "react";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  RefreshCwIcon,
} from "lucide-react";
import { formatDate } from "../../utils/constants";
import PatientAdmissionHistoryDetails from "./PatientAdmissionHistoryDetails";

const PatientAdmissionHistoryCard = ({ admission }) => {
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [openAdmissionHistory, setOpenAdmissionHistory] = useState(false);

  return (
    <div>
      <div
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setOpenAdmissionHistory(!openAdmissionHistory)}
        style={{
          backgroundImage:
            selectedAdmission === admission.id
              ? "linear-gradient(to bottom, rgba(235,245,255,0.9), rgba(225,235,245,0.8))"
              : "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
          borderTop:
            selectedAdmission === admission.id
              ? "1px solid rgba(0,0,0,0.05)"
              : "none",
          borderBottom:
            selectedAdmission === admission.id
              ? "1px solid rgba(0,0,0,0.05)"
              : "none",
        }}
      >
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
            style={{
              background:
                admission.dischargeStatus === "Active"
                  ? "linear-gradient(to bottom, #4cd964, #2ac845)"
                  : admission.dischargeStatus === "Completed"
                  ? "linear-gradient(to bottom, #4d90fe, #0066cc)"
                  : "linear-gradient(to bottom, #ff9500, #ff5e3a)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            {admission.dischargeStatus === "Active" ? (
              <ClockIcon size={16} className="text-white" />
            ) : admission.dischargeStatus === "Completed" ? (
              <CheckCircleIcon size={16} className="text-white" />
            ) : (
              <RefreshCwIcon size={16} className="text-white" />
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                {formatDate(admission.admissionDate)}
              </span>
            </div>
            <p className="font-medium text-gray-800 mt-0.5">
              {`${admission.wardNumber}, ${admission.bedNumber}`}
            </p>
            <p className="text-sm text-gray-600 mt-0.5">
              {admission.admittedUnder} • {admission.department}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <ChevronDownIcon
            size={20}
            className={`text-blue-600 transition-transform duration-300 ${
              selectedAdmission === admission.id ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {openAdmissionHistory && (
        <PatientAdmissionHistoryDetails admission={admission} />
      )}
    </div>
  );
};

export default PatientAdmissionHistoryCard;
