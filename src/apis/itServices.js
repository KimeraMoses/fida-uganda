import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addItService = async (service) => {
  return await axiosClient.post(routes.itServices.createItService, service);
};

export const getAllItServices = async () => {
  return await axiosClient.get(`${routes.itServices.getItServices}`);
};