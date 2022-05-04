import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import caseFileReducer from "./caseFileReducer";
import clientReducer from "./clientReducer";
import memberReducer from "./memberReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    caseFile: caseFileReducer,
    member: memberReducer,
    client: clientReducer,
  },
});
