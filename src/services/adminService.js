import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchAdminById = async (id) => {
  if (!id) {
    console.warn("fetchAdminById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(`${BASE_URL}/api/admin/${id}`);
  return response.data;
};
