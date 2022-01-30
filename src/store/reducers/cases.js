import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { APP_PREFIX } from "../../hooks/useLocalStorage";

const slice = createSlice({
  name: "cases",
  initialState: {
    cases: [],
    newCase: {
      bio: { ...JSON.parse(localStorage.getItem(`${APP_PREFIX}-bio`)) } || {},
      disability:
        { ...JSON.parse(localStorage.getItem(`${APP_PREFIX}-disability`)) } ||
        {},
      issues:
        { ...JSON.parse(localStorage.getItem(`${APP_PREFIX}-issues`)) } || {},
      declaration:
        { ...JSON.parse(localStorage.getItem(`${APP_PREFIX}-declaration`)) } ||
        {},
    },
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
      localStorage.setItem(`${APP_PREFIX}-bio`, JSON.stringify(action.payload));
    },
    disabilityAdded: (cases, action) => {
      const { values } = action.payload;
      cases.newCase.disability = values;
      localStorage.setItem(`${APP_PREFIX}-disability`, JSON.stringify(values));
    },
    issuesAdded: (cases, action) => {
      const { values } = action.payload;
      cases.newCase.issues = values;
      localStorage.setItem(`${APP_PREFIX}-issues`, JSON.stringify(values));
    },
    declarationAdded: (cases, action) => {
      cases.newCase.declaration = action.payload.values;
      localStorage.setItem(
        `${APP_PREFIX}-declaration`,
        JSON.stringify(action.payload)
      );
    },
    caseCreationSucceeded: (cases, action) => {
      const { case_file } = action.payload;
      cases.cases.push(case_file);
      cases.newCase = { bio: {}, disability: {}, issues: {}, declaration: {} };
      localStorage.removeItem(`${APP_PREFIX}-bio`);
      localStorage.removeItem(`${APP_PREFIX}-disability`);
      localStorage.removeItem(`${APP_PREFIX}-issues`);
      localStorage.removeItem(`${APP_PREFIX}-declaration`);
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
