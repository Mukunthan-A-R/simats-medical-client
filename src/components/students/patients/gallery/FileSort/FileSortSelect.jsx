import React, { useState, useEffect } from "react";
import DocumentTypeSelect from "../../../../../utils/dropDown/DocumentTypeSelect";

const FileSortSelect = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSortChange = (type) => {
    setSelectedType(type);
    if (onSelect) onSelect(type);
  };

  return (
    <div
      className="p-4 rounded-xl shadow-md"
      style={{
        background: "linear-gradient(#f7f7f7, #ececec)",
        border: "1px solid #ccc",
      }}
    >
      <label className="block text-sm font-medium text-gray-900 mb-2">
        Sort by Document Type
      </label>

      <DocumentTypeSelect title="" onChange={handleSortChange} />
    </div>
  );
};

export default FileSortSelect;
