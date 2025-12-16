import { Trash2 } from "lucide-react";
import { useMatch } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deactivatePatientNote } from "../../../services/patientNotesService";
import toast from "react-hot-toast";

const PatientMedicalAllergies = ({ title, desc, assignmentId, noteId }) => {
  const isPatientDashboard = useMatch("/patient/dashboard/:patientId");
  const isStudentDashboard = useMatch("/student/:studentId/patient/:patientId");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deactivatePatientNote,
    onSuccess: () => {
      toast.success("Note deleted successfully");
      queryClient.invalidateQueries(["patientNotes", assignmentId]);
    },
    onError: () => {
      toast.error("Failed to delete note");
    },
  });

  const handleDelete = () => {
    mutation.mutate(noteId);
  };

  return (
    <div className="border-y-gray-300 bg-gray-50 px-4 py-2 rounded-lg mt-3">
      <div className="flex justify-between items-center">
        <span>
          <div className="text-black text-sm font-medium">{title}</div>
          <div className="text-sm">{desc}</div>
        </span>

        {/* Hide delete icon on patient dashboard */}
        {!isPatientDashboard && !isStudentDashboard && (
          <div onClick={handleDelete} className="cursor-pointer">
            <Trash2 size={15} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientMedicalAllergies;
