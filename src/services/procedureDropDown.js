import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch procedures for a specific department by deptId
export const fetchProceduresForDropdown = async (deptId) => {
  if (!deptId) return { data: [] }; // avoid undefined

  const res = await axiosInstance.get(
    `${BASE_URL}/api/procedures/dropdown/${deptId}`
  );
  return res.data;
};
