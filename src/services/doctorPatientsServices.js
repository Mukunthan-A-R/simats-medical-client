import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchDoctorPatients = async (doctorId) => {
  if (!doctorId) {
    console.warn("fetchDoctorById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(
    `${BASE_URL}/api/my-patients/doctor/${doctorId}`
  );
  return response.data;
};
