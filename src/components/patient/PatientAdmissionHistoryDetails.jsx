import React, { useState } from "react";
import {
  aquaButtonStyle,
  aquaGlossEffect,
  formatDate,
} from "../../utils/constants";
import {
  BedIcon,
  CalendarIcon,
  FileTextIcon,
  HospitalIcon,
  UserIcon,
} from "lucide-react";
import PatientDischargeSummary from "./PatientDischargeSummary";

const PatientAdmissionHistoryDetails = ({ admission }) => {
  const [showDischargeSummary, setShowDischargeSummary] = useState(false);

  return (
    <div
      className="p-5 border-t border-gray-100 animate-slideDown"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(240,245,250,0.8), rgba(230,235,240,0.7))",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
      }}
    >
      <div
        className="rounded-xl p-5"
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        {/* Top Info Grid */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          {/* Admission Date */}
          <div>
            <p className="text-xs text-gray-500 mb-1.5">Admission Date</p>
            <div className="text-sm font-medium flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <CalendarIcon size={12} className="text-white" />
              </div>
              {formatDate(admission.admissionDate)}
            </div>
          </div>

          {/* Discharge Date */}
          <div>
            <p className="text-xs text-gray-500 mb-1.5">Discharge Date</p>
            <div className="text-sm font-medium flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <CalendarIcon size={12} className="text-white" />
              </div>
              {admission.dischargeDate
                ? formatDate(admission.dischargeDate)
                : "Not discharged"}
            </div>
          </div>

          {/* Ward & Bed */}
          <div>
            <p className="text-xs text-gray-500 mb-1.5">Ward & Bed</p>
            <div className="text-sm font-medium flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                {admission.department?.includes("Rehabilitation") ? (
                  <HospitalIcon size={12} className="text-white" />
                ) : (
                  <BedIcon size={12} className="text-white" />
                )}
              </div>
              {`${admission.wardNumber}, ${admission.bedNumber}`}
            </div>
          </div>

          {/* Admitted Under */}
          <div>
            <p className="text-xs text-gray-500 mb-1.5">Admitted Under</p>
            <div className="text-sm font-medium flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <UserIcon size={12} className="text-white" />
              </div>
              {admission.admittedUnder}
            </div>
          </div>
        </div>

        {/* Reason for Admission */}
        <div
          className="mb-5 p-4 rounded-lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <p className="text-xs text-gray-500 mb-1.5">Reason for Admission</p>
          <p className="text-sm text-gray-700">{admission.reason}</p>
        </div>

        {/* Diagnosis */}
        <div
          className="p-4 rounded-lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <p className="text-xs text-gray-500 mb-1.5">Diagnosis</p>
          <p className="text-sm font-medium text-gray-800">
            {admission.diagnosis}
          </p>
        </div>
        {/* Discharge summary button */}
        {admission.hasDischargeSummary && (
          <div className="flex justify-end mt-4">
            <button
              className={`px-4 py-2 rounded-md text-white text-sm font-medium ${aquaButtonStyle} ${aquaGlossEffect}`}
              style={{
                background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
              onClick={(e) => {
                console.log("ronaldo");
                setShowDischargeSummary(!showDischargeSummary);

                //   e.stopPropagation();
                //   viewDischargeSummary(admission);
              }}
            >
              <FileTextIcon size={16} className="mr-2 inline-block" />
              View Discharge Summary
            </button>
          </div>
        )}
      </div>
      {showDischargeSummary && (
        <PatientDischargeSummary
          admission={admission}
          closeDischargeSummary={() =>
            setShowDischargeSummary(!showDischargeSummary)
          }
        />
      )}
    </div>
  );
};

export default PatientAdmissionHistoryDetails;
