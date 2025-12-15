import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Create a new procedure case record
export const createProcedureCaseRecord = async (caseRecordData) => {
  if (!caseRecordData) {
    console.warn("createProcedureCaseRecord called without caseRecordData");
    return null;
  }

  const response = await axiosInstance.post(
    `${BASE_URL}/api/procedure-case-record/patient`,
    caseRecordData
  );

  return response.data;
};

// Fetch single procedure case record by record_id
export const fetchProcedureCaseRecordById = async (recordId) => {
  if (!recordId) {
    console.warn("fetchProcedureCaseRecordById called without recordId");
    return null;
  }

  const response = await axiosInstance.get(
    `${BASE_URL}/api/procedure-case-record/patient/${recordId}`
  );

  return response.data;
};

// Fetch all procedure case records by assignment_id
export const fetchProcedureCaseRecordsByAssignment = async (assignmentId) => {
  if (!assignmentId) {
    console.warn(
      "fetchProcedureCaseRecordsByAssignment called without assignmentId"
    );
    return null;
  }

  const response = await axiosInstance.get(
    `${BASE_URL}/api/procedure-records/assignment/${assignmentId}`
  );

  return response.data;
};
