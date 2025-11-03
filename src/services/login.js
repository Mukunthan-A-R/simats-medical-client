import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const loginUser = async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/api/login`, {
    id: username,
    password,
  });
  // console.log("response");
  console.log(response);

  const { token, user } = response.data;

  if (token) {
    localStorage.setItem("authToken", token);
  }

  return user;
};
