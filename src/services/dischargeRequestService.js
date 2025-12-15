import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/discharge-request";

// STUDENT: Request Discharge
export const requestDischarge = async (assignmentId) => {
  if (!assignmentId) return null;

  const response = await axiosInstance.post(
    `${BASE_URL}/student/${assignmentId}`
  );
  return response.data;
};

// STUDENT: Check Discharge Status
export const getDischargeStatus = async (assignmentId) => {
  if (!assignmentId) return null;

  const response = await axiosInstance.get(
    `${BASE_URL}/student/${assignmentId}`
  );
  return response.data;
};

// DOCTOR: Pending Requests
export const fetchPendingDischargeRequests = async (doctorId) => {
  if (!doctorId) return null;

  const response = await axiosInstance.get(
    `${BASE_URL}/doctor/pending/${doctorId}`
  );
  return response.data;
};

// DOCTOR: Approve Discharge
export const approveDischargeRequest = async (assignmentId) => {
  if (!assignmentId) return null;

  const response = await axiosInstance.patch(
    `${BASE_URL}/doctor/${assignmentId}/approve`
  );
  return response.data;
};

// DOCTOR: Reject Discharge
export const rejectDischargeRequest = async (assignmentId, reason) => {
  if (!assignmentId || !reason) return null;

  const response = await axiosInstance.patch(
    `${BASE_URL}/doctor/${assignmentId}/reject`,
    { reason }
  );
  return response.data;
};
