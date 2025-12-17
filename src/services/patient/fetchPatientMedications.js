import axiosInstance from "../../api/axiosInstance";
import { BASE_URL } from "../../config/apiConfig";

export const fetchPatientMedications = async (assignment_id, patient_id) => {
  if (!assignment_id || !patient_id) {
    throw new Error("Assignment ID and Patient ID are required");
  }

  // Axios will throw automatically for non-2xx responses
  const response = await axiosInstance.get(
    `${BASE_URL}/api/patient/medication/${assignment_id}/patient/${patient_id}`
  );

  return response.data;
};
