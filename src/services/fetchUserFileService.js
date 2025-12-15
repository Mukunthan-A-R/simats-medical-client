import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchUserFileById = async (fileId) => {
  if (!fileId) return null;

  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/user-file/${fileId}`,
      {
        responseType: "blob", // receive as Blob
      }
    );

    // Convert Blob to object URL for frontend usage
    const fileUrl = URL.createObjectURL(response.data);
    return fileUrl;
  } catch (err) {
    console.error("Error fetching user file:", err);
    return null;
  }
};
