import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/doctor-medication";

export const fetchDoctorMedications = async (doctorId, status = "pending") => {
  const response = await axiosInstance.get(`${BASE_URL}/${doctorId}`, {
    params: { status },
  });
  return response.data;
};

export const updateDoctorApprovalStatus = async (medicationId, status) => {
  const response = await axiosInstance.patch(`${BASE_URL}/`, {
    medication_id: medicationId,
    status,
  });
  return response.data;
};
