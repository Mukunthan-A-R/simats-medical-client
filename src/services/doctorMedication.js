import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000/api/doctor-medication";

export const fetchDoctorMedications = async (doctorId, status = "pending") => {
  const response = await axiosInstance.get(`${BASE_URL}/${doctorId}`, {
    params: { status },
  });
  return response.data;
};

export const updateDoctorApprovalStatus = async (
  medicationId,
  doctorId,
  status,
  remarks = ""
) => {
  const response = await axiosInstance.patch(`${BASE_URL}/${medicationId}`, {
    doctor_id: doctorId,
    status,
    remarks,
  });
  return response.data;
};
