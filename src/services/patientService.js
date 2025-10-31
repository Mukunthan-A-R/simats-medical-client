import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const fetchPatientById = async (id) => {
  if (!id) {
    console.warn("fetchPatientById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(`${BASE_URL}/api/patient/${id}`);
  return response.data;
};
