import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "databases",
  initialState: {
    databases: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    databasesRequest: (state) => {
      state.loading = true;
    },
    databasesRequestFailed: (state, action) => {
      const { message } = action.payload;
      state.success = null;
      state.loading = false;
      state.error = message;
    },
    databasesLoadSucceeded: (state, action) => {
      const { databases } = action.payload;
      state.success = null;
      state.loading = false;
      state.error = null;
      state.databases = databases;
    },
  },
});

const { databasesRequest, databasesRequestFailed, databasesLoadSucceeded } =
  slice.actions;

export const getAllDatabases = () =>
  apiCallBegan({
    url: "/api/v1/databases/getAll",
    method: "get",
    onStart: databasesRequest.type,
    onSuccess: databasesLoadSucceeded.type,
    onError: databasesRequestFailed.type,
  });

export default slice.reducer;
