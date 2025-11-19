// File: FormBuilder.jsx
import React, { useState } from "react";

// Field Component
const Field = ({ field, updateField, removeField }) => {
  const handleOptionChange = (index, value) => {
    const newOptions = [...field.options];
    newOptions[index] = value;
    updateField(field.id, "options", newOptions);
  };

  const addOption = () => {
    updateField(field.id, "options", [
      ...field.options,
      `Option ${field.options.length + 1}`,
    ]);
  };

  return (
    <div className="border border-gray-300 rounded p-4 mb-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <input
          type="text"
          placeholder="Field Label"
          value={field.label}
          onChange={(e) => updateField(field.id, "label", e.target.value)}
          className="border p-2 rounded w-full mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => removeField(field.id)}
          className="text-red-500 hover:text-red-700 font-bold"
        >
          Delete
        </button>
      </div>

      {field.type === "text" && (
        <input
          type="text"
          disabled
          placeholder="Text Input"
          className="border p-2 rounded w-full bg-gray-100"
        />
      )}

      {field.type === "textarea" && (
        <textarea
          disabled
          placeholder="Textarea"
          className="border p-2 rounded w-full bg-gray-100"
        />
      )}

      {field.type === "radio" && (
        <div>
          {field.options.map((opt, idx) => (
            <div key={idx} className="flex items-center mb-1">
              <input type="radio" disabled className="mr-2" />
              <input
                type="text"
                value={opt}
                onChange={(e) => handleOptionChange(idx, e.target.value)}
                className="border p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
          <button
            onClick={addOption}
            className="text-blue-500 hover:text-blue-700 text-sm mt-1"
          >
            + Add Option
          </button>
        </div>
      )}
    </div>
  );
};

// Main Form Builder Component
const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields([
      ...fields,
      {
        id: Date.now(),
        type,
        label: "",
        options: type === "radio" ? ["Option 1"] : [],
      },
    ]);
  };

  const updateField = (id, key, value) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, [key]: value } : f)));
  };

  const removeField = (id) => {
    setFields(fields.filter((f) => f.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Form Builder</h1>

      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => addField("text")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Text
        </button>
        <button
          onClick={() => addField("textarea")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Textarea
        </button>
        <button
          onClick={() => addField("radio")}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Add Radio
        </button>
      </div>

      <div>
        {fields.map((field) => (
          <Field
            key={field.id}
            field={field}
            updateField={updateField}
            removeField={removeField}
          />
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-2">Form Data (Debug)</h2>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(fields, null, 2)}
      </pre>
    </div>
  );
};

export default FormBuilder;
