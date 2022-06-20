import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/profile/";

const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const profileService = {
  getProfile,
};

export default profileService;
