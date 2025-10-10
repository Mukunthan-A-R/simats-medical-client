import { BedIcon, HospitalIcon } from "lucide-react";
import React from "react";

const CurrentPatientAdmissionDetails = ({ selectedDischargeSummary }) => {
  return (
    <div
      className="mx-6 bg-white p-5 rounded-lg mb-6 relative overflow-hidden"
      style={{
        border: "1px solid rgba(0,0,0,0.15)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-8 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(240,245,250,0.8), rgba(240,245,250,0))",
          borderTopLeftRadius: "7px",
          borderTopRightRadius: "7px",
        }}
      />
      <h4
        className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200 flex items-center relative"
        style={{
          textShadow: "none",
        }}
      >
        {selectedDischargeSummary.department &&
        selectedDischargeSummary.department.includes("Rehabilitation") ? (
          <HospitalIcon size={16} className="mr-2 text-purple-600" />
        ) : (
          <BedIcon size={16} className="mr-2 text-blue-600" />
        )}
        Admission Details
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-sm mb-2">
            <span className="font-medium">Ward & Bed:</span>{" "}
            {`${selectedDischargeSummary.wardNumber}, ${selectedDischargeSummary.bedNumber}`}
          </p>
          <p className="text-sm mb-2">
            <span className="font-medium">Department:</span>{" "}
            {selectedDischargeSummary.department}
          </p>
          <p className="text-sm">
            <span className="font-medium">Admitted Under:</span>{" "}
            {selectedDischargeSummary.admittedUnder}
          </p>
        </div>
        <div>
          <p className="text-sm mb-2">
            <span className="font-medium">Admission Type:</span>{" "}
            {selectedDischargeSummary.department &&
            selectedDischargeSummary.department.includes("Rehabilitation")
              ? "Rehabilitation"
              : "Inpatient"}
          </p>
          <p className="text-sm mb-2">
            <span className="font-medium">Length of Stay:</span>{" "}
            {selectedDischargeSummary.dischargeDate
              ? Math.ceil(
                  (new Date(selectedDischargeSummary.dischargeDate).getTime() -
                    new Date(
                      selectedDischargeSummary.admissionDate
                    ).getTime()) /
                    (1000 * 60 * 60 * 24)
                )
              : "N/A"}{" "}
            days
          </p>
          <p className="text-sm">
            <span className="font-medium">Discharge Status:</span>{" "}
            {selectedDischargeSummary.dischargeStatus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPatientAdmissionDetails;
