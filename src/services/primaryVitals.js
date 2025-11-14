import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const createPrimaryVitals = async (data) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/primary-vitals`,
    data
  );
  return response.data;
};
