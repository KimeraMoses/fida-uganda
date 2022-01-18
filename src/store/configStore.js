import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import authReducer from "./reducers/auth";
import clvReducer from "./reducers/clv";
import tasksReducer from "./reducers/tasks";
import projectsReducer from "./reducers/projects";
import databasesReducer from "./reducers/databases";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      clv: clvReducer,
      tasks: tasksReducer,
      projects: projectsReducer,
      databases: databasesReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
  });

  return store;
}
