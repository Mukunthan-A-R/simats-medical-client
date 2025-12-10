import React, { useState } from "react";
import PageHeader from "../../components/header/PageHeader";
import { toast } from "react-hot-toast";
import DepartmentSelect from "../../utils/dropDown/DepartmentSelect";

const AdminDepartmentProcedures = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [procedureName, setProcedureName] = useState("");

  const handleCreateProcedure = () => {
    if (!selectedDepartment) return toast.error("Select a Department first");
    if (!procedureName.trim())
      return toast.error("Please enter procedure name");

    // 🔥 Log the values before submit
    console.log("Department Selected:", selectedDepartment);
    console.log("Department ID:", selectedDepartment.value);
    console.log("Department Name:", selectedDepartment.label);
    console.log("Procedure Name to Create:", procedureName);

    // 🟢 Backend payload example
    const payload = {
      dept_id: selectedDepartment.value,
      name: procedureName,
    };

    console.log("Payload to Backend:", payload);

    toast.success(
      `Procedure "${procedureName}" created under ${selectedDepartment.label}`
    );

    // Reset only procedure input
    setProcedureName("");

    // Later you will call API here:
    // createProcedure(payload)
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      <PageHeader title="Admin Department Procedures" />

      <div className="bg-white rounded-lg shadow p-4 sm:p-6 space-y-4 mb-6">
        <h2 className="text-lg font-medium">
          Create Procedure Under Department
        </h2>

        <DepartmentSelect
          title="Select Department *"
          onChange={(dept) => setSelectedDepartment(dept)}
        />
      </div>

      {selectedDepartment && (
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 space-y-4">
          <h2 className="text-lg font-medium">
            Department:{" "}
            <span className="font-semibold">{selectedDepartment.label}</span>
          </h2>

          <div>
            <label className="block font-medium mb-1">Procedure Name *</label>
            <input
              type="text"
              value={procedureName}
              onChange={(e) => setProcedureName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter new procedure name"
            />
          </div>

          <button
            onClick={handleCreateProcedure}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Create Procedure
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminDepartmentProcedures;
