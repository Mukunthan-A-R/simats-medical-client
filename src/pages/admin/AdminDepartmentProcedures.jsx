import React, { useState } from "react";
import PageHeader from "../../components/header/PageHeader";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DepartmentSelect from "../../utils/dropDown/DepartmentSelect";
import { createProcedure } from "../../services/createProcedureService";

const AdminDepartmentProcedures = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [procedureName, setProcedureName] = useState("");
  const [procedureDescription, setProcedureDescription] = useState("");

  const queryClient = useQueryClient();

  // 🔹 useMutation
  const mutation = useMutation({
    mutationFn: (payload) => createProcedure(payload),
    onSuccess: (data) => {
      toast.success(
        `Procedure "${procedureName}" created under ${selectedDepartment.label}`
      );

      // Reset form fields
      setProcedureName("");
      setProcedureDescription("");

      // Optional: invalidate queries if you have a list
      queryClient.invalidateQueries(["procedures", selectedDepartment?.value]);
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to create procedure"
      );
    },
  });

  const handleCreateProcedure = () => {
    if (!selectedDepartment) return toast.error("Select a Department first");
    if (!procedureName.trim())
      return toast.error("Please enter procedure name");

    const payload = {
      dept_id: selectedDepartment.value,
      name: procedureName.trim(),
      description: procedureDescription.trim() || null,
    };

    console.log("Payload to backend:", payload);

    // 🔹 Trigger mutation
    mutation.mutate(payload);
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      <PageHeader title="Admin Department Procedures" />

      {/* Department Select */}
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

          {/* Procedure Name */}
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

          {/* Procedure Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={procedureDescription}
              onChange={(e) => setProcedureDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter procedure description (optional)"
              rows={4}
            />
          </div>

          <button
            onClick={handleCreateProcedure}
            disabled={mutation.isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {mutation.isLoading ? "Creating..." : "Create Procedure"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminDepartmentProcedures;
