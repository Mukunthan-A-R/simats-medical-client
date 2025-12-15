import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchPatientById = async (id) => {
  if (!id) {
    console.warn("fetchPatientById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(`${BASE_URL}/api/patient/${id}`);
  return response.data;
};
