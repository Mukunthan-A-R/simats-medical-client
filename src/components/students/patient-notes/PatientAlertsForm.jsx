import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { XIcon, AlertTriangleIcon } from "lucide-react";
import toast from "react-hot-toast";
import { createPatientNote } from "../../../services/patientNotesService";
import { useParams } from "react-router-dom";

const PatientAlertsForm = ({
  assignmentId,
  patientId,
  userId,
  onClose,
  createdBy,
}) => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();

  let roleId;
  if (params.studentId) {
    roleId = 2;
  } else if (params.facultyId) {
    roleId = 1;
  }

  console.log("assignmentId, patientId, userId");
  console.log(assignmentId, patientId, userId);

  // Mutation to create new note
  const mutation = useMutation({
    mutationFn: createPatientNote,
    onSuccess: () => {
      toast.success("Alert created successfully!");
      queryClient.invalidateQueries(["patientNotes", assignmentId]);
      setTitle("");
      setDescription("");
      if (onClose) onClose();
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to create alert.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("Please fill all fields.");
      return;
    }
    mutation.mutate({
      assignment_id: assignmentId,
      patient_id: patientId,
      title,
      description,
      created_by: createdBy,
      role_id: roleId,
      userId: userId,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div
        className="w-full max-w-md rounded-[18px] shadow-lg overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #f4f4f4, #dadada)",
          border: "1px solid #b9b9b9",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{
            background: "linear-gradient(to bottom, #fafafa, #e3e3e3)",
            borderBottom: "1px solid #c8c8c8",
          }}
        >
          <div className="flex items-center gap-2 text-red-500">
            <AlertTriangleIcon size={20} />
            <h2 className="font-semibold text-gray-800 text-lg tracking-tight">
              New Patient Alert
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full active:scale-95 transition"
            style={{
              background: "linear-gradient(to bottom, #fff, #dcdcdc)",
              border: "1px solid #b6b6b6",
              boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            <XIcon size={16} />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="e.g., Penicillin Allergy"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Provide details about the alert"
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg font-medium active:scale-95"
              style={{
                background: "linear-gradient(#fff, #e2e2e2)",
                border: "1px solid #b5b5b5",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={mutation.isLoading}
              className="px-5 py-1.5 rounded-lg font-medium text-white active:scale-95 disabled:opacity-50"
              style={{
                background: "linear-gradient(#64b1ff, #0066cc)",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 3px rgba(0,0,0,0.2)",
              }}
            >
              {mutation.isLoading ? "Saving..." : "Save Alert"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientAlertsForm;
