import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addProjectFile = async (projectFile) => {
  return await axiosClient.post(
    routes.projectFiles.addProjectFile,
    projectFile
  );
};

export const getProjectFile = async (projectFileId) => {
  return await axiosClient.get(`${routes.projectFiles.base}/${projectFileId}`);
};

export const getProjectFiles = async () => {
  return await axiosClient.get(routes.projectFiles.getAllProjectFiles);
};

export const updateProjectFile = async (projectFile) => {
  return await axiosClient.patch(
    `${routes.projectFiles.editProjectFile}/${projectFile.id}`,
    projectFile
  );
};

export const deleteProjectFile = async (projectFileId) => {
  return await axiosClient.delete(
    `${routes.projectFiles.base}/${projectFileId}`
  );
};

export const getProjectFilesByProject = async (projectId) => {
  return await axiosClient.get(
    `${routes.projectFiles.getFilesByProject}/${projectId}`
  );
};
