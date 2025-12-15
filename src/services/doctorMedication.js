import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchDoctorMedications = async (doctorId, status = "pending") => {
  const response = await axiosInstance.get(
    `${BASE_URL}/api/doctor-medication/${doctorId}`,
    {
      params: { status },
    }
  );
  return response.data;
};

export const updateDoctorApprovalStatus = async (medicationId, status) => {
  const response = await axiosInstance.patch(
    `${BASE_URL}/api/doctor-medication/`,
    {
      medication_id: medicationId,
      status,
    }
  );
  return response.data;
};
