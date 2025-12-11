import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProcedureSelect from "../../../../utils/dropDown/ProcedureSelect";
import ProcedureSelectButtons from "../../../admin/form/ProcedureSelectButtons";
import DepartmentSelect from "../../../../utils/dropDown/DepartmentSelect";

const NewPatientFormCaseRecord = ({ assignmentId }) => {
  const { deptId: paramDeptId } = useParams();

  const [selectedDepartment, setSelectedDepartment] = useState(null);
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
    setShowForms(!!procedure?.value);
  };

  return (
    <div className="px-2 sm:px-4 py-4 sm:py-6 mx-auto">
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 space-y-4">
        <h2 className="text-lg font-medium">Select Department & Procedure</h2>

        {/* Dynamic Department Select */}
        <DepartmentSelect
          title="Department *"
          onChange={(dept) => setSelectedDepartment(dept?.value || null)}
        />

        {/* Procedure Select */}
        {selectedDepartment && (
          <ProcedureSelect
            deptId={selectedDepartment}
            onChange={handleProcedureChange}
          />
        )}
      </div>

      {procedureId && (
        <ProcedureSelectButtons
          assignmentId={assignmentId}
          procedureId={procedureId}
        />
      )}
    </div>
  );
};

export default NewPatientFormCaseRecord;
