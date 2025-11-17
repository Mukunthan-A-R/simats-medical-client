import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

// Create a secondary vital
export const createSecondaryVital = async (data) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/secondary-vitals`,
    data
  );
  return response.data;
};

// Get all vitals for an assignment (optional but common)
export const getAllSecondaryVitals = async (assignmentId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/secondary-vitals?assignment_id=${assignmentId}`
  );
  return response.data;
};

// Get latest vitals for an assignment (only if you want this endpoint)
export const getLatestSecondaryVital = async (assignmentId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/secondary-vitals/latest/${assignmentId}`
  );
  return response.data;
};
