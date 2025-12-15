import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch all secondary vital types for dropdown
export const fetchSecondaryVitalsDropdown = () => {
  return axiosInstance.get(`${BASE_URL}/api/secondary-vitals/dropdown`);
};
