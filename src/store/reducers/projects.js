import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    projectsRequested: (state) => {
      state.loading = true;
    },
    projectsRequestFailed: (state, action) => {
      const { message } = action.payload;
      state.success = null;
      state.loading = false;
      state.error = message;
    },
    projectCreationSucceeded: (state, action) => {
      const { project } = action.payload;
      state.projects.push(project);
      state.loading = false;
      state.error = null;
      state.success = "Project created successfully";
    },
    projectsLoadSucceeded: (state, action) => {
      const { projects } = action.payload;
      state.success = null;
      state.loading = false;
      state.error = null;
      state.projects = projects;
    },
  },
});

const {
  projectsRequested,
  projectsRequestFailed,
  projectCreationSucceeded,
  projectsLoadSucceeded,
} = slice.actions;

export const createProject = (values) =>
  apiCallBegan({
    url: "/api/v1/projects/create",
    method: "post",
    data: { ...values },
    onStart: projectCreationSucceeded.type,
    onSuccess: projectCreationSucceeded.type,
    onError: projectsRequestFailed.type,
  });

export const loadProject = (id) =>
  apiCallBegan({
    url: `/api/v1/projects/${id}`,
    method: "get",
    onStart: projectsRequested.type,
    onSuccess: projectsLoadSucceeded.type,
    onError: projectsRequestFailed.type,
  });

export const loadProjects = () =>
  apiCallBegan({
    url: "/api/v1/projects/getAll",
    method: "get",
    onStart: projectsRequested.type,
    onSuccess: projectsLoadSucceeded.type,
    onError: projectsRequestFailed.type,
  });

export default slice.reducer;
