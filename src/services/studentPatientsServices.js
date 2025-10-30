// studentService.js
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const fetchStudentPatients = async (studentId) => {
  const response = await axios.get(
    `${BASE_URL}/api/my-patients/student/${studentId}`
  );
  return response.data;
};
