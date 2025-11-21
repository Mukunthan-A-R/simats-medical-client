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

  console.log(data);

  return (
    <div className="space-y-8 mt-6">
      {data.map((form) => (
        <div
          key={form.form_id}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
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

          {/* Fields */}
          <div className="space-y-4">
            {form.fields.map((field) => (
              <div
                key={field.field_id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">
                    {field.label}
                  </span>
                  {field.is_required && (
                    <span className="text-red-500 text-xs font-semibold">
                      Required
                    </span>
                  )}
                </div>

                <div className="flex flex-col space-y-1">
                  <p className="text-gray-600 text-sm">
                    <strong>Type:</strong> {field.field_type}
                  </p>
                  {field.config && Object.keys(field.config).length > 0 && (
                    <pre className="bg-gray-200 p-2 rounded text-xs mt-1 overflow-x-auto">
                      {JSON.stringify(field.config, null, 2)}
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcedureFormList;
