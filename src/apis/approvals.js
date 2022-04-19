import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllApprovals = async () => {
  return await axiosClient.get(routes.approvals.getAllApprovals);
};
