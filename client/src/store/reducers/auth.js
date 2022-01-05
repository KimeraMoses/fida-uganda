import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { APP_PREFIX } from "../../hooks/useLocalStorage";

const slice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    user: null,
    success: null,
  },
  reducers: {
    userAuthenticated: (auth, action) => {
      const { user, token } = action.payload;
      const { email, first_name, last_name, id, designation } = user;
      window.localStorage.setItem(`${APP_PREFIX}token`, token);
      auth.user = { email, first_name, last_name, id, designation };
      auth.error = null;
      auth.loading = false;
    },
    userAuthFailed: (auth, action) => {
      const { message } = action.payload;
      auth.success = null;
      auth.error = message;
      auth.loading = false;
    },
    userLoggedOut: (auth) => {
      auth.user = null;
      auth.error = null;
      auth.success = null;
      auth.loading = false;
      window.localStorage.removeItem(`${APP_PREFIX}token`);
    },
    userDataLoading: (auth) => {
      auth.loading = true;
    },
    passwordResetSucceeded: (auth, action) => {
      const { message } = action.payload;
      auth.error = null;
      auth.success = message;
      auth.loading = false;
    },
    passwordResetFailed: (auth, action) => {
      const { message } = action.payload;
      auth.success = null;
      auth.loading = false;
      auth.error = message;
    },
    errorDismissed: (auth) => {
      auth.error = null;
      auth.success = null;
    },
  },
});

const {
  userAuthenticated,
  userAuthFailed,
  userLoggedOut,
  userDataLoading,
  passwordResetSucceeded,
  passwordResetFailed,
  errorDismissed,
} = slice.actions;

export const resetPassword = (email) =>
  apiCallBegan({
    url: "/api/v1/users/forgotPassword",
    method: "post",
    data: { email },
    onStart: userDataLoading.type,
    onSuccess: passwordResetSucceeded.type,
    onError: passwordResetFailed.type,
  });

export const dismissAlert = () => ({
  type: errorDismissed.type,
});

export const getUser = () =>
  apiCallBegan({
    url: "/api/v1/users/me",
    method: "get",
    onStart: userDataLoading.type,
    onSuccess: userAuthenticated.type,
    onError: userAuthFailed.type,
  });

export const logOut = () => ({
  type: userLoggedOut.type,
});

export const logIn = (email, password) =>
  apiCallBegan({
    url: "/api/v1/users/login",
    method: "post",
    data: { email, password },
    onStart: userDataLoading.type,
    onSuccess: userAuthenticated.type,
    onError: userAuthFailed.type,
  });

export const signUp = (email, firstName, lastName, role, designation) =>
  apiCallBegan({
    url: "/api/v1/users/signup",
    method: "post",
    data: {
      email,
      first_name: firstName,
      last_name: lastName,
      role,
      designation,
      password: "password",
    },
    onStart: userDataLoading.type,
    onSuccess: userAuthenticated.type,
    onError: userAuthFailed.type,
  });

export default slice.reducer;
