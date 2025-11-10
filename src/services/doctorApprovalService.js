import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

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
