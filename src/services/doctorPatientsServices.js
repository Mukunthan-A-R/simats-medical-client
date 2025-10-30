import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const fetchDoctorPatients = async (doctorId) => {
  if (!doctorId) {
    console.warn("fetchDoctorById called without an ID");
    return null;
  }

  const response = await axios.get(
    `${BASE_URL}/api/my-patients/doctor/${doctorId}`
  );
  return response.data;
};
