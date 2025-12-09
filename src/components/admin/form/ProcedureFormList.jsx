import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFormsByProcedure } from "../../../services/procedureFormService";

const ProcedureFormList = ({ procedureId }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["procedureForms", procedureId],
    queryFn: () => getFormsByProcedure(procedureId),
    enabled: !!procedureId, // only run when procedureId exists
  });

  if (!procedureId) {
    return (
      <div className="text-gray-500 text-sm italic">
        Select a procedure to view its forms.
      </div>
    );
  }

  if (isLoading) {
    return <div className="text-blue-500 font-medium">Loading forms...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Failed to load forms.</div>;
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-gray-500 font-medium">
        No forms found for this procedure.
      </div>
    );
  }

  // Function to render actual field inputs
  const renderField = (field) => {
    const baseStyle =
      "border border-gray-300 rounded-full px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300";

    switch (field.field_type) {
      case "text":
        return (
          <input
            type="text"
            placeholder={field.label}
            required={field.is_required}
            className={baseStyle}
          />
        );
      case "number":
        return (
          <input
            type="number"
            placeholder={field.label}
            required={field.is_required}
            className={baseStyle}
          />
        );
      case "textarea":
        return (
          <textarea
            placeholder={field.label}
            required={field.is_required}
            className={baseStyle + " h-24 resize-none"}
          />
        );
      case "date":
        return (
          <input
            type="date"
            placeholder={field.label}
            required={field.is_required}
            className={baseStyle}
          />
        );
      case "select":
        return (
          <select required={field.is_required} className={baseStyle}>
            {field.config?.options?.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              required={field.is_required}
              className="w-4 h-4"
            />
            {field.label}
          </label>
        );
      default:
        return (
          <input
            type="text"
            placeholder={field.label}
            required={field.is_required}
            className={baseStyle}
          />
        );
    }
  };

  return (
    <div className="space-y-6 mt-6">
      {data.map((form) => (
        <div
          key={form.form_id}
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
        >
          {/* Form Header */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {form.form_name}
            </h3>
            {form.form_description && (
              <p className="text-gray-500 text-sm mt-1">
                {form.form_description}
              </p>
            )}
          </div>

          {/* Render Fields */}
          <div className="space-y-4">
            {form.fields.map((field) => (
              <div
                key={field.field_id}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-inner"
              >
                <label className="block mb-1 font-medium text-gray-700">
                  {field.label}
                  {field.is_required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                {renderField(field)}
                {field.config?.helpText && (
                  <p className="text-gray-500 text-xs mt-1">
                    {field.config.helpText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcedureFormList;
