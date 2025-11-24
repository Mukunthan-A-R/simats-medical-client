import { ClipboardListIcon, CheckCircleIcon } from "lucide-react";
import { useParams } from "react-router-dom";

export default function PatientMedicalReportSecondary({ patient }) {
  const { facultyId } = useParams();
  if (!patient) return null;

  // Use form_data or fallback to empty object
  const dynamicData = patient.form_data || {};

  return (
    <div className="mx-auto bg-white rounded-lg shadow-md p-6 text-gray-800">
      {/* Findings and Parameters */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center text-sm">
          <ClipboardListIcon size={14} className="mr-1 text-blue-600" />
          Findings and Parameters
        </h4>
        <div className="text-sm text-gray-700 space-y-1">
          {Object.entries(dynamicData).map(([key, value]) => (
            <p key={key}>
              <span className="font-medium">
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
                :
              </span>{" "}
              {value || "-"}
            </p>
          ))}
        </div>
      </div>

      {/* Diagnosis */}
      {patient.diagnosis && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 text-sm">
            Diagnosis
          </h4>
          <p className="text-sm text-gray-700">{patient.diagnosis}</p>
        </div>
      )}

      {/* Evaluation & Verification */}
      <div className="mb-4 bg-blue-50 p-3 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-blue-100 flex items-center text-sm">
          <CheckCircleIcon size={14} className="mr-1 text-blue-600" />
          Evaluation & Supervision
        </h4>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Evaluated By Student:</span>{" "}
          {patient.student_name} ({patient.student_id}) <br />
          <span className="font-medium">Supervised By Doctor:</span>{" "}
          {patient.doctor_name} ({facultyId})
        </p>
      </div>

      {/* Signatures */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <div className="h-12 border-b border-gray-400 mb-1"></div>
          <p className="text-sm font-medium">{patient.student_name}</p>
          <p className="text-xs text-gray-500">Performed By</p>
        </div>
        <div>
          <div className="h-12 border-b border-gray-400 mb-1"></div>
          <p className="text-sm font-medium">{patient.doctor_name}</p>
          <p className="text-xs text-gray-500">Verified By</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-3 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500">
          This is an official medical report from Saveetha Medical College
          Hospital.
        </p>
        <p className="text-xs text-gray-500">
          For inquiries: records@saveethamedical.com
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Generated on: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}
