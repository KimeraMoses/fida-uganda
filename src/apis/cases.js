import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllCaseFiles = async () => {
  return await axiosClient.get(routes.cases.getCaseFiles);
};
