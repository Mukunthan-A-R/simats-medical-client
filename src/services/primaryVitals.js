import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const createPrimaryVitals = async (data) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/primary-vitals`,
    data
  );
  return response.data;
};

export const getLatestPrimaryVitals = async (assignmentId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/primary-vitals/recent/${assignmentId}`
  );
  return response.data;
};

export const getAllPrimaryVitals = async (assignmentId) => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/primary-vitals/${assignmentId}`
  );
  return response.data;
};
