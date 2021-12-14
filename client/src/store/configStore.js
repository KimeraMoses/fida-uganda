import { configureStore } from "@reduxjs/toolkit";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => {
      getDefaultMiddleware().concat([]);
    },
  });

  return store;
}