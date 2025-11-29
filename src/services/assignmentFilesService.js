import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/assignment-files";

// Fetch paginated assignment files metadata by assignmentId
export const fetchAssignmentFilesMetadata = async (
  assignmentId,
  limit = 20,
  offset = 0
) => {
  if (!assignmentId) return [];

  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/${assignmentId}/files`,
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
