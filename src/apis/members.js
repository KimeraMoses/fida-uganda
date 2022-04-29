import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getMembers = async () => {
  return await axiosClient.get(routes.members.getAllMembers);
};
