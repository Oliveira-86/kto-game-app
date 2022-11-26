import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../Auth/auth-slice";
import teamsReducer from "../Teams/teams-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teams: teamsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
