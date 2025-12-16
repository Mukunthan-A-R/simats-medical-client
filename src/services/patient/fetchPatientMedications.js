import axiosInstance from "../../api/axiosInstance";
import { BASE_URL } from "../../config/apiConfig";

export const fetchPatientMedications = async (assignment_id, patient_id) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/patient/medication/${assignment_id}/patient/${patient_id}`,
      {
        data: { patient_id },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching patient medications:", err);
    return [];
  }
};
