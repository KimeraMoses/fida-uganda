import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import authReducer from "./reducers/auth";

export default function configureAppStore() {
  const store = configureStore({
    reducer: { auth: authReducer },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
  });

  return store;
}
