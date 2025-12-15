import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch paginated assignment files metadata by assignmentId
export const fetchAssignmentFilesMetadata = async (
  assignmentId,
  limit = 20,
  offset = 0
) => {
  if (!assignmentId) return [];

  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/assignment-files/${assignmentId}/files`,
      {
        params: { limit, offset },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching assignment files metadata:", err);
    return [];
  }
};
