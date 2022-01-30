import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import authReducer from "./reducers/auth";
import clvReducer from "./reducers/clv";
import tasksReducer from "./reducers/tasks";
import projectsReducer from "./reducers/projects";
import databasesReducer from "./reducers/databases";
import casesReducer from "./reducers/cases";
import registrationReducer from "./reducers/registration";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      clv: clvReducer,
      tasks: tasksReducer,
      projects: projectsReducer,
      databases: databasesReducer,
      cases: casesReducer,
      registration: registrationReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api]),
  });

  return store;
}
