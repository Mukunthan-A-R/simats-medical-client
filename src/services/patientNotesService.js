import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch all notes for an assignment
export const fetchPatientNotesByAssignment = async (assignmentId) => {
  if (!assignmentId) return null;
  const response = await axiosInstance.get(
    `${BASE_URL}/api/patient-notes/${assignmentId}`
  );
  return response.data;
};

// Create a new patient note
export const createPatientNote = async (noteData) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/patient-notes`,
    noteData
  );
  return response.data;
};

// Deactivate (soft-delete) a note
export const deactivatePatientNote = async (noteId) => {
  const response = await axiosInstance.patch(
    `${BASE_URL}/api/patient-notes/${noteId}/deactivate`
  );
  return response.data;
};
