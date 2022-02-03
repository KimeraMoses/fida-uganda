import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "cases",
  initialState: {
    cases: [],
    case: null,
    cases_number: null,
    clients: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    casesRequest: (cases) => {
      cases.loading = true;
      cases.error = null;
      cases.success = null;
    },
    casesRequestFailed: (cases, action) => {
      const { message } = action.payload;
      cases.loading = false;
      cases.error = message;
    },
    caseCreationSucceeded: (cases, action) => {
      const { case_file } = action.payload;
      cases.cases.push(case_file);
      cases.loading = false;
      cases.success = "Case created successfully";
    },
    casesLoadSucceeded: (state, action) => {
      const { cases } = action.payload;
      state.cases = cases;
      state.loading = false;
    },
    caseLoadSucceeded: (state, action) => {
      const { case_file } = action.payload;
      state.loading = false;
      state.case = case_file;
    },
    caseUpdated: (state, action) => {
      const { updatedCase } = action.payload;
      const index = state.cases.findIndex((c) => c.id === updatedCase.id);
      state.cases[index] = updatedCase;
      state.loading = false;
      state.success = "Case updated successfully";
    },
    caseDeleted: (state, action) => {
      const { id } = action.payload;
      const index = state.cases.findIndex((c) => c.id === id);
      state.cases.splice(index, 1);
      state.loading = false;
      state.success = "Case deleted successfully";
    },
    caseNumberLoaded: (state, action) => {
      const { all_cases, my_cases } = action.payload;
      state.cases_number = { all_cases, my_cases };
      state.loading = false;
    },
    userCasesLoaded: (state, action) => {
      const { my_cases } = action.payload;
      state.cases = my_cases;
      state.loading = false;
    },
    clvCasesLoaded: (state, action) => {
      const { clv_cases } = action.payload;
      state.cases = clv_cases;
      state.loading = false;
    },
    clientsLoaded: (state, action) => {
      const { clients } = action.payload;
      if (clients) {
        clients.forEach((client) => {
          state.clients.push({ value: client.id, label: client.name });
        });
      }
      state.loading = false;
    },
  },
});

export const {
  casesRequest,
  casesRequestFailed,
  caseCreationSucceeded,
  casesLoadSucceeded,
  caseLoadSucceeded,
  caseUpdated,
  caseDeleted,
  caseNumberLoaded,
  userCasesLoaded,
  clvCasesLoaded,
  clientsLoaded,
} = slice.actions;

export const getCases = () =>
  apiCallBegan({
    url: "/api/v1/cases/getAll",
    method: "get",
    onStart: casesRequest.type,
    onSuccess: casesLoadSucceeded.type,
    onError: casesRequestFailed.type,
  });

export const createCase = (values) =>
  apiCallBegan({
    url: "/api/v1/cases/create",
    method: "post",
    data: { ...values },
    onStart: casesRequest.type,
    onSuccess: caseCreationSucceeded.type,
    onError: casesRequestFailed.type,
  });

export const editCase = (values) =>
  apiCallBegan({
    url: `/api/v1/cases/edit/${values.id}`,
    method: "put",
    data: { ...values },
    onStart: casesRequest.type,
    onSuccess: caseUpdated.type,
    onError: casesRequestFailed.type,
  });

export const deleteCase = (id) =>
  apiCallBegan({
    url: `/api/v1/cases/delete/${id}`,
    method: "delete",
    onStart: casesRequest.type,
    onSuccess: caseDeleted.type,
    onError: casesRequestFailed.type,
  });

export const getClientNames = () =>
  apiCallBegan({
    url: "/api/v1/cases/getAll",
    method: "get",
    onStart: casesRequest.type,
    onSuccess: clientsLoaded.type,
    onError: casesRequestFailed.type,
  });

export default slice.reducer;
