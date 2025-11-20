export const Field = ({ field, updateField, removeField }) => {
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

export default Field;
