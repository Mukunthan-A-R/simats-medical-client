import axios from "axios";
import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:5000";

export const fetchStudentById = async (id) => {
  if (!id) {
    console.warn("fetchStudentById called without an ID");
    return null;
  }

  const response = await axiosInstance.get(`${BASE_URL}/api/student/${id}`);
  return response.data;
};
