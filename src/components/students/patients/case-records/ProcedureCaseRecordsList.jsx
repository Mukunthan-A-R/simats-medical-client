import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProcedureCaseRecordsByAssignment } from "../../../../services/procedureCaseRecordService";
import {
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Clock,
  User,
  UserCheck,
} from "lucide-react";
import CaseRecordFilesViewer from "./CaseRecordFilesViewer";

const ProcedureCaseRecordsList = ({ assignmentId }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["procedureCaseRecords", assignmentId],
    queryFn: () => fetchProcedureCaseRecordsByAssignment(assignmentId),
    enabled: !!assignmentId,
  });

  if (!assignmentId)
    return <div className="text-gray-500">No assignment selected.</div>;

  if (isLoading)
    return <div className="text-blue-500">Loading case records...</div>;
  if (isError)
    return <div className="text-red-500">Failed to load case records.</div>;

  const totalRecords = data?.total_records || 0;
  const caseRecords = data?.caseRecords || [];

  if (totalRecords === 0)
    return (
      <div className="text-gray-500">
        No procedure case records found for this assignment.
      </div>
    );

  return (
    <div className="divide-y divide-gray-100 px-3 pt-2">
      {caseRecords.map((record) => (
        <ProcedureCaseRecordCard key={record.record_id} record={record} />
      ))}
    </div>
  );
};

const ProcedureCaseRecordCard = ({ record }) => {
  const [isOpen, setIsOpen] = useState(false);
  const status = record.approval?.toLowerCase();
  const statusGradient =
    status === "approved"
      ? "from-green-400 to-green-600"
      : status === "rejected"
      ? "from-red-400 to-red-600"
      : "from-orange-400 to-yellow-500";

  return (
    <div className="border border-gray-200 rounded-md shadow-sm mb-3">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-linear-to-b ${statusGradient} border border-gray-300 shadow`}
          >
            {status === "approved" ? (
              <Check size={16} className="text-white" />
            ) : status === "rejected" ? (
              <X size={16} className="text-white" />
            ) : (
              <Clock size={16} className="text-white" />
            )}
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900">
              Form ID: {record.form_id}
            </h4>
            <p className="text-xs text-gray-500">
              Patient: {record.patient_id} • Student: {record.student_id} •{" "}
              {new Date(record.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="p-6 bg-white border-t border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-sm text-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Form Data</h3>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                status === "approved"
                  ? "bg-green-100 text-green-700"
                  : status === "rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {record.approval.charAt(0).toUpperCase() +
                record.approval.slice(1)}
            </span>
          </div>
          {/* Dynamic form_data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {record.form_data &&
              Object.entries(record.form_data)
                .filter(([key]) => key !== "fields") // ⛔ Hide fields array (used for file uploads)
                .map(([key, value]) => {
                  const isArray = Array.isArray(value);

                  return (
                    <div key={key}>
                      <span className="font-medium text-gray-800">
                        {key.replace(/_/g, " ")}:
                      </span>{" "}
                      {/* Array Display */}
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

          <CaseRecordFilesViewer
            fileIds={record.form_data?.fields || []}
            isOpen={isOpen}
          />

          <div className="my-4 border-t border-gray-200"></div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 text-gray-600">
            <div>
              <p className="flex items-center">
                <User size={14} className="mr-2 text-blue-600" /> Provider:{" "}
                {record.student_id}
              </p>
              <p className="flex items-center mt-1">
                <UserCheck size={14} className="mr-2 text-green-600" /> Doctor:{" "}
                {record.doctor_id}
              </p>
            </div>
            <div className="text-right">
              <p>
                Approved On:{" "}
                {record.approved_time
                  ? new Date(record.approved_time).toLocaleString()
                  : "Pending"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcedureCaseRecordsList;
