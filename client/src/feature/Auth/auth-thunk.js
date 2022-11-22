import * as api from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("login/loginPost", async (formData) => {

  try {
    const { data } = await api.signIn(formData);

    console.log("thunk ==> ", data);

    return data;
  } catch (error) {
    console.error("error thunk ==> ", error.response.data);
    return error;
  }
});

export const signup = createAsyncThunk("signup/signUp", async (formData) => {
  console.log('Thunks: ', formData);
  try {
    const response = await api.signUp(formData);
    console.log("Thunks: ", response);
    return response;
  } catch (error) {
    console.error("Thunks: ", error);
  }
});
