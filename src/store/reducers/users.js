import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "users",
  initialState: {
    user: {},
    users: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    userRequested: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    userRequestFailed: (state, action) => {
      const { message } = action.payload;
      state.success = false;
      state.loading = false;
      state.error = message;
    },
    usersLoaded: (state, action) => {
      const { users } = action.payload;
      state.users = users;
      state.loading = false;
      state.error = null;
      state.success = true;
    },
  },
});

const { userRequested, userRequestFailed, usersLoaded } = slice.actions;

export const loadUsers = () =>
  apiCallBegan({
    url: "api/v1/users/getAll",
    method: "GET",
    onStart: userRequested.type,
    onSuccess: usersLoaded.type,
    onError: userRequestFailed.type,
  });

export default slice.reducer;
