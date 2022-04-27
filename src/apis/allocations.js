import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllocations = async () => {
  return await axiosClient.get(routes.allocations.getAllocations);
};

export const getAllocation = async (id) => {
  return await axiosClient.get(routes.allocations.base + id);
};

export const addAllocation = async (data) => {
  return await axiosClient.post(routes.allocations.createAllocation, data);
};

export const editAllocation = async (data) => {
  return await axiosClient.put(routes.allocations.base + data.id, data);
};

export const deleteAllocation = async (id) => {
  return await axiosClient.delete(routes.allocations.base + id);
};
