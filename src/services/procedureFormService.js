import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/procedure-forms";

// Create a new procedure form
export const createProcedureForm = async (formData) => {
  try {
    const response = await axiosInstance.post(BASE_URL, formData);
    return response.data;
  } catch (err) {
    console.error("Error creating procedure form:", err);
    throw err;
  }
};
