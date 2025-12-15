import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SwipeWrapper from "./SwipeWrapper"; // swipe handling
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { fetchDoctorProcedureCaseRecords } from "../../../services/doctorProcedureCaseRecord";
import PatientCaseApprovalCard from "../PatientCaseApprovalCard";
import FullScreenPatientCard from "./FullScreenPatientCard";
import PageHeader from "../../header/PageHeader";

const FacultyCaseApprovalSwipe = () => {
  const { facultyId: doctorId } = useParams();
  const [index, setIndex] = useState(0);

  const { data = [], isLoading } = useQuery({
    queryKey: ["patient", doctorId],
    queryFn: () => fetchDoctorProcedureCaseRecords(doctorId),
    enabled: !!doctorId,
  });

  const patients = data.filter(
    (r) => r?.approval?.trim().toLowerCase() === "requested"
  );

  if (isLoading) return <p className="text-center pt-10">Loading...</p>;
  if (!patients.length) return <p className="text-center pt-10">No cases</p>;

  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < patients.length - 1 && setIndex(index + 1);

  return (
    <div className="bg-gray-100 h-screen p-4">
      <PageHeader title={"Case Records Approval"} />
      <div className="h-full flex items-center justify-center relative">
        {/* Swipe container with limited width */}
        <SwipeWrapper onLeft={next} onRight={prev}>
          <div className="flex items-center justify-center">
            <div>
              <FullScreenPatientCard patient={patients[index]} />
            </div>
          </div>
        </SwipeWrapper>
        {/* Left Arrow */}
        {index > 0 && (
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ChevronLeftIcon size={24} />
          </button>
        )}
        {/* Right Arrow */}
        {index < patients.length - 1 && (
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ChevronRightIcon size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default FacultyCaseApprovalSwipe;
