import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addItProduct = async (product) => {
  return await axiosClient.post(routes.itProducts.createItProducts, product);
};

export const getAllItProducts = async () => {
  return await axiosClient.get(`${routes.itProducts.getItProducts}`);
};
