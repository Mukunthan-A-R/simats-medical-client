import React from "react";
import PatientCollapsiblePanel from "../../students/patient-notes/PatientCollapsiblePanel";
import PatientMedicalAllergies from "../../students/patient-notes/PatientMedicalAllergies";
import { fetchPatientNotes } from "../../../services/patient/patientNotes";
import { useQuery } from "@tanstack/react-query";

const PatientNotesHolder = ({ patient_id, assignment_id }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["patientNotes", patient_id, assignment_id],
    queryFn: () => fetchPatientNotes(assignment_id, patient_id),
    enabled: !!patient_id && !!assignment_id,
    // retry: false,
  });

  if (isLoading)
    return (
      <div className="text-yellow-800 pb-1 px-4">Loading patient notes...</div>
    );
  if (error)
    return <div className="text-red-500 pb-1 px-4">Error loading notes !</div>;

  const notes = data?.data;
  const panelTitle = notes?.map((n) => n.title).join(", ");
  return (
    <div>
      <PatientCollapsiblePanel title={panelTitle}>
        {data?.data?.map((note) => (
          <PatientMedicalAllergies
            key={note.note_id}
            title={note.title}
            desc={note.description}
          />
        ))}
      </PatientCollapsiblePanel>
      {/* <PatientCollapsiblePanel
        title={"Penicillin Allergy, Asthma, ACE Inhibitor Precaution"}
      >
        <PatientMedicalAllergies
          title={"Penicillin Allergy"}
          desc={
            "Severe allergic reaction to penicillin and related antibiotics."
          }
        ></PatientMedicalAllergies>
        <PatientMedicalAllergies
          title={"Penicillin Allergy"}
          desc={
            "Severe allergic reaction to penicillin and related antibiotics."
          }
        ></PatientMedicalAllergies>
      </PatientCollapsiblePanel> */}
    </div>
  );
};

export default PatientNotesHolder;
