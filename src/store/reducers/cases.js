import { createSlice } from "@reduxjs/toolkit";
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
      const { values } = action.payload;
      cases.newCase.bio = { ...values };
    },
    disabilityAdded: (cases, action) => {
      const { values } = action.payload;
      cases.newCase.disability = { ...values };
    },
    issuesAdded: (cases, action) => {
      const { values } = action.payload;
      cases.newCase.issues = { ...values };
    },
    declarationAdded: (cases, action) => {
      const { values } = action.payload;
      cases.newCase.declaration = { ...values };
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

export default slice.reducer;
