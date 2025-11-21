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

// Fetch a procedure form by ID
export const fetchProcedureFormById = async (formId) => {
  if (!formId) return null;

  try {
    const response = await axiosInstance.get(`${BASE_URL}/${formId}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching procedure form:", err);
    return null;
  }
};
