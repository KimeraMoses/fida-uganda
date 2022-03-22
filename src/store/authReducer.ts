import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/User";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("setUser", action.payload);
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

const { setUser, clearUser } = slice.actions;

export const loginUser = (user: IUser) => ({
  type: setUser.type,
  payload: user,
});

export const logoutUser = () => ({
  type: clearUser.type,
});

export default slice.reducer;
