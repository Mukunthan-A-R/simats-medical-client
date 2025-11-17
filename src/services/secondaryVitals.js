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

// Get latest secondary vitals for an assignment
export const getLatestSecondarySecondaryVitals = async (assignmentId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/secondary-vitals/recent/${assignmentId}`
  );
  return response.data;
};
