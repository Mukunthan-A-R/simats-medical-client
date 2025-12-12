import { useQuery } from "@tanstack/react-query";
import PatientCollapsiblePanel from "./PatientCollapsiblePanel";
import PatientMedicalAllergies from "./PatientMedicalAllergies";
import { fetchPatientNotesByAssignment } from "../../../services/patientNotesService";

const PatientNotesList = ({ patientData }) => {
  console.log(patientData);

  const { assignment_id: assignmentId, patient_id, student_id } = patientData;

  const { data: notes = [], isLoading } = useQuery({
    queryKey: ["patientNotes", assignmentId],
    queryFn: () => fetchPatientNotesByAssignment(assignmentId),
    enabled: !!assignmentId,
  });

  console.log("assignmentId");
  console.log(assignmentId);
  console.log(patient_id);
  console.log(student_id);

  if (isLoading) return <p>Loading alerts...</p>;
  if (!notes.length) return <p>No alerts found.</p>;

  const panelTitle = notes.map((n) => n.title).join(", ");

  return (
    <PatientCollapsiblePanel
      assignmentId={assignmentId}
      student_id={student_id}
      patient_id={patient_id}
      title={panelTitle}
    >
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
