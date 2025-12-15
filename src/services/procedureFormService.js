import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Create a new procedure form
export const createProcedureForm = async (formData) => {
  try {
    const response = await axiosInstance.post(
      `${BASE_URL}/api/procedure-forms`,
      formData
    );
    return response.data;
  } catch (err) {
    console.error("Error creating procedure form:", err);
    throw err;
  }
};

// Fetch all forms under one procedure
export const getFormsByProcedure = async (procedureId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/procedure-forms/procedure/${procedureId}`
  );
  return response.data;
};
