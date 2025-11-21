// File: FormBuilder.jsx
import React, { useState } from "react";

// iOS 6 Gradient Button Class
const iosButton =
  "px-4 py-2 rounded-lg text-white font-semibold shadow " +
  "bg-gradient-to-b from-[#6eb7ff] to-[#1a73e8] border border-[#1a73e8] active:from-[#1a73e8] active:to-[#1558b0]";

// Field Component
const Field = ({ field, updateField, removeField, moveUp, moveDown }) => {
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
    <div className="flex space-x-3 mb-4">
      {/* Move Buttons */}
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => moveUp(field.id)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        >
          ↑
        </button>
        <button
          onClick={() => moveDown(field.id)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        >
          ↓
        </button>
      </div>

      {/* Field Card */}
      <div className="flex-1 border border-gray-300 rounded-xl p-4 bg-gradient-to-b from-[#fafafa] to-[#e6e6e6] shadow">
        <div className="flex justify-between items-center mb-2">
          {/* Label Input */}
          <input
            type="text"
            placeholder="Field Label"
            value={field.label}
            onChange={(e) => updateField(field.id, "label", e.target.value)}
            className="border border-gray-400 bg-gradient-to-b from-white to-gray-100 shadow-inner p-2 rounded w-full mr-4 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          {/* Delete Button */}
          <button
            onClick={() => removeField(field.id)}
            className="px-3 py-1 rounded-lg text-white font-semibold shadow 
              bg-gradient-to-b from-[#ff6b6b] to-[#d64545] border border-[#d64545]
              active:from-[#d64545] active:to-[#b23232]"
          >
            Delete
          </button>
        </div>

        {/* Field Preview */}
        {field.type === "text" && (
          <input
            type="text"
            disabled
            placeholder="Text Input"
            className="border border-gray-400 p-2 rounded bg-gradient-to-b from-white to-gray-100 shadow-inner w-full mb-2"
          />
        )}
        {field.type === "number" && (
          <input
            type="number"
            disabled
            placeholder="Number Input"
            className="border border-gray-400 p-2 rounded bg-gradient-to-b from-white to-gray-100 shadow-inner w-full mb-2"
          />
        )}
        {field.type === "date" && (
          <input
            type="date"
            disabled
            className="border border-gray-400 p-2 rounded bg-gradient-to-b from-white to-gray-100 shadow-inner w-full mb-2"
          />
        )}
        {field.type === "textarea" && (
          <textarea
            disabled
            placeholder="Textarea"
            className="border border-gray-400 p-2 rounded bg-gradient-to-b from-white to-gray-100 shadow-inner w-full mb-2"
          />
        )}
        {(field.type === "radio" || field.type === "checkbox") && (
          <div>
            {field.options.map((opt, idx) => (
              <div key={idx} className="flex items-center mb-2">
                <input type={field.type} disabled className="mr-2" />
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleOptionChange(idx, e.target.value)}
                  className="border border-gray-400 p-1 rounded bg-gradient-to-b from-white to-gray-100 shadow-inner w-full focus:ring-1 focus:ring-blue-400"
                />
              </div>
            ))}
            <button
              onClick={addOption}
              className="text-blue-600 text-sm hover:text-blue-800 mt-1"
            >
              + Add Option
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Main FormBuilder
const FormBuilder = ({ onSubmitFormStructure }) => {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields((prev) => [
      ...prev,
      {
        id: Date.now(), // unique identifier
        serial_no: prev.length + 1, // order
        type,
        label: "",
        options: type === "radio" || type === "checkbox" ? ["Option 1"] : [],
      },
    ]);
  };

  const updateField = (id, key, value) => {
    setFields((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [key]: value } : f))
    );
  };

  const removeField = (id) => {
    setFields((prev) => prev.filter((f) => f.id !== id));
  };

  const moveUp = (id) => {
    setFields((prev) => {
      const index = prev.findIndex((f) => f.id === id);
      if (index <= 0) return prev;
      const newFields = [...prev];
      [newFields[index - 1], newFields[index]] = [
        newFields[index],
        newFields[index - 1],
      ];
      return newFields.map((f, idx) => ({ ...f, serial_no: idx + 1 }));
    });
  };

  const moveDown = (id) => {
    setFields((prev) => {
      const index = prev.findIndex((f) => f.id === id);
      if (index === -1 || index === prev.length - 1) return prev;
      const newFields = [...prev];
      [newFields[index], newFields[index + 1]] = [
        newFields[index + 1],
        newFields[index],
      ];
      return newFields.map((f, idx) => ({ ...f, serial_no: idx + 1 }));
    });
  };

  const handleSubmitForm = () => {
    if (typeof onSubmitFormStructure === "function") {
      onSubmitFormStructure(fields);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Add Field Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button onClick={() => addField("text")} className={iosButton}>
          Add Text
        </button>
        <button onClick={() => addField("number")} className={iosButton}>
          Add Number
        </button>
        <button onClick={() => addField("date")} className={iosButton}>
          Add Date
        </button>
        <button onClick={() => addField("textarea")} className={iosButton}>
          Add Textarea
        </button>
        <button onClick={() => addField("radio")} className={iosButton}>
          Add Radio
        </button>
        <button onClick={() => addField("checkbox")} className={iosButton}>
          Add Checkbox
        </button>
      </div>

      {/* Fields */}
      <div>
        {fields.map((field) => (
          <Field
            key={field.id}
            field={field}
            updateField={updateField}
            removeField={removeField}
            moveUp={moveUp}
            moveDown={moveDown}
          />
        ))}
      </div>

      {/* Debug */}
      <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-700">
        Form Data (Debug)
      </h2>
      <pre className="bg-gray-100 p-2 rounded shadow-inner">
        {JSON.stringify(fields, null, 2)}
      </pre>

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
        <button onClick={handleSubmitForm} className={iosButton}>
          Create Form
        </button>
      </div>
    </div>
  );
};

export default FormBuilder;
