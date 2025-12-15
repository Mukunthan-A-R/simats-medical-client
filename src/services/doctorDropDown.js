import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch all doctors for dropdown
export const fetchDoctorsForDropdown = () => {
  return axiosInstance.get(`${BASE_URL}/api/doctors/dropdown`);
};
