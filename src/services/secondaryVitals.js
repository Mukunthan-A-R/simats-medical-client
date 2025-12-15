import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Create a secondary vital
export const createSecondaryVital = async (data) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/secondary-vitals`,
    data
  );
  return response.data;
};

// Get latest secondary vitals for an assignment
export const getLatestSecondarySecondaryVitals = async (assignmentId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/secondary-vitals/recent/${assignmentId}`
  );
  return response.data;
};

// Get all secondary vitals for an assignment, optionally filtered by type_id
export const getAllSecondaryVitals = async (assignmentId, typeId = null) => {
  let url = `${BASE_URL}/api/secondary-vitals/all/${assignmentId}`;
  if (typeId) {
    url += `?type_id=${typeId}`;
  }
  const response = await axiosInstance.get(url);
  return response.data;
};
