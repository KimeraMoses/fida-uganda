import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getDatabases = async () => {
  return await axiosClient.get(routes.databases.getDatabases);
};
