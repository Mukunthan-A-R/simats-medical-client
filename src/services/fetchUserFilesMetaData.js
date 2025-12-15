import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchUserFilesMetadata = async (assignmentId) => {
  if (!assignmentId) return [];

  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/user-fetch-files/assignment/${assignmentId}`
    );
    // response.data.files contains the array of files
    return response.data?.files || [];
  } catch (err) {
    console.error("Error fetching user files metadata:", err);
    return [];
  }
};
