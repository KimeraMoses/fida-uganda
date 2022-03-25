import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getCaseFiles = async () => {
  return await axiosClient.get(routes.cases.getCaseFiles);
};

export const getCaseFile = async (caseId) => {
  return await axiosClient.get(`${routes.cases.base}/${caseId}`);
};

export const getClvCases = async () => {
  return await axiosClient.get(routes.cases.getClvCases);
};

export const getMyCases = async () => {
  return await axiosClient.get(routes.cases.getMyCases);
};

export const getClvStats = async () => {
  return await axiosClient.get(routes.cases.stats);
};

export const addCaseFile = async (caseFile) => {
  return await axiosClient.post(routes.cases.addCaseFile, caseFile);
};

export const updateCaseFile = async (caseFile) => {
  return await axiosClient.patch(
    `${routes.cases.editCaseFile}/${caseFile.id}`,
    caseFile
  );
};

export const deleteCaseFile = async (caseId) => {
  return await axiosClient.delete(`${routes.cases.base}/${caseId}`);
};
