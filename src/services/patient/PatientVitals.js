import axiosInstance from "../../api/axiosInstance";
import { BASE_URL } from "../../config/apiConfig";

export const fetchRecentSecondaryVitals = async (assignment_id, patient_id) => {
  if (!assignment_id || !patient_id) {
    throw new Error("Assignment ID and Patient ID are required");
  }

  const response = await axiosInstance.get(
    `${BASE_URL}/api/patient/vitals/patient/${patient_id}/assignment/${assignment_id}/recent`
  );

  return response.data;
};
