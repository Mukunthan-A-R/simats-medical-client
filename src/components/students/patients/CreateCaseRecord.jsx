import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../../../utils/constants";
import DoctorSelect from "./DoctorSelect";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPatientCaseRecord } from "../../../services/patientCaseRecordsServices";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const CreateCaseRecord = ({ onClose, assignmentId }) => {
  const { patientId, studentId } = useParams();
  const queryClient = useQueryClient();

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

  const mutation = useMutation({
    mutationFn: createPatientCaseRecord,
    onSuccess: (data) => {
      console.log("Case record created successfully:", data);
      toast.success("New Case Record Created");

      queryClient.invalidateQueries({
        queryKey: ["patientCaseRecords", assignmentId],
      });
    },
    onError: (error) => {
      console.error("Error creating case record:", error);
      toast.error("Error in creating Case record");
    },
  });

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

    const deptId = departmentsByName[selectedDepartment];

    const formData = {
      assignment_id: Number(assignmentId),
      dept_id: deptId,
      procedure: selectedProcedure,
      vital_signs: formValues.vitalSigns,
      symptoms: formValues.symptoms,
      observation: formValues.observations,
      findings: formValues.findings,
      diagnosis: formValues.diagnosis,
      treatment: formValues.treatment,
      doctor_id: selectedFaculty,
      student_id: studentId,
      patient_id: patientId,
    };
    mutation.mutate(formData);

    console.log("Submitted Case Record:", {
      formData,
    });
    onClose();
  };

  return (
    <div className="flex justify-center">
      <div className="flex-1 md:max-w-4xl p-5 space-y-4 text-sm text-gray-700">
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
            <DoctorSelect
              onChange={(data) => {
                setSelectedFaculty(data?.value);
              }}
            ></DoctorSelect>

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
  );
};

export default CreateCaseRecord;

export const departmentProcedures = {
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

export const departmentsByName = {
  "Internal Medicine": 1,
  Pediatrics: 2,
  Surgery: 3,
  "OB/GYN": 4,
  Psychiatry: 5,
  "Emergency Medicine": 6,
};
