import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPendingDischargeRequests } from "../../../services/dischargeRequestService";
import PatientDischargeCard from "./PatientDischargeCard";

const FacultyDischargeApproval = () => {
  const navigate = useNavigate();

  const { facultyId } = useParams();

  // Fetch pending discharge requests
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pendingDischargeRequests", facultyId],
    queryFn: () => fetchPendingDischargeRequests(facultyId),
    enabled: !!facultyId,
  });

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6 flex items-center">
        <button
          className="mr-2 w-8 h-8 flex items-center justify-center rounded-full"
          onClick={() => navigate(-1)}
          style={{
            background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <ChevronLeftIcon size={18} className="text-blue-700" />
        </button>
        <h1 className="text-xl font-semibold text-blue-900">
          Discharge Approval
        </h1>
      </div>

      {/* Content */}
      {isLoading && (
        <p className="text-gray-500 text-center">Loading pending requests...</p>
      )}
      {isError && (
        <p className="text-red-500 text-center">
          Failed to load pending requests.
        </p>
      )}

      {!isLoading && data?.length === 0 && (
        <p className="text-gray-500 text-center">
          No pending discharge requests.
        </p>
      )}

      <div className="space-y-4">
        {data &&
          data.map((patient) => (
            <PatientDischargeCard
              key={patient.assignment_id}
              patient={patient}
            />
          ))}
      </div>
    </div>
  );
};

export default FacultyDischargeApproval;
