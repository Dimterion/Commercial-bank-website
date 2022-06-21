import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user";

const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, config);

  return response.data;
};

const editProfile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, profileData, config);

  return response.data;
};

const profileService = {
  getProfile,
  editProfile,
};

export default profileService;
