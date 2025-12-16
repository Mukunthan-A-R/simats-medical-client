import axiosInstance from "../../api/axiosInstance";
import { BASE_URL } from "../../config/apiConfig";

export const fetchPatientNotes = async (assignment_id, patient_id) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/patient/notes/patient/${patient_id}/assignment/${assignment_id}`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching patient notes:", err);
    return [];
  }
};
