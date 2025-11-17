import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

// Fetch procedures for a specific department by deptId
export const fetchProceduresForDropdown = async (deptId) => {
  if (!deptId) return { data: [] }; // avoid undefined

  const res = await axiosInstance.get(
    `${BASE_URL}/api/procedures/dropdown/${deptId}`
  );
  return res.data;
};
