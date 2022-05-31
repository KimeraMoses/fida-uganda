import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "caseFile",
  initialState: {
    caseFile: null,
  },
  reducers: {
    setCaseFile: (state, action) => {
      if (!state.caseFile) {
        state.caseFile = action.payload;
      } else {
        state.caseFile = { ...state.caseFile, ...action.payload };
      }
    },
    setCaseFileNull: (state) => {
      state.caseFile = null;
    },
  },
});

const { setCaseFile, setCaseFileNull } = slice.actions;

export const selectCaseFile = (caseFile) => ({
  type: setCaseFile.type,
  payload: caseFile,
});

export const resetCaseFile = () => ({
  type: setCaseFileNull.type,
});

export default slice.reducer;
