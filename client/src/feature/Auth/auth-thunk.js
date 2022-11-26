import * as api from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "login/loginPost",
  async (formData, navigate) => {
    try {
      const { data } = await api.signIn(formData);

      return data;
    } catch (error) {
      console.error("error thunk ==> ", error.response.data);
      return error;
    }
  }
);

export const signup = createAsyncThunk("signup/signUp", async (formData) => {
  try {
    const response = await api.signUp(formData);
    return response;
  } catch (error) {
    console.error("Thunks: ", error);
  }
});
