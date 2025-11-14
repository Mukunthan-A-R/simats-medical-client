import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

// Fetch all secondary vital types for dropdown
export const fetchSecondaryVitalsDropdown = () => {
  return axiosInstance.get(`${BASE_URL}/api/secondary-vitals/dropdown`);
};
