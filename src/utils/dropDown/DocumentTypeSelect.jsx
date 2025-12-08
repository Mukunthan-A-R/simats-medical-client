import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { fetchDocumentTypesForDropdown } from "../../services/documentTypeDropdown";

const DocumentTypeSelect = ({ onChange, title = "" }) => {
  const [selectedType, setSelectedType] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["documentTypes"],
    queryFn: fetchDocumentTypesForDropdown,
  });

  const options =
    data?.map((type) => ({
      value: type.type_id,
      label: type.type_name,
    })) || [];

  useEffect(() => {
    if (onChange) onChange(selectedType);
  }, [selectedType, onChange]);

  if (isLoading) return <div>Loading document types...</div>;
  if (error) return <div>Error loading document types</div>;

  return (
    <div>
      <label className="block font-medium mb-1">{title}</label>
      <Select
        options={options}
        value={selectedType}
        onChange={setSelectedType}
        placeholder="Select Document Type"
        isClearable
      />
    </div>
  );
};

export default DocumentTypeSelect;
