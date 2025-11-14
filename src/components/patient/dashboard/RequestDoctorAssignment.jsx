import React, { useState } from "react";
import DoctorSelect from "../../students/patients/DoctorSelect";
import { useMutation } from "@tanstack/react-query";
import { doctorRequestAdmission } from "../../../services/doctorRequestAdmission";
import toast from "react-hot-toast";

const RequestDoctorAssignment = ({ onClose, assignmentId }) => {
  const [selectedFaculty, setSelectedFaculty] = useState("");

  const mutation = useMutation({
    mutationFn: doctorRequestAdmission,
    onSuccess: () => {
      toast.success("Doctor request created successfully");
      onClose?.();
    },
    onError: (error) => {
      const status = error?.response?.status;

      if (status === 409) {
        toast.error(
          error.response.data?.message ||
            "A request already exists. Please wait for the doctor's response."
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      assignment_id: Number(assignmentId),
      doctor_id: selectedFaculty,
    };

    console.log("Doctor Assignment Request Submitted:", formData);

    mutation.mutate(formData);
  };

  return (
    <div className="p-5 bg-gray-100 rounded-lg text-sm text-gray-700">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
      >
        <DoctorSelect
          title="Request Doctor Assignment"
          onChange={(data) => setSelectedFaculty(data?.value)}
        />

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={!selectedFaculty || mutation.isPending}
            className="px-4 py-2 text-sm font-medium text-white rounded-md disabled:opacity-50"
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            {mutation.isPending ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestDoctorAssignment;
