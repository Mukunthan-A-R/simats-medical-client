import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// 🔹 Create a new procedure
export const createProcedure = async (payload) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/admin/create-procedure`,
    payload
  );
  return response.data;
};
