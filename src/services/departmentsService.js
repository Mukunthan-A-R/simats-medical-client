import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const fetchDepartments = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/departments/dropdown`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching departments:", err);
    return [];
  }
};
