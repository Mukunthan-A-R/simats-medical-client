import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const loginUser = async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/api/login`, {
    id: username,
    password,
  });
  //   console.log(response);

  return response.data;
};
