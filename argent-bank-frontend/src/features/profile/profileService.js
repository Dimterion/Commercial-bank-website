import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/profile/";

const profile = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("profile", JSON.stringify(response.data));
  }

  return response.data;
};

export default profile;
