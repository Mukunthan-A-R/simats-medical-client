import { useQuery } from "@tanstack/react-query";
import PatientCollapsiblePanel from "./PatientCollapsiblePanel";
import PatientMedicalAllergies from "./PatientMedicalAllergies";
import { fetchPatientNotesByAssignment } from "../../../services/patientNotesService";

const PatientNotesList = ({ assignmentId }) => {
  const { data: notes = [], isLoading } = useQuery({
    queryKey: ["patientNotes", assignmentId],
    queryFn: () => fetchPatientNotesByAssignment(assignmentId),
    enabled: !!assignmentId,
  });

  if (isLoading) return <p>Loading alerts...</p>;
  if (!notes.length) return <p>No alerts found.</p>;

  const panelTitle = notes.map((n) => n.title).join(", ");

  return (
    <PatientCollapsiblePanel title={panelTitle}>
      {notes.map((note) => (
        <PatientMedicalAllergies
          key={note.note_id}
          title={note.title}
          desc={note.description}
        />
      ))}
    </PatientCollapsiblePanel>
  );
};

export default PatientNotesList;
