import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const fetchStudentPatients = async (studentId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/my-patients/student/${studentId}`
  );
  return response.data;
};
