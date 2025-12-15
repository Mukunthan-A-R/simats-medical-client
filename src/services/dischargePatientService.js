import axiosInstance from "../api/axiosInstance";

const BASE_URL = "/api/discharge-patient";

// Fetch single patient data by assignmentId
export const fetchSinglePatientData = async (assignmentId) => {
  const res = await axiosInstance.get(`${BASE_URL}/${assignmentId}`);
  return res.data;
};
