import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import profileService from "./profileService";

const initialState = {
  profile: {
    firstName: "",
    lastName: "",
  },
  error: null,
};

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  const token = localStorage.getItem("token");
  const response = await profileService.post(
    "/profile",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
});

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async ({ firstName, lastName }) => {
    const token = localStorage.getItem("token");
    await getProfile.put(
      "/profile",
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
