import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { fetchDepartments } from "../../services/departmentsService";

const DepartmentSelect = ({ onChange, title = "Department *" }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Fetch departments using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["departments"],
    queryFn: fetchDepartments,
  });

  // Map the data for React Select
  const options =
    data?.map((dept) => ({
      value: dept.dept_id,
      label: dept.name,
    })) || [];

  // Trigger callback when selection changes
  useEffect(() => {
    if (onChange) onChange(selectedDepartment);
  }, [selectedDepartment, onChange]);

  if (isLoading) return <div>Loading departments...</div>;
  if (error) return <div>Error loading departments</div>;

  return (
    <div>
      <label className="block font-medium mb-1">{title}</label>
      <Select
        options={options}
        value={selectedDepartment}
        onChange={setSelectedDepartment}
        placeholder="Select Department"
        isClearable
      />
    </div>
  );
};

export default DepartmentSelect;
