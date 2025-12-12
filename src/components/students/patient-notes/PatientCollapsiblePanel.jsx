import React, { useState } from "react";
import {
  AlertTriangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../../utils/constants";
import PatientAlertsForm from "./PatientAlertsForm";

export default function PatientCollapsiblePanel({
  title,
  defaultOpen = false,
  children,
  assignmentId,
  patient_id,
  userId,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-red-100 pb-2">
      {/* Header */}
      <div className="w-full flex justify-between items-center text-start px-4 pt-2 transition">
        <div className="flex items-center gap-2 text-red-500 w-full">
          <AlertTriangleIcon size={20} />
          <span className="font-medium text-sm text-gray-900">
            {!isOpen ? title : "Alerts"}
          </span>
        </div>

        <button
          className={`px-3 py-1.5 rounded-md text-xs font-medium ${aquaButtonStyle} ${aquaGlossEffect} flex items-center`}
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
            color: "white",
          }}
          onClick={() => setFormOpen(!formOpen)}
        >
          {formOpen ? (
            <>
              <XIcon size={12} className="mr-1.5" />
              Close
            </>
          ) : (
            <>
              <PlusIcon size={12} className="mr-1.5" />
              Add
            </>
          )}
        </button>

        {/* Chevron */}
        <button className="ml-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ChevronUpIcon size={20} className="text-gray-500" />
          ) : (
            <ChevronDownIcon size={20} className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Content */}
      <div
        className={`px-1 sm:px-4 pt-1 text-gray-700 transition-all duration-300 ${
          isOpen
            ? "max-h-[2000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
      {formOpen && (
        <PatientAlertsForm
          patientId={patient_id}
          userId={userId}
          assignmentId={assignmentId}
          onClose={() => setFormOpen(!formOpen)}
        />
      )}
    </div>
  );
}
