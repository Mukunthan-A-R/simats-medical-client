import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/user-fetch-files";

export const fetchUserFilesMetadata = async (assignmentId) => {
  if (!assignmentId) return [];

  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/assignment/${assignmentId}`
    );
    // response.data.files contains the array of files
    return response.data?.files || [];
  } catch (err) {
    console.error("Error fetching user files metadata:", err);
    return [];
  }
};
