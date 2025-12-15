import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

/**
 * Upload multiple user files with metadata using FormData
 *
 * Required fields in FormData:
 * - files: File objects
 * - uploader_id: string (student_id or doctor_id)
 * - uploader_role: string ('student' or 'doctor')
 * - type_id: string or number (document type ID)
 * - patient_id: string (patient ID, required by new schema)
 * - assignment_id: number (assignment ID, required by new schema)
 *
 * @param {FormData} formData - FormData containing files and metadata
 * @returns {Promise<Object>} - uploaded files info from backend
 */
export const uploadUserFiles = async (formData) => {
  if (!formData) return null;

  try {
    const response = await axiosInstance.post(
      `${BASE_URL}/api/user-uploaded-files/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data; // { files: [...] }
  } catch (err) {
    console.error("Error uploading user files:", err);
    return null;
  }
};
