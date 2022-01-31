import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "leaveTracker",
  initialState: {
    tracker: {},
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    getLeaveTrackerRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    getLeaveTrackerFailure: (state, action) => {
      const { message } = action.payload;
      state.loading = false;
      state.success = null;
      state.error = message;
    },
    getTrackerSucceeded: (state, action) => {
      const { leaveTracker } = action.payload;
      state.tracker = { ...leaveTracker };
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
});

export default slice.reducer;
