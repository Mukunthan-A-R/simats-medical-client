import { ClipboardListIcon, CheckCircleIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import DoctorCaseRecordFileReader from "../faculty/dashboard/file-reader/DoctorCaseRecordFileReader";
import CaseRecordFilesViewer from "../students/patients/case-records/CaseRecordFilesViewer";

export default function PatientMedicalReportSecondary({ record }) {
  const { facultyId } = useParams();
  if (!record) return null;

  const formData = record.form_data || {};
  const files = record.files || []; // you can populate from procedure_case_record_files

  return (
    <div className="mx-auto bg-white rounded-lg shadow-md p-6 text-gray-800">
      {/* Procedure & Form Info */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center text-sm">
          <ClipboardListIcon size={14} className="mr-1 text-blue-600" />
          Procedure & Form
        </h4>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Procedure:</span>{" "}
          {record.procedure_name} <br />
          <span className="font-medium">Form:</span> {record.form_name} <br />
          <span className="font-medium">Department:</span>{" "}
          {record.department_name} <br />
          <span className="font-medium">Approved At:</span>{" "}
          {record.approved_time
            ? new Date(record.approved_time).toLocaleString()
            : "-"}
        </p>
      </div>

      {/* Dynamic Form Fields */}
      {Object.keys(formData).length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center text-sm">
            <ClipboardListIcon size={14} className="mr-1 text-blue-600" />
            Findings / Parameters
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
            {Object.entries(formData).map(([key, value]) => {
              if (key === "fields") return null; // Skip internal fields

              const isArray = Array.isArray(value);

              return (
                <div key={key}>
                  <span className="font-medium text-gray-800">
                    {key
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                    :
                  </span>{" "}
                  {isArray ? (
                    value.length > 0 ? (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {value.map((v, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500 italic">None</span>
                    )
                  ) : (
                    <span className="text-gray-700">{value || "—"}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Files */}
      {record.form_data?.fields.length > 0 && (
        <>
          <div className="">
            <CaseRecordFilesViewer
              fileIds={record.form_data?.fields || []}
              isOpen={true}
            />
          </div>
        </>
      )}

      {/* {files.length > 0 && (
        <div className="w-full bg-gray-50 p-2 mb-4">
          <DoctorCaseRecordFileReader fileIds={files} />
        </div>
      )} */}

      {/* Evaluation & Supervision */}
      <div className="my-4 bg-blue-50 p-3 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-blue-100 flex items-center text-sm">
          <CheckCircleIcon size={14} className="mr-1 text-blue-600" />
          Evaluation & Supervision
        </h4>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Evaluated By Student:</span>{" "}
          {record.student_name} ({record.student_id}) <br />
          <span className="font-medium">Supervised By Doctor:</span>{" "}
          {record.doctor_name} ({record.doctor_id})
        </p>
      </div>

      {/* Signatures */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <div className="h-12 border-b border-gray-400 mb-1"></div>
          <p className="text-sm font-medium">{record.student_name}</p>
          <p className="text-xs text-gray-500">Performed By</p>
        </div>
        <div>
          <div className="h-12 border-b border-gray-400 mb-1"></div>
          <p className="text-sm font-medium">{record.doctor_name}</p>
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
