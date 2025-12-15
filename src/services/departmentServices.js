import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// 🔹 Create a new department
export const createDepartment = async (payload) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/admin/create-department`,
    payload
  );
  return response.data;
};
