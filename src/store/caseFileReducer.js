import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "caseFile",
  initialState: {
    selectedId: null,
  },
  reducers: {
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

const { setSelectedId } = slice.actions;

export const selectCaseFile = (id) => ({
  type: setSelectedId.type,
  payload: id,
});

export default slice.reducer;
