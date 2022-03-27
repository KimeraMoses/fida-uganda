import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addAsset = async (asset) => {
  return await axiosClient.post(routes.assets.addAsset, asset);
};

export const getAsset = async (assetId) => {
  return await axiosClient.get(`${routes.assets.base}/${assetId}`);
};

export const deleteAsset = async (assetId) => {
  return await axiosClient.delete(`${routes.assets.base}/${assetId}`);
};

export const getAssets = async () => {
  return await axiosClient.get(routes.assets.getAssets);
};

export const updateAsset = async (asset) => {
  return await axiosClient.patch(
    `${routes.assets.editAsset}/${asset.id}`,
    asset
  );
};
