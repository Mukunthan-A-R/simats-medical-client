import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import FormBuilder from "./FormBuilder";
import ProcedureSelect from "../../../utils/dropDown/ProcedureSelect";
import { departmentsByName } from "../../students/patients/CreateCaseRecord";
import { createProcedureForm } from "../../../services/procedureFormService";

const AdminProcedureFormPage = () => {
  const { deptId: paramDeptId } = useParams();

  // --- STATE ---
  const [selectedDepartment, setSelectedDepartment] = useState(
    paramDeptId
      ? Object.keys(departmentsByName).find(
          (key) => departmentsByName[key] === Number(paramDeptId)
        )
      : ""
  );
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [procedureId, setProcedureId] = useState(null);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const queryClient = useQueryClient();

  // --- TANSTACK MUTATION ---
  const mutation = useMutation({
    mutationFn: (mappedData) => createProcedureForm(mappedData),
    onSuccess: (data) => {
      toast.success(data?.message || "Form created successfully");
      queryClient.invalidateQueries(["procedureForms"]);

      // Reset form after success
      setFormTitle("");
      setFormDescription("");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.err || "Failed to create form");
    },
  });

  // --- EFFECTS ---
  useEffect(() => {
    setSelectedProcedure("");
    setProcedureId(null);
  }, [selectedDepartment]);

  const handleProcedureChange = (procedure) => {
    setSelectedProcedure(procedure?.label || "");
    setProcedureId(procedure?.value || null);
  };

  // --- HANDLE SUBMIT ---
  const handleSubmitFormStructure = (formStructure) => {
    if (!formTitle || !procedureId || !formStructure.length) {
      toast.error(
        "Please fill all required fields and add at least one form field."
      );
      return;
    }

    // Map frontend fields to backend schema
    const mappedData = {
      procedure_id: Number(procedureId),
      name: formTitle,
      description: formDescription || "",
      fields: formStructure.map((f, idx) => ({
        label: f.label,
        field_name: f.label.toLowerCase().replace(/\s+/g, "_"),
        field_type: f.type,
        is_required: true, // default to required
        order_index: idx + 1,
        config: f.options?.length ? { options: f.options } : {},
      })),
    };

    mutation.mutate(mappedData);
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      {/* Department & Procedure Selection */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 space-y-4">
        <h2 className="text-lg font-medium">Select Department & Procedure</h2>

        {/* Department Select */}
        <div>
          <label className="block font-medium mb-1">Department *</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Department</option>
            {Object.keys(departmentsByName).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Procedure Select */}
        {selectedDepartment && (
          <div>
            <ProcedureSelect
              deptId={departmentsByName[selectedDepartment]}
              onChange={handleProcedureChange}
            />
          </div>
        )}
      </div>

      {/* Form Details */}
      {selectedProcedure && procedureId && (
        <>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 space-y-4">
            <h2 className="text-lg font-medium">Form Details</h2>

            <div>
              <label className="block font-medium mb-1">Form Title *</label>
              <input
                type="text"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter form title"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Form Description</label>
              <textarea
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter form description (optional)"
              />
            </div>
          </div>

          {/* Form Builder */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h2 className="text-lg font-medium mb-4">
              {selectedDepartment} - {selectedProcedure} - Form Builder
            </h2>

            <FormBuilder
              procedureId={procedureId}
              onSubmitFormStructure={handleSubmitFormStructure}
              isSubmitting={mutation.isLoading}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminProcedureFormPage;
