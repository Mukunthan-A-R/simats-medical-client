import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PageHeader from "../../components/header/PageHeader";
import DocumentTypesList from "../../components/admin/file-types/DocumentTypesList";
import { createDocumentType } from "../../services/documentTypeService";
import toast from "react-hot-toast";

const AdminCreateFileType = () => {
  const [typeName, setTypeName] = useState("");
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ typeName, description }) =>
      createDocumentType(typeName, description),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      setTypeName("");
      setDescription("");
      toast.success("Document type created successfully!");
    },
    onError: (error) => {
      toast.error(error?.error || "Failed to create document type.");
    },
  });

  const handleAddFileType = () => {
    if (!typeName.trim() || !description.trim()) {
      toast.error("Both type name and description are required");
      return;
    }

    mutation.mutate({
      typeName: typeName.trim(),
      description: description.trim(),
    });
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      <PageHeader title={"Admin Create File Type"} />

      {/* Card Container */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-lg font-medium mb-3">Add New File Type</h2>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={typeName}
            onChange={(e) => setTypeName(e.target.value)}
            placeholder="Enter file type name"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            onClick={handleAddFileType}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>

      <DocumentTypesList />
    </div>
  );
};

export default AdminCreateFileType;
