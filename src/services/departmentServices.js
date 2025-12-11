import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

// 🔹 Create a new department
export const createDepartment = async (payload) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/admin/create-department`,
    payload
  );
  return response.data;
};
