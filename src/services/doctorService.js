import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchDoctorById = async (id) => {
  if (!id) {
    console.warn("fetchDoctorById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(`${BASE_URL}/api/doctor/${id}`);
  return response.data;
};
