import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const fetchAdminById = async (id) => {
  if (!id) {
    console.warn("fetchAdminById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(`${BASE_URL}/api/admin/${id}`);
  return response.data;
};
