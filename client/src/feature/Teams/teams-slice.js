import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTeams } from "./teams-thunk";

const initialState = {
  data: {},
  loading: false,
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllTeams.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllTeams.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchAllTeams.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default teamsSlice.reducer;
