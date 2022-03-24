import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllClients = async () => {
  return await axiosClient.get(routes.clients.getClients);
};
