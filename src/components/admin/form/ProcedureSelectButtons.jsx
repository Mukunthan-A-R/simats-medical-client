import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFormsByProcedure } from "../../../services/procedureFormService";
import DynamicForm from "../../students/form/DynamicForm";

const ProcedureSelectButtons = ({ procedureId, onSelect }) => {
  const [selectedForm, setSelectedForm] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["procedureForms", procedureId],
    queryFn: () => getFormsByProcedure(procedureId),
    enabled: !!procedureId,
  });

  const handleSelect = (form) => {
    console.log("Selected Form:", form);
    setSelectedForm(form);
    onSelect?.(form);
  };

  if (!procedureId) return null;
  if (isLoading) return <div>Loading forms...</div>;
  if (isError) return <div>Error loading forms.</div>;
  if (!data || data.length === 0) return <div>No forms found.</div>;

  return (
    <div className="mt-4">
      {/* Form Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {data.map((form) => (
          <button
            key={form.form_id}
            onClick={() => handleSelect(form)}
            className="
              bg-gradient-to-b from-white to-gray-200
              border border-gray-300
              rounded-xl
              px-3 py-4
              shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.7)]
              transition-all
              cursor-pointer
              text-left
              hover:shadow-[0_4px_8px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.9)]
              hover:-translate-y-0.5
              active:scale-95
            "
          >
            <h3 className="text-sm font-semibold text-gray-800 leading-tight">
              {form.form_name}
            </h3>

            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              {form.form_description || "No description"}
            </p>
          </button>
        ))}
      </div>

      {/* Dynamic Form */}
      {selectedForm && (
        <DynamicForm
          form={selectedForm}
          onSubmit={(data) => console.log("Submitted Data:", data)}
        />
      )}
    </div>
  );
};

export default ProcedureSelectButtons;
