import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch single patient data by assignmentId
export const fetchSinglePatientData = async (assignmentId) => {
  const res = await axiosInstance.get(`${BASE_URL}/${assignmentId}`);
  return res.data;
};
