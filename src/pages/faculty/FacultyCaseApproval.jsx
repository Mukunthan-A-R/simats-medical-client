import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import PatientCaseApprovalCard from "../../components/faculty/PatientCaseApprovalCard";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchDoctorProcedureCaseRecords } from "../../services/doctorProcedureCaseRecord";

const FacultyCaseApproval = () => {
  const navigate = useNavigate();
  const { facultyId: doctorId } = useParams();

  const {
    data: caseRecords,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["patient", doctorId],
    queryFn: () => fetchDoctorProcedureCaseRecords(doctorId),
    enabled: !!doctorId,
  });

  if (isLoading) {
    return <p className="text-blue-800 text-center pt-10">Data Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-red-800 text-center pt-10">
        Error loading case records.
      </p>
    );
  }

  if (!caseRecords || caseRecords.length === 0) {
    return (
      <p className="text-blue-800 text-center pt-10">No Case Records for Now</p>
    );
  }

  const patientsData = caseRecords || [];

  const patients = patientsData.filter(
    (record) => record?.approval?.trim().toLowerCase() === "requested"
  );

  if (patients.length === 0) {
    return (
      <>
        <div className="m-4 flex items-center">
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
            Discharge Approval
          </h1>
        </div>
        <p className="text-blue-600 text-center mt-8">
          No Cases Records Pending !
        </p>
      </>
    );
  }

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
          Case Record Approval
        </h1>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <PatientCaseApprovalCard key={patient.record_id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default FacultyCaseApproval;
