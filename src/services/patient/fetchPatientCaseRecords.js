import axiosInstance from "../../api/axiosInstance";
import { BASE_URL } from "../../config/apiConfig";

export const fetchPatientCaseRecordsData = async (assignmentId) => {
  if (!assignmentId) {
    throw new Error("Assignment ID is required");
  }

  const response = await axiosInstance.get(
    `${BASE_URL}/api/patient/case-records/${assignmentId}`
  );

  return response.data;
};
