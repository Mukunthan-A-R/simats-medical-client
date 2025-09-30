import React, { useState } from "react";
import {
  AlertTriangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";

export default function PatientCollapsiblePanel({
  title,
  defaultOpen = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-red-100 pb-2">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-start px-4 pt-2 transition"
      >
        <div className="flex flex-row justify-center items-center text-red-500 gap-2">
          <AlertTriangleIcon size={20} />
          {!isOpen && (
            <span className="font-medium text-gray-900">{title}</span>
          )}
          {isOpen && <span className="font-medium text-gray-900">Alerts</span>}
        </div>
        <span className="ml-2">
          {isOpen ? (
            <ChevronUpIcon size={20} className=" text-gray-500" />
          ) : (
            <ChevronDownIcon size={20} className=" text-gray-500" />
          )}
        </span>
      </button>

      {/* Content */}
      <div
        className={`px-4 pt-1  text-gray-700 transition-all duration-300 ${
          isOpen
            ? "max-h-[2000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
