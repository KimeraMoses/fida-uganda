import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "reports",
  initialState: {
    reports: [],
    report: null,
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    reportsRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    reportsRequestFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = false;
      state.error = message;
    },
    reportCreated: (state, action) => {
      const { uploaded_report } = action.payload;
      state.reports.push(uploaded_report);
      state.loading = false;
      state.error = null;
      state.success = "Report created successfully";
    },
    reportsLoaded: (state, action) => {
      const { reports } = action.payload;
      state.reports = reports;
      state.loading = false;
      state.error = null;
      state.success = null;
    },
    reportLoaded: (state, action) => {
      const { report } = action.payload;
      state.report = report;
      state.loading = false;
      state.error = null;
      state.success = null;
    },
    userReportsLoaded: (state, action) => {
      const { reports } = action.payload;
      state.reports = reports;
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
});

const {
  reportsRequested,
  reportsRequestFailed,
  reportCreated,
  reportsLoaded,
  reportLoaded,
  userReportsLoaded,
} = slice.actions;

export const createReport = (report) =>
  apiCallBegan({
    url: "/api/v1/reports/create",
    method: "POST",
    data: { ...report },
    contentType: "multipart/form-data",
    onStart: reportsRequested.type,
    onSuccess: reportCreated.type,
    onError: reportsRequestFailed.type,
  });

export const loadReports = () =>
  apiCallBegan({
    url: "/api/v1/reports/getAll",
    method: "GET",
    onStart: reportsRequested.type,
    onSuccess: reportsLoaded.type,
    onError: reportsRequestFailed.type,
  });

export const loadUserReports = () =>
  apiCallBegan({
    url: "/api/v1/reports/getMyReports",
    method: "GET",
    onStart: reportsRequested.type,
    onSuccess: userReportsLoaded.type,
    onError: reportsRequestFailed.type,
  });

export const loadReport = (id) =>
  apiCallBegan({
    url: `/api/v1/reports/${id}`,
    method: "GET",
    onStart: reportsRequested.type,
    onSuccess: reportLoaded.type,
    onError: reportsRequestFailed.type,
  });

export default slice.reducer;
