import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "tasks",
  initialState: {
    loading: false,
    error: null,
    success: null,
    tasks: [],
    task: null,
    comments: {},
  },
  reducers: {
    tasksRequest: (state) => {
      state.loading = true;
    },
    tasksRequestFailed: (state, action) => {
      const { message } = action.payload;
      state.success = null;
      state.loading = false;
      state.error = message;
    },
    taskCreationSucceeded: (state, action) => {
      const { task } = action.payload;
      state.tasks.push(task);
      state.loading = false;
      state.error = null;
      state.success = "Task created successfully";
    },
    taskLoadSucceeded: (state, action) => {
      const { task } = action.payload;
      state.success = null;
      state.loading = false;
      state.error = null;
      state.task = task;
    },
    tasksLoadSucceeded: (state, action) => {
      const { tasks } = action.payload;
      state.success = null;
      state.loading = false;
      state.error = null;
      state.tasks = tasks;
    },
    commentCreationSucceeded: (state, action) => {
      const { comment } = action.payload;
      state.comments.push(comment);
      state.loading = false;
      state.error = null;
      state.success = "Comment created successfully";
    },
    commentsLoadSucceeded: (state, action) => {
      const { comments } = action.payload;
      state.success = null;
      state.loading = false;
      state.error = null;
      console.log(comments);
      if (comments) {
        state.comments[comments[0].task] = comments;
      }
    },
  },
});

const {
  tasksRequest,
  tasksRequestFailed,
  taskCreationSucceeded,
  taskLoadSucceeded,
  tasksLoadSucceeded,
  commentsLoadSucceeded,
} = slice.actions;

export const createTask = (task) =>
  apiCallBegan({
    url: "/api/v1/tasks/create",
    method: "post",
    data: { ...task },
    onStart: tasksRequest.type,
    onSuccess: taskCreationSucceeded.type,
    onError: tasksRequestFailed.type,
  });

export const getTask = (id) =>
  apiCallBegan({
    url: `/api/v1/tasks/${id}`,
    method: "get",
    onStart: tasksRequest.type,
    onSuccess: taskLoadSucceeded.type,
    onError: tasksRequestFailed.type,
  });

export const getUserTasks = () =>
  apiCallBegan({
    url: "/api/v1/tasks/getUserTasks",
    method: "get",
    onStart: tasksRequest.type,
    onSuccess: tasksLoadSucceeded.type,
    onError: tasksRequestFailed.type,
  });

export const getAllTasks = () =>
  apiCallBegan({
    url: "/api/v1/tasks/getAll",
    method: "get",
    onStart: tasksRequest.type,
    onSuccess: tasksLoadSucceeded.type,
    onError: tasksRequestFailed.type,
  });

export const createComment = (task, comment) =>
  apiCallBegan({
    url: "/api/v1/comments/create",
    method: "post",
    data: { task, comment },
    onStart: tasksRequest.type,
    onSuccess: commentsLoadSucceeded.type,
    onError: tasksRequestFailed.type,
  });

export const getComments = (id) =>
  apiCallBegan({
    url: `/api/v1/tasks/${id}/comments/getAll`,
    method: "get",
    onStart: tasksRequest.type,
    onSuccess: commentsLoadSucceeded.type,
    onError: tasksRequestFailed.type,
  });

export default slice.reducer;
