import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
const slice = createSlice({
  name: "cases",
  initialState: {
    cases: [],
    newCase: { bio: {}, disability: {}, issues: {}, declaration: {} },
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    casesRequest: (cases) => {
      cases.loading = true;
    },
    casesRequestFailed: (cases, action) => {
      const { message } = action.payload;
      cases.success = null;
      cases.loading = false;
      cases.error = message;
    },
    bioAdded: (cases, action) => {
      cases.newCase.bio = action.payload;
    },
    disabilityAdded: (cases, action) => {
      const { values } = action.payload;
      cases.newCase.disability = values;
    },
    issuesAdded: (cases, action) => {
      const { values } = action.payload;
      cases.newCase.issues = values;
    },
    declarationAdded: (cases, action) => {
      cases.newCase.declaration = action.payload.values;
    },
    caseCreationSucceeded: (cases, action) => {
      const { case_file } = action.payload;
      cases.cases.push(case_file);
      cases.newCase = { bio: {}, disability: {}, issues: {}, declaration: {} };
      cases.success = "Case created successfully";
    },
    casesLoadSucceeded: (state, action) => {
      const { cases } = action.payload;
      state.cases = cases;
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
});

export const {
  casesRequest,
  casesRequestFailed,
  bioAdded,
  disabilityAdded,
  issuesAdded,
  declarationAdded,
  caseCreationSucceeded,
  casesLoadSucceeded,
} = slice.actions;

export const addBio = (values) => ({
  type: bioAdded.type,
  payload: values,
});

export const addDisability = (values) => ({
  type: disabilityAdded.type,
  payload: { values },
});

export const addIssues = (values) => ({
  type: issuesAdded.type,
  payload: { values },
});

export const addDeclaration = (values) => ({
  type: declarationAdded.type,
  payload: { values },
});

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
    data: values,
    onStart: casesRequest.type,
    onSuccess: caseCreationSucceeded.type,
    onError: casesRequestFailed.type,
  });

export default slice.reducer;
