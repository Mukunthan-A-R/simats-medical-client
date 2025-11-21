import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormBuilder from "./FormBuilder";
import ProcedureSelect from "../../../utils/dropDown/ProcedureSelect";
import { departmentsByName } from "../../students/patients/CreateCaseRecord";

const AdminProcedureFormPage = () => {
  const { deptId: paramDeptId } = useParams();
  const [selectedDepartment, setSelectedDepartment] = useState(
    paramDeptId
      ? Object.keys(departmentsByName).find(
          (key) => departmentsByName[key] === Number(paramDeptId)
        )
      : ""
  );
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [procedureId, setProcedureId] = useState(null);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  useEffect(() => {
    setSelectedProcedure("");
    setProcedureId(null);
  }, [selectedDepartment]);

  const handleProcedureChange = (procedure) => {
    setSelectedProcedure(procedure?.label || "");
    setProcedureId(procedure?.value || null); // backend procedure ID
  };

  const handleSubmitFormStructure = (formStructure) => {
    const dataToSubmit = {
      deptId: departmentsByName[selectedDepartment],
      procedureId,
      formStructure,
    };

    console.log("Full form data to submit:", dataToSubmit);
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      {/* Department & Procedure Selection */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 space-y-4">
        <h2 className="text-lg font-medium">Select Department & Procedure</h2>

        {/* Department Select */}
        <div>
          <label className="block font-medium mb-1">Department *</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Department</option>
            {Object.keys(departmentsByName).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Procedure Select */}
        {selectedDepartment && (
          <div>
            <ProcedureSelect
              deptId={departmentsByName[selectedDepartment]}
              onChange={handleProcedureChange}
            />
          </div>
        )}
      </div>

      {/* FormBuilder */}
      {selectedProcedure && procedureId && (
        <>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 space-y-4">
            <h2 className="text-lg font-medium">Form Details</h2>

            {/* Form Title */}
            <div>
              <label className="block font-medium mb-1">Form Title *</label>
              <input
                type="text"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter form title"
              />
            </div>

            {/* Form Description */}
            <div>
              <label className="block font-medium mb-1">Form Description</label>
              <textarea
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter form description (optional)"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h2 className="text-lg font-medium mb-4">
              {selectedDepartment} - {selectedProcedure} - Form Builder
            </h2>

            {/* FormBuilder Component */}
            <FormBuilder
              procedureId={procedureId}
              onSubmitFormStructure={handleSubmitFormStructure}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminProcedureFormPage;
