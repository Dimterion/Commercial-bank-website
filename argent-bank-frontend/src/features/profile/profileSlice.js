import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import profileService from "./profileService";

const initialState = {
  firstName: "",
  lastName: "",
  error: null,
};

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue("Error happened.");
    }
  }
);

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async ({ firstName, lastName }) => {
    const token = localStorage.getItem("token");
    await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { firstName, lastName },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return { firstName, lastName };
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {});
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.firstName = payload.body.firstName;
      state.lastName = payload.body.lastName;
    });
    builder.addCase(getProfile.rejected, (state, { error }) => {
      state.error = error.message;
    });
    builder.addCase(editProfile.fulfilled, (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    });
    builder.addCase(editProfile.rejected, (state, { error }) => {
      state.error = error.message;
      console.log(error);
    });
  },
});

export default profileSlice.reducer;
