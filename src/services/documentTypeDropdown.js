import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch all document types for dropdown
export const fetchDocumentTypesForDropdown = async () => {
  const res = await axiosInstance.get(
    `${BASE_URL}/api/document-types/dropdown`
  );
  return res.data;
};
