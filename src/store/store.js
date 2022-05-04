import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import caseFileReducer from "./caseFileReducer";

export const store = configureStore({
  reducer: { auth: authReducer, caseFile: caseFileReducer },
});
