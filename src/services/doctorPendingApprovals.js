import axiosInstance from "../api/axiosInstance";
import { BASE_URL } from "../config/apiConfig";

export const fetchPendingAdmissions = async (doctorId) => {
  if (!doctorId) {
    console.warn("fetchPendingAdmissions called without a doctor ID");
    return null;
  }

  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/admission-pending/${doctorId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching pending admissions:", error);
    return null;
  }
};
