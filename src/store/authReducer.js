import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      localStorage.setItem("token", token);
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

const { setUser, clearUser } = slice.actions;

export const loginUser = (user) => ({
  type: setUser.type,
  payload: user,
});

export const logoutUser = () => ({
  type: clearUser.type,
});

export default slice.reducer;
