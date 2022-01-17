import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import authReducer from "./reducers/auth";
import clvReducer from "./reducers/clv";
import tasksReducer from "./reducers/tasks";

export default function configureAppStore() {
  const store = configureStore({
    reducer: { auth: authReducer, clv: clvReducer, tasks: tasksReducer },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
  });

  return store;
}
