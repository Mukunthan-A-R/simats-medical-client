import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import FormBuilder from "./FormBuilder";
import ProcedureSelect from "../../../utils/dropDown/ProcedureSelect";
import { createProcedureForm } from "../../../services/procedureFormService";
import DepartmentSelect from "../../../utils/dropDown/DepartmentSelect";

const AdminProcedureFormPage = () => {
  const { deptId: paramDeptId } = useParams();

  const [selectedDepartment, setSelectedDepartment] = useState(
    paramDeptId ? Number(paramDeptId) : null
  );

  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [procedureId, setProcedureId] = useState(null);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const queryClient = useQueryClient();

  // --- MUTATION ---
  const mutation = useMutation({
    mutationFn: (mappedData) => createProcedureForm(mappedData),
    onSuccess: (data) => {
      toast.success(data?.message || "Form created successfully");
      queryClient.invalidateQueries(["procedureForms"]);
      setFormTitle("");
      setFormDescription("");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.err || "Failed to create form");
    },
  });

  // Reset procedure + form when department changes
  useEffect(() => {
    setSelectedProcedure("");
    setProcedureId(null);
  }, [selectedDepartment]);

  const handleProcedureChange = (procedure) => {
    setSelectedProcedure(procedure?.label || "");
    setProcedureId(procedure?.value || null);
  };

  // SUBMIT
  const handleSubmitFormStructure = (formStructure) => {
    if (!formTitle || !procedureId || !formStructure.length) {
      toast.error("Please fill all required fields.");
      return;
    }

    const mappedData = {
      procedure_id: Number(procedureId),
      name: formTitle,
      description: formDescription || "",
      fields: formStructure.map((f, idx) => ({
        label: f.label,
        field_name: f.label.toLowerCase().replace(/\s+/g, "_"),
        field_type: f.type,
        is_required: true,
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

        {/* ✅ Dynamic Department Select */}
        <DepartmentSelect
          title="Department *"
          onChange={(dept) => setSelectedDepartment(dept?.value || null)}
        />

        {/* Procedure Select */}
        {selectedDepartment && (
          <ProcedureSelect
            deptId={selectedDepartment}
            onChange={handleProcedureChange}
          />
        )}
      </div>

      {/* Form Details & Builder */}
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
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Form Description</label>
              <textarea
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h2 className="text-lg font-medium mb-4">
              Form Builder — Procedure: {selectedProcedure}
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
