import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getReportFolders = async () => {
  return await axiosClient.get(routes.reportFolders.getAllReportFolders);
};

export const getReportFolder = async (reportFolderId) => {
  return await axiosClient.get(
    `${routes.reportFolders.base}/${reportFolderId}`
  );
};

export const addReportFolder = async (reportFolder) => {
  return await axiosClient.post(
    routes.reportFolders.addReportFolder,
    reportFolder
  );
};

export const updateReportFolder = async (reportFolder) => {
  return await axiosClient.patch(
    `${routes.reportFolders.editReportFolder}/${reportFolder.id}`,
    reportFolder
  );
};

export const deleteReportFolder = async (reportFolderId) => {
  return await axiosClient.delete(
    `${routes.reportFolders.base}/${reportFolderId}`
  );
};
