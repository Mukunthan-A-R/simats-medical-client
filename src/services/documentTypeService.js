import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/admin/file-type";

export const createDocumentType = async (type_name, description) => {
  try {
    const response = await axiosInstance.post(BASE_URL, {
      type_name,
      description,
    });
    return response.data; // { success: true, data: {...} }
  } catch (err) {
    console.error("Error creating document type:", err);
    // Optional: return error message to show in UI
    return { success: false, error: err.response?.data?.error || err.message };
  }
};
