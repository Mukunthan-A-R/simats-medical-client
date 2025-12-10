import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

// 🔹 Create new department
export const createDepartment = async (payload) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/departments`,
    payload
  );
  return response.data;
};
