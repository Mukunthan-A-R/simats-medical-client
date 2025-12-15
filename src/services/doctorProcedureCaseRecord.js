import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

// Fetch all procedure case records for a doctor
export const fetchDoctorProcedureCaseRecords = async (doctorId) => {
  if (!doctorId) return null;
  const response = await axiosInstance.get(
    `${BASE_URL}/api/doctor/procedure-case-records/${doctorId}`
  );
  return response.data;
};

// Approve a procedure case record
export const approveProcedureCaseRecord = async (recordId) => {
  if (!recordId) return null;
  const response = await axiosInstance.put(
    `${BASE_URL}/api/doctor/procedure-case-records/${recordId}/approve`
  );
  return response.data;
};

// Reject a procedure case record
export const rejectProcedureCaseRecord = async (recordId) => {
  if (!recordId) return null;
  const response = await axiosInstance.put(
    `${BASE_URL}/api/doctor/procedure-case-records/${recordId}/reject`
  );
  return response.data;
};
