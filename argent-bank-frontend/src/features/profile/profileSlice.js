import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/profile";

const initialState = {
  firstName: "",
  lastName: "",
  error: null,
};

// Accessing the profile data.
export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_payload, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        API_URL,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue("An error occurred.");
    }
  }
);

// Editing the profile data.
export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async ({ firstName, lastName }) => {
    const token = localStorage.getItem("token");
    await axios.put(
      API_URL,
      { firstName, lastName },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return { firstName, lastName };
  }
);

// Creating the slice and reducers.
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (_state) => {});
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
