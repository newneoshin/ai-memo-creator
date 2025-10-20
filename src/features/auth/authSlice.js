import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, resetToken } = authSlice.actions;

export default authSlice.reducer;
