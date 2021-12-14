import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {},

    middleware: (getDefaultMiddleware) => {
      getDefaultMiddleware().concat([api]);
    },
  });

  return store;
}
