import React, { useState } from "react";
import DoctorSelect from "../../students/patients/DoctorSelect";

const RequestDoctorAssignment = ({ onClose, assignmentId }) => {
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      assignment_id: assignmentId,
      doctor_id: selectedFaculty,
    };

    console.log("Doctor Assignment Request Submitted:", formData);
  };

  return (
    <div className="p-5 bg-gray-100 rounded-lg text-sm text-gray-700">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
      >
        {/* Doctor Selector */}
        <div>
          <DoctorSelect
            title=" Request Doctor Assignment"
            onChange={(data) => setSelectedFaculty(data?.value)}
          />
        </div>
        {/* Submit Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white rounded-md"
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestDoctorAssignment;
