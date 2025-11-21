import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/header/PageHeader";
import ProcedureSelect from "../../utils/dropDown/ProcedureSelect";
import { departmentsByName } from "../../components/students/patients/CreateCaseRecord";
import ProcedureFormList from "../../components/admin/form/ProcedureFormList";

const AdminProceduresForm = () => {
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

  // NEW: State to toggle viewing forms
  const [showForms, setShowForms] = useState(false);

  // Reset when department changes
  useEffect(() => {
    setSelectedProcedure("");
    setProcedureId(null);
    setShowForms(false);
  }, [selectedDepartment]);

  // Handle procedure change
  const handleProcedureChange = (procedure) => {
    setSelectedProcedure(procedure?.label || "");
    setProcedureId(procedure?.value || null);
    setShowForms(false); // hide old results
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      <PageHeader title={"View Procedure Forms Schema"} />

      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 space-y-4">
        <h2 className="text-lg font-medium">Select Department & Procedure</h2>

        {/* Department Select */}
        <div>
          <label className="block font-medium mb-1">Department *</label>
          <select
            value={selectedDepartment}
            onChange={(e) => {
              setSelectedDepartment(e.target.value);
            }}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
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
          <ProcedureSelect
            deptId={departmentsByName[selectedDepartment]}
            onChange={handleProcedureChange}
          />
        )}

        {/* VIEW BUTTON */}
        {procedureId && (
          <button
            onClick={() => setShowForms(true)}
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            View
          </button>
        )}
      </div>

      {/* Show forms only after clicking View */}
      {procedureId && <ProcedureFormList procedureId={procedureId} />}
    </div>
  );
};

export default AdminProceduresForm;
