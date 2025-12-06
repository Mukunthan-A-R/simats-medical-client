import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

// Fetch all document types for dropdown
export const fetchDocumentTypesForDropdown = async () => {
  const res = await axiosInstance.get(
    `${BASE_URL}/api/document-types/dropdown`
  );
  return res.data;
};
