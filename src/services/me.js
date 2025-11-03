import axiosInstance from "../api/axiosInstance";

export const fetchCurrentUser = async () => {
  const response = await axiosInstance.get("/api/me");
  console.log(response.data);
  return response.data;
};
