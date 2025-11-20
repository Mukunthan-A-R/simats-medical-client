// File: FormBuilder.jsx
import React, { useState } from "react";

// iOS 6 Gradient Button Class
const iosButton =
  "px-4 py-2 rounded-lg text-white font-semibold shadow " +
  "bg-gradient-to-b from-[#6eb7ff] to-[#1a73e8] border border-[#1a73e8] active:from-[#1a73e8] active:to-[#1558b0]";

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
    <div className="border border-gray-300 rounded-xl p-4 mb-4 bg-gradient-to-b from-[#fafafa] to-[#e6e6e6] shadow">
      <div className="flex justify-between items-center mb-2">
        {/* iOS 6 Input */}
        <input
          type="text"
          placeholder="Field Label"
          value={field.label}
          onChange={(e) => updateField(field.id, "label", e.target.value)}
          className="border border-gray-400 bg-gradient-to-b from-white to-gray-100 shadow-inner p-2 rounded w-full mr-4 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        {/* Delete Button — iOS Red Gloss */}
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

      {field.type === "textarea" && (
        <textarea
          disabled
          placeholder="Textarea"
          className="border border-gray-400 p-2 rounded bg-gradient-to-b from-white to-gray-100 shadow-inner w-full mb-2"
        />
      )}

      {/* Radio Fields */}
      {field.type === "radio" && (
        <div>
          {field.options.map((opt, idx) => (
            <div key={idx} className="flex items-center mb-2">
              <input type="radio" disabled className="mr-2" />
              <input
                type="text"
                value={opt}
                onChange={(e) => handleOptionChange(idx, e.target.value)}
                className="border border-gray-400 p-1 rounded bg-gradient-to-b from-white to-gray-100 shadow-inner w-full focus:ring-1 focus:ring-blue-400"
              />
            </div>
          ))}

          {/* Add Option Button */}
          <button
            onClick={addOption}
            className="text-blue-600 text-sm hover:text-blue-800 mt-1"
          >
            + Add Option
          </button>
        </div>
      )}
    </div>
  );
};

// Main Builder
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
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Form Builder</h1>

      {/* iOS 6 Style Buttons */}
      <div className="flex space-x-3 mb-6">
        <button onClick={() => addField("text")} className={iosButton}>
          Add Text
        </button>

        <button
          onClick={() => addField("textarea")}
          className="px-4 py-2 rounded-lg text-white font-semibold shadow
          bg-gradient-to-b from-[#66cc77] to-[#2e8b57] border border-[#2e8b57]
          active:from-[#2e8b57] active:to-[#1f623d]"
        >
          Add Textarea
        </button>

        <button
          onClick={() => addField("radio")}
          className="px-4 py-2 rounded-lg text-white font-semibold shadow
          bg-gradient-to-b from-[#b57aff] to-[#7a3fd6] border border-[#7a3fd6]
          active:from-[#7a3fd6] active:to-[#552a99]"
        >
          Add Radio
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
    </div>
  );
};

export default FormBuilder;
