import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const doctorRequestAdmission = async (payload) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/doctor-request`,
    payload
  );

  return response.data;
};
