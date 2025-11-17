import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { fetchProceduresForDropdown } from "../../services/procedureDropDown";

const ProcedureSelect = ({ deptId, onChange, title = "Procedure *" }) => {
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["procedures", deptId],
    queryFn: () => fetchProceduresForDropdown(deptId),
    enabled: !!deptId, // Only fetch when deptId is provided
  });

  const options =
    data?.data?.map((proc) => ({
      value: proc.procedure_id,
      label: proc.name,
      description: proc.description,
    })) || [];

  useEffect(() => {
    if (onChange) onChange(selectedProcedure);
  }, [selectedProcedure, onChange]);

  if (!deptId)
    return <div className="text-gray-500">Select a department first...</div>;
  if (isLoading) return <div>Loading procedures...</div>;
  if (error) return <div>Error loading procedures</div>;

  return (
    <div>
      <label className="block font-medium mb-1">{title}</label>
      <Select
        options={options}
        value={selectedProcedure}
        onChange={setSelectedProcedure}
        placeholder="Select Procedure"
        isClearable
      />
      {selectedProcedure && (
        <p className="mt-2 text-gray-600 text-sm">
          <span className="font-semibold">Description:</span>{" "}
          {selectedProcedure.description}
        </p>
      )}
    </div>
  );
};

export default ProcedureSelect;
