import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/fetch-file";

// Fetch file (image/PDF) by file_id (field_id)
export const fetchFileByFieldId = async (fileId) => {
  if (!fileId) return null;

  try {
    const response = await axiosInstance.get(`${BASE_URL}/${fileId}`, {
      responseType: "blob", // get file as Blob
    });
    // console.log("response");
    // console.log(response);

    // Convert Blob to object URL for frontend usage
    const fileUrl = URL.createObjectURL(response.data);
    return fileUrl;
  } catch (err) {
    console.error("Error fetching file:", err);
    return null;
  }
};
