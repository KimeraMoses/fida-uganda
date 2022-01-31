import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "assets",
  initialState: {
    assets: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    assetsRequest: (assets) => {
      assets.loading = true;
    },
    assetsRequestFailed: (assets, action) => {
      const { message } = action.payload;
      assets.success = null;
      assets.loading = false;
      assets.error = message;
    },
    assetCreated: (assets, action) => {
      const { asset } = action.payload;
      assets.assets.push(asset);
      assets.success = "Asset created successfully";
      assets.loading = false;
      assets.error = null;
    },
  },
});

const { assetsRequest, assetsRequestFailed, assetCreated } = slice.actions;

export default slice.reducer;
