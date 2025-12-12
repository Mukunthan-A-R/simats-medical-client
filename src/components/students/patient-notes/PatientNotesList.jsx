import { useQuery } from "@tanstack/react-query";
import PatientCollapsiblePanel from "./PatientCollapsiblePanel";
import PatientMedicalAllergies from "./PatientMedicalAllergies";
import { fetchPatientNotesByAssignment } from "../../../services/patientNotesService";
import { useParams } from "react-router-dom";

const PatientNotesList = ({ patientData }) => {
  const params = useParams();
  const { assignment_id: assignmentId, patient_id } = patientData;

  const { data: notes = [], isLoading } = useQuery({
    queryKey: ["patientNotes", assignmentId],
    queryFn: () => fetchPatientNotesByAssignment(assignmentId),
    enabled: !!assignmentId,
  });

  let userId;
  if (params.studentId) {
    userId = params.studentId;
  } else if (params.facultyId) {
    userId = params.facultyId;
  }

  if (isLoading) return <p>Loading alerts...</p>;
  if (!notes.length) return <p>No alerts found.</p>;

  const panelTitle = notes.map((n) => n.title).join(", ");

  return (
    <PatientCollapsiblePanel
      assignmentId={assignmentId}
      userId={userId}
      patient_id={patient_id}
      title={panelTitle}
    >
      {notes.map((note) => (
        <PatientMedicalAllergies
          key={note.note_id}
          noteId={note.note_id}
          title={note.title}
          desc={note.description}
        />
      ))}
    </PatientCollapsiblePanel>
  );
};

export default PatientNotesList;
