import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "CLV",
  initialState: {
    CLV: null,
  },
  reducers: {
    setCLV: (state, action) => {
      if (!state.CLV) {
        state.CLV = action.payload;
      } else {
        state.CLV = { ...state.CLV, ...action.payload };
      }
    },
    setCLVNull: (state) => {
      state.CLV = null;
    },
  },
});

const { setCLV, setCLVNull } = slice.actions;

export const selectCLV = (id) => ({
  type: setCLV.type,
  payload: id,
});

export const resetCLV = () => ({
  type: setCLVNull.type,
});

export default slice.reducer;
