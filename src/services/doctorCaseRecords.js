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
