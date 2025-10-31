import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const fetchDoctorById = async (id) => {
  if (!id) {
    console.warn("fetchDoctorById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(`${BASE_URL}/api/doctor/${id}`);
  return response.data;
};
