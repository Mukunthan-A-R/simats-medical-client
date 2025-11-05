import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const fetchPatientCaseRecords = async (assignmentId) => {
  if (!assignmentId) {
    console.warn("fetchPatientCaseRecords called without an assignmentId");
    return null;
  }

  const response = await axiosInstance.get(
    `${BASE_URL}/api/fetch-case-records/patient/${assignmentId}`
  );
  return response.data;
};
