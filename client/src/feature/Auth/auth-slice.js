import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./auth-thunk";

const initialState = {
  data: {},
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.loading = false;
    },
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.data = action.payload;
      console.log("slice signup ===> ", action.payload);
      state.loading = false;
    },
    [signup.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
