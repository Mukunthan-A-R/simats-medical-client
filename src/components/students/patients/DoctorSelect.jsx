import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { fetchDoctorsForDropdown } from "../../../services/doctorDropDown";

const DoctorSelect = ({ onChange }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["doctors"],
    queryFn: fetchDoctorsForDropdown,
  });

  const options =
    data?.data?.map((doc) => ({
      value: doc.doctor_id,
      label: `${doc.doctor_name} - ${doc.dept_name || "No Dept"}`,
    })) || [];

  useEffect(() => {
    if (onChange) {
      onChange(selectedDoctor);
    }
  }, [selectedDoctor, onChange]);

  if (isLoading) return <div>Loading doctors...</div>;
  if (error) return <div>Error loading doctors</div>;

  return (
    <div>
      <label className="block font-medium mb-1">Faculty for Approval *</label>
      <Select
        options={options}
        value={selectedDoctor}
        onChange={setSelectedDoctor}
        placeholder="Select Approver"
        isClearable
      />
      {selectedDoctor && (
        <div className="mt-2 text-gray-700 font-medium">
          Selected: {selectedDoctor.label} (ID: {selectedDoctor.value})
        </div>
      )}
    </div>
  );
};

export default DoctorSelect;
