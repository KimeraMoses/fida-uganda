import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "registration",
  initialState: {
    districts: [],
    counties: [],
    district: { counties: [], id: null },
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    registrationRequest: (registration) => {
      registration.loading = true;
    },
    registrationRequestFailed: (registration, action) => {
      const { message } = action.payload;
      registration.success = null;
      registration.loading = false;
      registration.error = message;
    },
    districtsLoadSucceeded: (registration, action) => {
      const { districts } = action.payload;
      registration.success = null;
      registration.loading = false;
      registration.error = null;
      registration.districts = districts;
    },
    countiesLoadSucceeded: (registration, action) => {
      const { counties } = action.payload;
      registration.success = null;
      registration.loading = false;
      registration.error = null;
      registration.counties = counties;
    },
    districtCounties: (registration, action) => {
      const { counties } = action.payload;
      registration.success = null;
      registration.loading = false;
      registration.error = null;
      registration.district.counties = counties;
    },
  },
});

const {
  registrationRequest,
  registrationRequestFailed,
  districtsLoadSucceeded,
  countiesLoadSucceeded,
  districtCounties,
} = slice.actions;

export const getAllDistricts = () =>
  apiCallBegan({
    url: "/api/v1/registration/getAllDistricts",
    method: "get",
    onStart: registrationRequest.type,
    onSuccess: districtsLoadSucceeded.type,
    onError: registrationRequestFailed.type,
  });

export const getAllCounties = () =>
  apiCallBegan({
    url: "/api/v1/registration/getAllCounties",
    method: "get",
    onStart: registrationRequest.type,
    onSuccess: countiesLoadSucceeded.type,
    onError: registrationRequestFailed.type,
  });

export const getAllDistrictCounties = (districtId) =>
  apiCallBegan({
    url: `/api/v1/registration/getDistrictCounties/${districtId}`,
    method: "get",
    onStart: registrationRequest.type,
    onSuccess: districtCounties.type,
    onError: registrationRequestFailed.type,
  });

export default slice.reducer;
