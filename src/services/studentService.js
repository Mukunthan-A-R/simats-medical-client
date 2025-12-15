import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchStudentById = async (id) => {
  if (!id) {
    console.warn("fetchStudentById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(`${BASE_URL}/api/student/${id}`);
  return response.data;
};
