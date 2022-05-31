import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "client",
  initialState: {
    client: null,
  },
  reducers: {
    setClient: (state, action) => {
      if (!state.client) {
        state.client = action.payload;
      } else {
        state.client = { ...state.client, ...action.payload };
      }
    },
    setClientNull: (state) => {
      state.client = null;
    },
  },
});

const { setClient, setClientNull } = slice.actions;

export const selectClient = (id) => ({
  type: setClient.type,
  payload: id,
});

export const resetClient = () => ({
  type: setClientNull.type,
});

export default slice.reducer;
