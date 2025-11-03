import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../../utils/constants";

const CreateCaseRecord = ({ onClose }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [formValues, setFormValues] = useState({
    vitalSigns: "",
    symptoms: "",
    observations: "",
    findings: "",
    diagnosis: "",
    treatment: "",
  });

  const departmentProcedures = {
    "Internal Medicine": [
      "Physical Examination",
      "Blood Pressure Monitoring",
      "ECG Interpretation",
      "Venipuncture",
      "Insulin Administration",
      "Blood Glucose Monitoring",
      "Nasogastric Tube Insertion",
    ],
    Pediatrics: [
      "Growth Assessment",
      "Developmental Screening",
      "Vaccination",
      "Otoscopic Examination",
      "Pediatric Physical Exam",
    ],
    Surgery: [
      "Suturing",
      "Wound Dressing",
      "Surgical Scrubbing",
      "Catheterization",
      "Sterile Field Preparation",
    ],
    "OB/GYN": [
      "Pelvic Examination",
      "Pap Smear Collection",
      "Fetal Heart Rate Monitoring",
      "Breast Examination",
      "Prenatal Assessment",
    ],
    Psychiatry: [
      "Mental Status Examination",
      "Depression Screening",
      "Anxiety Assessment",
      "Cognitive Evaluation",
      "Risk Assessment",
    ],
    "Emergency Medicine": [
      "Triage",
      "CPR",
      "Airway Management",
      "Splinting",
      "Trauma Assessment",
    ],
  };

  const facultyApprovers = [
    { id: 1, name: "Dr. Allen", department: "Cardiology" },
    { id: 2, name: "Dr. Brown", department: "Neurology" },
    { id: 3, name: "Dr. Smith", department: "Orthopedics" },
  ];

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return (
      selectedDepartment &&
      selectedProcedure &&
      selectedFaculty &&
      Object.values(formValues).every((val) => val.trim() !== "")
    );
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    console.log("Submitted Case Record:", {
      selectedDepartment,
      selectedProcedure,
      ...formValues,
      selectedFaculty,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-lg shadow-lg animate-slideDown">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-3 border-b bg-gradient-to-b from-[#f8f9fb] to-[#e9eef5] sticky top-0 z-10">
          <h3 className="font-medium text-gray-800 text-base">
            Add New Case Record Entry
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XIcon size={16} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-5 space-y-4 text-sm text-gray-700">
          {/* Department */}
          <div>
            <label className="block font-medium mb-1">Department *</label>
            <select
              value={selectedDepartment}
              onChange={(e) => {
                setSelectedDepartment(e.target.value);
                setSelectedProcedure("");
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Department</option>
              {Object.keys(departmentProcedures).map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Procedure */}
          {selectedDepartment && (
            <div>
              <label className="block font-medium mb-1">Procedure *</label>
              <select
                value={selectedProcedure}
                onChange={(e) => setSelectedProcedure(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Procedure</option>
                {departmentProcedures[selectedDepartment].map((proc) => (
                  <option key={proc} value={proc}>
                    {proc}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* All text areas below appear once a procedure is selected */}
          {selectedProcedure && (
            <>
              {[
                { key: "vitalSigns", label: "Vital Signs *" },
                { key: "symptoms", label: "Symptoms *" },
                { key: "observations", label: "Observations *" },
                { key: "findings", label: "Findings *" },
                { key: "diagnosis", label: "Diagnosis *" },
                { key: "treatment", label: "Treatment *" },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="block font-medium mb-1">{label}</label>
                  <textarea
                    rows="3"
                    value={formValues[key]}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 resize-y focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}

              {/* Faculty for Approval */}
              <div>
                <label className="block font-medium mb-1">
                  Faculty for Approval *
                </label>
                <select
                  value={selectedFaculty}
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Approver</option>
                  {facultyApprovers.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name} - {faculty.department}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-3 pb-2">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium text-white ${aquaButtonStyle} ${aquaGlossEffect} ${
                    !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  style={{
                    background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                    border: "1px solid rgba(0,0,0,0.2)",
                    boxShadow:
                      "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
                  }}
                  disabled={!isFormValid()}
                  onClick={handleSubmit}
                >
                  Submit for Review
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCaseRecord;
