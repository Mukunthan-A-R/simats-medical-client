import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

// Fetch all doctors for dropdown
export const fetchDoctorsForDropdown = () => {
  return axiosInstance.get(`${BASE_URL}/api/doctors/dropdown`);
};
