import { IGetClients } from "../interfaces/Clients";
import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllClients = async (): Promise<IGetClients> => {
  return await axiosClient.get(routes.clients.getClients);
};
