import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const updateDoctorApprovalStatus = async (
  requestId,
  doctorId,
  status,
  remarks
) => {
  const response = await axiosInstance.patch(
    `${BASE_URL}/api/doctor-approvals/${requestId}`,
    {
      doctor_id: doctorId,
      status,
      remarks,
    }
  );
  return response.data;
};
