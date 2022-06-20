import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    loading: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
  },
});
// loginStart = (data) => { type: 'auth/loginStart', payload: data }
export const { loginStart } = authSlice.actions;
export const authReducer = authSlice.reducer;
