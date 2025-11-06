import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const fetchDoctorCaseRecords = async (doctorId) => {
  if (!doctorId) {
    console.warn("fetchDoctorCaseRecords called without a doctorId");
    return null;
  }

  const response = await axiosInstance.get(
    `${BASE_URL}/api/case-records/doctor/patients/${doctorId}`
  );

  return response.data;
};

export const approveCaseRecord = async (recordId) => {
  if (!recordId) {
    console.warn("approveCaseRecord called without a recordId");
    return null;
  }

  const response = await axiosInstance.put(
    `${BASE_URL}/api/case-records/doctor/patients/${recordId}/approve`
  );

  return response.data;
};
