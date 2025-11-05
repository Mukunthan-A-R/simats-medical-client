import React, { useState } from "react";
import MedicationFrequencyButton from "./MedicationFrequencyButton";
import { aquaButtonStyle, aquaGlossEffect } from "../../../../utils/constants";

const NewMedicationForm = () => {
  const [newMedication, setNewMedication] = useState({
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    instructions: "",
  });

  const handleAddMedication = () => {
    console.log("New Prescription:", newMedication);

    // Optional: clear form after logging
    setNewMedication({
      name: "",
      dosage: "",
      frequency: "",
      startDate: "",
      endDate: "",
      instructions: "",
    });
  };

  return (
    <div className="p-4 bg-blue-50 border-b border-blue-100 animate-slideDown rounded-lg">
      <h4 className="text-sm font-medium text-blue-800 mb-3">
        Add New Prescription
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Medication Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Medication Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Lisinopril"
            value={newMedication.name}
            onChange={(e) =>
              setNewMedication({ ...newMedication, name: e.target.value })
            }
            className="bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Dosage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dosage <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 10mg"
            value={newMedication.dosage}
            onChange={(e) =>
              setNewMedication({ ...newMedication, dosage: e.target.value })
            }
            className="bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            value={newMedication.startDate}
            onChange={(e) =>
              setNewMedication({ ...newMedication, startDate: e.target.value })
            }
            className="bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={newMedication.endDate}
            onChange={(e) =>
              setNewMedication({ ...newMedication, endDate: e.target.value })
            }
            className="bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Frequency */}
        <div className="md:col-span-2">
          <MedicationFrequencyButton></MedicationFrequencyButton>
        </div>

        {/* Medication Timing */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Medication Timing <span className="text-red-500">*</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="mealTiming"
                value="Before Meal"
                className="text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="font-medium">Before Meal</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="mealTiming"
                value="After Meal"
                className="text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="font-medium">After Meal</span>
            </label>
          </div>
        </div>

        {/* Instructions */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instructions
          </label>
          <textarea
            rows={3}
            placeholder="Special instructions for taking this medication"
            value={newMedication.instructions}
            onChange={(e) =>
              setNewMedication({
                ...newMedication,
                instructions: e.target.value,
              })
            }
            className="bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end">
        <button
          disabled={
            !newMedication.name ||
            !newMedication.dosage ||
            !newMedication.frequency
          }
          onClick={handleAddMedication}
          className={`px-4 py-2 rounded-md text-sm font-medium text-white ${aquaButtonStyle} ${aquaGlossEffect} ${
            !newMedication.name ||
            !newMedication.dosage ||
            !newMedication.frequency
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          Add Prescription
        </button>
      </div>
    </div>
  );
};

export default NewMedicationForm;
