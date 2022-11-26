import * as api from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllTeams = createAsyncThunk("teams/teamsGet", async () => {

  try {
    const { data } = await api.getAllTeams();
    console.log(data);
    return data;
  } catch (error) {
    console.error("error thunk ==> ", error.response.data);
    return error;
  }
});
