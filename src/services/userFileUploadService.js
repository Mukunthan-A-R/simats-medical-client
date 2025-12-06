import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/user-uploaded-files";

/**
 * Upload multiple user files with metadata using FormData
 * @param {FormData} formData - FormData containing files and metadata
 * @returns {Promise<Object>} - uploaded files info from backend
 */
export const uploadUserFiles = async (formData) => {
  if (!formData) return null;

  try {
    const response = await axiosInstance.post(`${BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Axios handles boundaries automatically
      },
    });

    return response.data; // { files: [...] }
  } catch (err) {
    console.error("Error uploading user files:", err);
    return null;
  }
};
