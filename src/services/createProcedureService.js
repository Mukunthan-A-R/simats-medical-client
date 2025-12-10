import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

// 🔹 Create a new procedure
export const createProcedure = async (payload) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/admin/create-procedure`,
    payload
  );
  return response.data;
};
