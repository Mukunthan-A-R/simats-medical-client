import React, { useState } from "react";
import MedicationFrequencyButton from "./MedicationFrequencyButton";
import { aquaButtonStyle, aquaGlossEffect } from "../../../../utils/constants";
import DoctorSelect from "../DoctorSelect";
import { createMedicationRequest } from "../../../../services/studentMedication";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewMedicationForm = ({ onToggle, assignmentId }) => {
  const [newMedication, setNewMedication] = useState({
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    timing: "",
    instructions: "",
  });

  const [selectedDoctor, setSelectedDoctor] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createMedicationRequest,
    onSuccess: (data) => {
      console.log("✅ Prescription created:", data);

      // Show toast
      toast.success("Prescription request sent successfully.");

      // Refetch student medications for this assignment
      queryClient.invalidateQueries(["studentMedications", assignmentId]);
    },
    onError: (error) => {
      console.error("❌ Failed to send prescription request:", error);
      toast.error("Failed to send prescription request.");
    },
  });

  const handleAddMedication = () => {
    if (isSubmitDisabled) return;

    const payload = {
      assignment_id: assignmentId,
      doctor_id: selectedDoctor,
      medication_name: newMedication.name,
      dosage: newMedication.dosage,
      start_date: newMedication.startDate,
      end_date: newMedication.endDate,
      frequency: newMedication.frequency,
      medication_timing: newMedication.timing,
      instructions: newMedication.instructions,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    console.log("Submitting payload:", payload);
    mutation.mutate(payload);

    // Reset form
    setNewMedication({
      name: "",
      dosage: "",
      frequency: "",
      startDate: "",
      endDate: "",
      timing: "",
      instructions: "",
    });
    setSelectedDoctor("");
    onToggle();
  };

  // Disable submit if required fields missing or mutation is loading
  const isSubmitDisabled =
    !newMedication.name ||
    !newMedication.dosage ||
    !newMedication.frequency ||
    !newMedication.timing ||
    !selectedDoctor ||
    mutation.isLoading;

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
            placeholder="e.g. Paracetamol"
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
            placeholder="e.g. 500mg"
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
            Start Date <span className="text-red-500">*</span>
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
            End Date <span className="text-red-500">*</span>
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
          <MedicationFrequencyButton
            selectedFrequency={newMedication.frequency}
            onFrequencyChange={(value) =>
              setNewMedication({ ...newMedication, frequency: value })
            }
          />
        </div>

        {/* Timing */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Medication Timing <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Before Meal", "After Meal"].map((timing) => (
              <label
                key={timing}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="mealTiming"
                  value={timing}
                  checked={newMedication.timing === timing}
                  onChange={(e) =>
                    setNewMedication({
                      ...newMedication,
                      timing: e.target.value,
                    })
                  }
                  className="text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="font-medium">{timing}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instructions
          </label>
          <textarea
            rows={3}
            placeholder="e.g. Take with water after meals"
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

        {/* Doctor Select */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Assigned Doctor <span className="text-red-500">*</span>
          </label>
          <DoctorSelect onChange={(data) => setSelectedDoctor(data?.value)} />
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          disabled={isSubmitDisabled}
          onClick={handleAddMedication}
          className={`px-4 py-2 rounded-md text-sm font-medium text-white ${aquaButtonStyle} ${aquaGlossEffect} ${
            isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{
            background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          {mutation.isLoading ? "Submitting..." : "Add Prescription"}
        </button>
      </div>
    </div>
  );
};

export default NewMedicationForm;
