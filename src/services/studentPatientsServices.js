import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchStudentPatients = async (studentId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/my-patients/student/${studentId}`
  );
  return response.data;
};
