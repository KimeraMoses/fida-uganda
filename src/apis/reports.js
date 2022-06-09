import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getReport = async (reportId) => {
  return await axiosClient.get(`${routes.reports.base}/${reportId}`);
};

export const getReports = async (folderId) => {
  return await axiosClient.get(
    `${routes.reports.getFolderReports}/${folderId}`
  );
};

export const addReport = async (report) => {
  return await axiosClient.post(routes.reports.addReport, report);
};

export const updateReport = async (report) => {
  return await axiosClient.patch(
    `${routes.reports.editReport}/${report.id}`,
    report
  );
};

export const deleteReport = async (reportId) => {
  return await axiosClient.delete(`${routes.reports.base}/${reportId}`);
};

export const getUserReports = async () => {
  return await axiosClient.get(routes.reports.getUserReports);
};

export const getNarrativeReports = async () => {
  return await axiosClient.get(routes.reports.getNarrativeReports);
};

export const getStatisticalReports = async () => {
  return await axiosClient.get(routes.reports.getStatisticalReports);
};
