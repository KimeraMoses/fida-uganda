import { createSlice } from "@reduxjs/toolkit";

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

export default slice.reducer;
