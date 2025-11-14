import React, { useState } from "react";
import SecondaryVitalSelect from "../dropDown/SecondaryVitalSelect";
import toast from "react-hot-toast";

const NewSecondaryVitalsForm = ({ assignmentId }) => {
  const [selectedVitalId, setSelectedVitalId] = useState(null);
  const [value, setValue] = useState("");

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

    console.log("Submitting secondary vital:", payload);
    setSelectedVitalId(null);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-sm space-y-4"
    >
      <SecondaryVitalSelect
        onChange={(id) => {
          setSelectedVitalId(id);
        }}
      />

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
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default NewSecondaryVitalsForm;
