import React, { useState } from "react";

const DynamicForm = ({ form, onSubmit }) => {
  const [formData, setFormData] = useState(
    form.fields.reduce((acc, field) => {
      acc[field.field_name] = "";
      return acc;
    }, {})
  );

  const handleChange = (e, field) => {
    setFormData((prev) => ({
      ...prev,
      [field.field_name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onSubmit?.(formData);
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

          // Render select if field_type === "select"
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

          // Render textarea
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

          // Default input types (text, number, date, time, etc.)
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

        <button
          type="submit"
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
