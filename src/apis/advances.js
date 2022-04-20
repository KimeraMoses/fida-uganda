import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllAdvances = async () => {
  return await axiosClient.get(routes.advances.getAllAdvances);
};

export const getAdvance = async (id) => {
  return await axiosClient.get(routes.advances.base + id);
};

export const addAdvance = async (data) => {
  return await axiosClient.post(routes.advances.addAdvance, data);
};

export const editAdvance = async (data) => {
  return await axiosClient.put(routes.advances.editAdvance + data.id, data);
};

export const deleteAdvance = async (id) => {
  return await axiosClient.delete(routes.advances.base + id);
};
