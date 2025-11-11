import React from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import PatientAdmissionCard from "../../components/faculty/PatientAdmissionCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPendingAdmissions } from "../../services/doctorPendingApprovals";

const FacultyAdmissionApprovals = () => {
  const navigate = useNavigate();
  const { facultyId: doctorId } = useParams();

  const {
    data: patientsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["doctorPendingApprovals", doctorId],
    queryFn: () => fetchPendingAdmissions(doctorId),
    enabled: !!doctorId,
  });

  if (isLoading) {
    return <p className="p-4 text-center text-gray-700">Loading patients...</p>;
  }

  if (isError) {
    return (
      <p className="p-4 text-center text-red-600">
        Failed to load patients. Please try again.
      </p>
    );
  }

  const patients = patientsData?.data || [];

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center">
        <button
          className={`mr-2 w-8 h-8 flex items-center justify-center rounded-full       `}
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
          Admission Approvals
        </h1>
      </div>

      {patients.length === 0 && (
        <p className="text-center text-blue-700">
          No Admission Approvals for now
        </p>
      )}

      {patients.map((patient) => (
        <PatientAdmissionCard
          key={patient?.patient_id}
          patient={patient}
        ></PatientAdmissionCard>
      ))}
    </div>
  );
};

export default FacultyAdmissionApprovals;
