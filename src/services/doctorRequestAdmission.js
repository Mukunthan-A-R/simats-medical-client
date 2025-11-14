import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const doctorRequestAdmission = async (payload) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/api/doctor-request`,
    payload
  );

  return response.data;
};
