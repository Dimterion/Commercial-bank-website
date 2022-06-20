import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import profileService from "./profileService";

const initialState = {
  firstName: "",
  lastName: "",
  error: null,
};

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await profileService.getProfile(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
