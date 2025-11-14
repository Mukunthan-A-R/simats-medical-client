import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createPrimaryVitals } from "../../services/primaryVitals";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

const NewPrimaryVitalsForm = ({ onClose, assignmentId }) => {
  const [vitals, setVitals] = useState({
    blood_pressure_systolic: "",
    blood_pressure_diastolic: "",
    heart_rate: "",
    oxygen_saturation: "",
    temperature: "",
    assignment_id: assignmentId,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPrimaryVitals,
    onSuccess: () => {
      toast.success("Primary vitals added successfully");
      queryClient.invalidateQueries(["primaryVitals", assignmentId]);
      onClose?.();
    },
    onError: (err) => {
      toast.error("Failed to add vitals");
      console.error(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      assignment_id: Number(assignmentId),
      ...vitals,
    };

    mutation.mutate(payload);

    // Reset form
    setVitals({
      blood_pressure_systolic: "",
      blood_pressure_diastolic: "",
      heart_rate: "",
      oxygen_saturation: "",
      temperature: "",
    });
  };

  const isSubmitDisabled =
    !vitals.blood_pressure_systolic ||
    !vitals.blood_pressure_diastolic ||
    !vitals.heart_rate ||
    !vitals.oxygen_saturation ||
    !vitals.temperature ||
    mutation.isLoading;

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
      <h4 className="text-lg font-medium text-gray-700 mb-4">
        Add Primary Vitals
      </h4>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Blood Pressure */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Systolic <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={vitals.blood_pressure_systolic}
              onChange={(e) =>
                setVitals({
                  ...vitals,
                  blood_pressure_systolic: e.target.value,
                })
              }
              placeholder="120"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diastolic <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={vitals.blood_pressure_diastolic}
              onChange={(e) =>
                setVitals({
                  ...vitals,
                  blood_pressure_diastolic: e.target.value,
                })
              }
              placeholder="80"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Row 2: Heart Rate & Oxygen */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Heart Rate <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={vitals.heart_rate}
              onChange={(e) =>
                setVitals({ ...vitals, heart_rate: e.target.value })
              }
              placeholder="75"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Oxygen Saturation (%) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              step="0.1"
              value={vitals.oxygen_saturation}
              onChange={(e) =>
                setVitals({ ...vitals, oxygen_saturation: e.target.value })
              }
              placeholder="98.5"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Row 3: Temperature */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Temperature (°C) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              step="0.1"
              value={vitals.temperature}
              onChange={(e) =>
                setVitals({ ...vitals, temperature: e.target.value })
              }
              placeholder="36.7"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
            />
          </div>
          <div /> {/* Empty second column for alignment */}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitDisabled}
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
            {mutation.isLoading ? "Submitting..." : "Add Vitals"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPrimaryVitalsForm;
