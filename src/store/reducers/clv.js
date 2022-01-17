import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "clvDepartment",
  initialState: {
    loading: false,
    error: null,
    success: null,
    clvs: [],
    clv: null,
    complaints: [],
    complaint: null,
  },
  reducers: {
    clvLoading: (clvDepartment) => {
      clvDepartment.loading = true;
    },
    clvCreationSucceeded: (clvDepartment, action) => {
      const { clv } = action.payload;
      clvDepartment.clvs.push(clv);
      clvDepartment.success = "CLV created successfully";
      clvDepartment.error = null;
      clvDepartment.loading = false;
    },
    clvLoadSucceeded: (clvDepartment, action) => {
      const { clv } = action.payload;
      clvDepartment.success = null;
      clvDepartment.error = null;
      clvDepartment.loading = false;
      clvDepartment.clv = clv;
    },
    clvsLoadSucceeded: (clvDepartment, action) => {
      const { clvs } = action.payload;
      clvDepartment.success = null;
      clvDepartment.error = null;
      clvDepartment.loading = false;
      clvDepartment.clvs = clvs;
    },
    clvLoadFailed: (clvDepartment, action) => {
      const { message } = action.payload;
      clvDepartment.success = null;
      clvDepartment.error = message;
      clvDepartment.loading = false;
    },
    complaintCreationSucceeded: (clvDepartment, action) => {
      const { complaint } = action.payload;
      clvDepartment.complaints.push(complaint);
      clvDepartment.success = "Complaint created successfully";
      clvDepartment.error = null;
      clvDepartment.loading = false;
    },
    complaintLoadSucceeded: (clvDepartment, action) => {
      const { complaint } = action.payload;
      clvDepartment.success = null;
      clvDepartment.error = null;
      clvDepartment.loading = false;
      clvDepartment.complaint = complaint;
    },
    complaintsLoadSucceeded: (clvDepartment, action) => {
      const { complaints } = action.payload;
      clvDepartment.success = null;
      clvDepartment.error = null;
      clvDepartment.loading = false;
      clvDepartment.complaints = complaints;
    },
  },
});

export const {
  clvLoading,
  clvLoadFailed,
  clvCreationSucceeded,
  clvLoadSucceeded,
  clvsLoadSucceeded,
  complaintCreationSucceeded,
  complaintLoadSucceeded,
  complaintsLoadSucceeded,
} = slice.actions;

export const createClv = (values) =>
  apiCallBegan({
    url: "/api/v1/clvs/create",
    method: "post",
    data: { ...values },
    onStart: clvLoading.type,
    onSuccess: clvCreationSucceeded.type,
    onError: clvLoadFailed.type,
  });

export const getClv = (id) =>
  apiCallBegan({
    url: `/api/v1/clvs/${id}`,
    method: "get",
    onStart: clvLoading.type,
    onSuccess: clvLoadSucceeded.type,
    onError: clvLoadFailed.type,
  });

export const getClvs = () =>
  apiCallBegan({
    url: "/api/v1/clvs/getAll",
    method: "get",
    onStart: clvLoading.type,
    onSuccess: clvsLoadSucceeded.type,
    onError: clvLoadFailed.type,
  });

export const createComplaint = (values) => {
  apiCallBegan({
    url: "/api/v1/complaints/create",
    method: "post",
    data: { ...values },
    onStart: clvLoading.type,
    onSuccess: complaintCreationSucceeded.type,
    onError: clvLoadFailed.type,
  });
};

export const getComplaint = (id) => {
  apiCallBegan({
    url: `/api/v1/complaints/${id}`,
    method: "get",
    onStart: clvLoading.type,
    onSuccess: complaintLoadSucceeded.type,
    onError: clvLoadFailed.type,
  });
};

export const getComplaints = () =>
  apiCallBegan({
    url: "/api/v1/complaints/getAll",
    method: "get",
    onStart: clvLoading.type,
    onSuccess: complaintsLoadSucceeded.type,
    onError: clvLoadFailed.type,
  });

export default slice.reducer;
