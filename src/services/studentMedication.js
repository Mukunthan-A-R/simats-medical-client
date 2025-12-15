import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/student-medication";
// Fetch all medications for a given assignment_id
export const fetchMedicationsByAssignment = async (assignmentId) => {
  if (!assignmentId) {
    console.warn("fetchMedicationsByAssignment called without an assignmentId");
    return [];
  }

  const response = await axiosInstance.get(`${BASE_URL}/${assignmentId}`);
  // Return only the array of medications
  return response.data?.data || [];
};

// Create a new medication request
export const createMedicationRequest = async (medicationData) => {
  if (!medicationData) {
    console.warn("createMedicationRequest called without data");
    return null;
  }

  const response = await axiosInstance.post(BASE_URL, medicationData);
  return response.data;
};
