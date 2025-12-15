import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

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
