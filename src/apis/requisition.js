import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getRequisitions);
};

export const getRequisitionsStats = async () => {
  return await axiosClient.get(routes.requisitions.stats);
};

export const addRequisition = async (values) => {
  return await axiosClient.post(routes.requisitions.addRequisition, values);
};
