import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";
import { IGetCases } from "../interfaces/Cases";

export const getAllCaseFiles = async (): Promise<IGetCases> => {
  return await axiosClient.get(routes.cases.getCaseFiles);
};
