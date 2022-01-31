import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "assets",
  initialState: {
    assets: [],
    asset: null,
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
    assetsLoaded: (assets, action) => {
      const { assets: assetsList } = action.payload;
      assets.assets = assetsList;
      assets.loading = false;
      assets.error = null;
      assets.success = null;
    },
    assetLoaded: (assets, action) => {
      const { asset } = action.payload;
      assets.asset = asset;
      assets.loading = false;
      assets.error = null;
      assets.success = null;
    },
    departmentAssetsLoaded: (assets, action) => {
      const { assets: departmentAssets } = action.payload;
      assets.assets = departmentAssets;
      assets.loading = false;
      assets.error = null;
      assets.success = null;
    },
    deletedAsset: (assets, action) => {},
    assetUpdated: (assets, action) => {
      const { asset } = action.payload;
      assets.asset = asset;
      assets.loading = false;
      assets.error = null;
      assets.success = "Asset updated successfully";
    },
  },
});

const {
  assetsRequest,
  assetsRequestFailed,
  assetCreated,
  assetsLoaded,
  assetLoaded,
  departmentAssetsLoaded,
  deletedAsset,
  assetUpdated,
} = slice.actions;

export const createAsset = (asset) =>
  apiCallBegan({
    url: "/api/v1/assets/create",
    method: "post",
    data: { ...asset },
    onStart: assetsRequest.type,
    onSuccess: assetCreated.type,
    onError: assetsRequestFailed.type,
  });

export const getAssets = () =>
  apiCallBegan({
    url: "/api/v1/assets/getAll",
    method: "get",
    onStart: assetsRequest.type,
    onSuccess: assetsLoaded.type,
    onError: assetsRequestFailed.type,
  });

export const getAsset = (id) =>
  apiCallBegan({
    url: `/api/v1/assets/${id}`,
    method: "get",
    onStart: assetsRequest.type,
    onSuccess: assetLoaded.type,
    onError: assetsRequestFailed.type,
  });

export const getDepartmentAssets = (departmentId) =>
  apiCallBegan({
    url: `/api/v1/assets/getBYDept/${departmentId}`,
    method: "get",
    onStart: assetsRequest.type,
    onSuccess: departmentAssetsLoaded.type,
    onError: assetsRequestFailed.type,
  });

export const updateAsset = (asset) =>
  apiCallBegan({
    url: `/api/v1/assets/edit/${asset.id}`,
    method: "put",
    data: { ...asset },
    onStart: assetsRequest.type,
    onSuccess: assetUpdated.type,
    onError: assetsRequestFailed.type,
  });

export const deleteAsset = (id) =>
  apiCallBegan({
    url: `/api/v1/assets/${id}`,
    method: "delete",
    onStart: assetsRequest.type,
    onSuccess: deletedAsset.type,
    onError: assetsRequestFailed.type,
  });

export default slice.reducer;
