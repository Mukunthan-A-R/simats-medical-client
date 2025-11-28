import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProcedureCaseRecord } from "../../../services/procedureCaseRecordService";
import DoctorSelect from "../patients/DoctorSelect";

const DynamicForm = ({ form, assignmentId, studentId, patientId }) => {
  const [formData, setFormData] = useState(
    form.fields.reduce((acc, field) => {
      acc[field.field_name] = field.field_type === "file" ? [] : "";
      return acc;
    }, {})
  );

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => createProcedureCaseRecord(data),
    onSuccess: () => {
      alert("Procedure Case Record created successfully!");
      queryClient.invalidateQueries(["procedureCaseRecords", assignmentId]);
      setFormData(
        form.fields.reduce((acc, field) => {
          acc[field.field_name] = field.field_type === "file" ? [] : "";
          return acc;
        }, {})
      );
      setSelectedDoctor(null);
    },
    onError: (err) => {
      console.error("Error creating procedure case record:", err);
      alert("Failed to create procedure case record.");
    },
  });

  const handleChange = (e, field) => {
    if (field.field_type === "file") {
      setFormData((prev) => ({
        ...prev,
        [field.field_name]: Array.from(e.target.files),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field.field_name]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDoctor) {
      alert("Please select a doctor before submitting.");
      return;
    }

    // Prepare FormData
    const submissionData = new FormData();
    submissionData.append("procedure_id", form.procedure_id);
    submissionData.append("form_id", form.form_id);
    submissionData.append("doctor_id", selectedDoctor);
    submissionData.append("student_id", studentId);
    submissionData.append("patient_id", patientId);
    submissionData.append("assignment_id", assignmentId);
    submissionData.append("approval", "requested");

    // Keep all non-file fields as form_data JSON
    const nonFileFields = {};
    Object.keys(formData).forEach((key) => {
      if (!Array.isArray(formData[key])) {
        nonFileFields[key] = formData[key];
      }
    });
    submissionData.append("form_data", JSON.stringify(nonFileFields));

    // Append file fields separately
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file) => submissionData.append(key, file));
      }
    });

    mutation.mutate(submissionData);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-4 mx-auto">
      <h2 className="text-xl font-semibold mb-2">{form.form_name}</h2>
      {form.form_description && (
        <p className="text-gray-600 text-sm mb-4">{form.form_description}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {form.fields.map((field) => {
          const {
            field_id,
            label,
            field_name,
            field_type,
            is_required,
            config,
          } = field;

          if (field_type === "select") {
            return (
              <div key={field_id}>
                <label className="block text-gray-700 font-medium mb-1">
                  {label}{" "}
                  {is_required && <span className="text-red-500">*</span>}
                </label>
                <select
                  value={formData[field_name]}
                  onChange={(e) => handleChange(e, field)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required={is_required}
                >
                  <option value="">Select...</option>
                  {config?.options?.map((opt) => (
                    <option key={opt.value || opt} value={opt.value || opt}>
                      {opt.label || opt}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          if (field_type === "textarea") {
            return (
              <div key={field_id}>
                <label className="block text-gray-700 font-medium mb-1">
                  {label}{" "}
                  {is_required && <span className="text-red-500">*</span>}
                </label>
                <textarea
                  value={formData[field_name]}
                  onChange={(e) => handleChange(e, field)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required={is_required}
                  rows={3}
                />
              </div>
            );
          }

          if (field_type === "file") {
            return (
              <div key={field_id}>
                <label className="block text-gray-700 font-medium mb-1">
                  {label}{" "}
                  {is_required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => handleChange(e, field)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required={is_required}
                />

                {/* List selected file names */}
                {formData[field_name] && formData[field_name].length > 0 && (
                  <ul className="mt-1 text-sm text-gray-700 list-disc list-inside">
                    {formData[field_name].map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          }

          return (
            <div key={field_id}>
              <label className="block text-gray-700 font-medium mb-1">
                {label} {is_required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field_type}
                value={formData[field_name]}
                onChange={(e) => handleChange(e, field)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required={is_required}
              />
            </div>
          );
        })}

        {/* Doctor Select */}
        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-1">
            Assign Doctor *
          </label>
          <DoctorSelect onChange={(data) => setSelectedDoctor(data?.value)} />
        </div>

        <button
          type="submit"
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
