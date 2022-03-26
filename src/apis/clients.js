import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllClients = async () => {
  return await axiosClient.get(routes.clients.getClients);
};

export const addClient = async (client) => {
  return await axiosClient.post(routes.clients.addClient, client);
};

export const getClient = async (clientId) => {
  return await axiosClient.get(`${routes.clients.base}/${clientId}`);
};

export const updateClient = async (client) => {
  return await axiosClient.patch(`${routes.clients.base}/${client.id}`, client);
};

export const deleteClient = async (clientId) => {
  return await axiosClient.delete(`${routes.clients.base}/${clientId}`);
};

export const getClientStats = async () => {
  return await axiosClient.get(routes.clients.stats);
};
