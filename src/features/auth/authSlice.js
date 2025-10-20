import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "./authAPI.js";

const initialState = {
  token: null,
  error: null,
};

const signUp = createAsyncThunk(
  "auth/signup",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await authAPI.signUp({ email, password });
      return data.access_token;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await authAPI.login({ email, password });
      return data.access_token;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export { signUp, login };
export default authSlice.reducer;
