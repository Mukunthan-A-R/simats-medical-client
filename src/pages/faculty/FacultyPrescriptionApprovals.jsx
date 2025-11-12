import { useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import FacultyPrescriptionRejectionPopup from "../../components/faculty/FacultyPrescriptionRejectionPopup";
import { useQuery } from "@tanstack/react-query";
import { fetchDoctorMedications } from "../../services/doctorMedication";
import PrescriptionStatusCard from "../../components/faculty/PrescriptionStatusCard";

const FacultyPrescriptionApprovals = () => {
  const { facultyId: doctorId } = useParams();

  const navigate = useNavigate();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const {
    data: pendingPrescriptions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["doctor-pending-prescriptions", doctorId],
    queryFn: () => fetchDoctorMedications(doctorId, "pending"),
    enabled: !!doctorId, // only fetch if doctorId exists
  });

  if (isLoading) {
    return <p>Loading ... </p>;
  }

  console.log("data");
  console.log(pendingPrescriptions?.data);
  console.log(pendingPrescriptions?.count);

  // Faculty handle functions
  const handleApprove = (item) => {
    alert(`Approved prescription for ${item.patientName}`);
  };

  const handleReject = (item) => {
    setCurrentItem(item);
    setShowFeedbackModal(true);
  };

  const currentPrescriptions = pendingPrescriptions.data;

  console.log("currentPrescriptions");
  console.log(currentPrescriptions);

  // const currentPrescriptions = pendingPrescriptions.sort(
  //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  // );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center flex-wrap">
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
          <h1 className="text-base sm:text-xl font-semibold text-blue-900 mr-2">
            Admission Approvals
          </h1>
          <div className="px-2 py-1 bg-purple-100 rounded-full text-[10px] sm:text-xs font-medium text-purple-800 flex items-center">
            {pendingPrescriptions?.count} pending
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {currentPrescriptions.map((item) => (
          <PrescriptionStatusCard key={item?.medication_id} item={item} />
        ))}
      </div>

      {/* Rejection Feedback Modal */}
      {showFeedbackModal && (
        <FacultyPrescriptionRejectionPopup
          handleCancel={() => {
            setShowFeedbackModal(false);
            setCurrentItem(null);
          }}
        />
      )}
    </div>
  );
};

export default FacultyPrescriptionApprovals;
