import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
import userReducer from "./fracture/Users/UserSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
