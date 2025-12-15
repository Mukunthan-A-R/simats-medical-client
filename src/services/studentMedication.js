import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch all medications for a given assignment_id
export const fetchMedicationsByAssignment = async (assignmentId) => {
  if (!assignmentId) {
    console.warn("fetchMedicationsByAssignment called without an assignmentId");
    return [];
  }

  const response = await axiosInstance.get(
    `${BASE_URL}/api/student-medication/${assignmentId}`
  );
  // Return only the array of medications
  return response.data?.data || [];
};

// Create a new medication request
export const createMedicationRequest = async (medicationData) => {
  if (!medicationData) {
    console.warn("createMedicationRequest called without data");
    return null;
  }

  const response = await axiosInstance.post(
    `${BASE_URL}/api/student-medication`,
    medicationData
  );
  return response.data;
};
