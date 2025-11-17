import React, { useState } from "react";
import SecondaryVitalSelect from "../dropDown/SecondaryVitalSelect";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSecondaryVital } from "../../services/secondaryVitals";

const NewSecondaryVitalsForm = ({ assignmentId }) => {
  const [selectedVitalId, setSelectedVitalId] = useState(null);
  const [value, setValue] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createSecondaryVital,
    onSuccess: () => {
      toast.success("Secondary vital recorded!");
      queryClient.invalidateQueries(["secondaryVitals"]);
      setSelectedVitalId(null);
      setValue("");
    },
    onError: () => {
      toast.error("Failed to save vital. Try again.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedVitalId) {
      toast.error("Please select a vital type.");
      return;
    }

    if (!value) {
      toast.error("Please enter a value.");
      return;
    }

    const payload = {
      assignment_id: assignmentId,
      type_id: selectedVitalId,
      value,
    };

    mutation.mutate(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-sm space-y-4"
    >
      <SecondaryVitalSelect onChange={(id) => setSelectedVitalId(id)} />

      <div>
        <label className="block font-medium mb-1">Data *</label>
        <input
          type="text"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={mutation.isLoading}
        className="px-4 py-2 rounded-md text-sm font-medium text-white"
        style={{
          background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
          border: "1px solid rgba(0,0,0,0.2)",
          boxShadow:
            "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      >
        {mutation.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default NewSecondaryVitalsForm;
