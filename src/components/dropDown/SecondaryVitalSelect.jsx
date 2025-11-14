import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { fetchSecondaryVitalsDropdown } from "../../services/secondaryVitalsDropdown";

const SecondaryVitalSelect = ({ onChange, title = "Select Vital *" }) => {
  const [selectedVital, setSelectedVital] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["secondaryVitals"],
    queryFn: fetchSecondaryVitalsDropdown,
  });

  const options =
    data?.data?.map((vital) => ({
      value: vital.id,
      label: vital.name.replace(/_/g, " ").toUpperCase(), // Make label readable
    })) || [];

  useEffect(() => {
    if (onChange) {
      onChange(selectedVital);
    }
  }, [selectedVital, onChange]);

  if (isLoading) return <div>Loading vitals...</div>;
  if (error) return <div>Error loading vitals</div>;

  return (
    <div>
      <label className="block font-medium mb-1">{title}</label>
      <Select
        options={options}
        value={selectedVital}
        onChange={setSelectedVital}
        placeholder="Select Vital"
        isClearable
      />
      {selectedVital && (
        <div className="mt-2 text-gray-700 font-medium">
          Selected: {selectedVital.label} (ID: {selectedVital.value})
        </div>
      )}
    </div>
  );
};

export default SecondaryVitalSelect;
