import React from "react";

const frequencyOptions = {
  "1-0-0": "Once daily",
  "1-0-1": "Twice daily",
  "1-1-1": "Three times daily",
  "1-1-1-1": "Four times daily",
  q4h: "Every 4 hours",
  q6h: "Every 6 hours",
  q8h: "Every 8 hours",
  PRN: "As needed",
};

export default function MedicationFrequencyButton({
  selectedFrequency,
  onFrequencyChange,
}) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Frequency <span className="text-red-500">*</span>
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2 md:mx-8">
        {Object.keys(frequencyOptions).map((notation) => (
          <label
            key={notation}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name="frequency"
              value={notation}
              checked={selectedFrequency === notation}
              onChange={(e) => onFrequencyChange(e.target.value)}
              className="text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="font-medium">{notation}</span>
          </label>
        ))}
      </div>

      {selectedFrequency && (
        <p className="mt-3 text-sm text-gray-700">
          Selected frequency:{" "}
          <strong>
            {selectedFrequency} ({frequencyOptions[selectedFrequency]})
          </strong>
        </p>
      )}
    </div>
  );
}
