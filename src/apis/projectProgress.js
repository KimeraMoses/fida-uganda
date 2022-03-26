import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addProjectProgress = async (projectProgress) => {
  return await axiosClient.post(
    routes.projectProgress.addProjectProgress,
    projectProgress
  );
};

export const editProjectProgress = async (projectProgress) => {
  return await axiosClient.patch(
    `${routes.projectProgress.editProjectProgress}/${projectProgress.id}`,
    projectProgress
  );
};

export const deleteProjectProgress = async (projectProgressId) => {
  return await axiosClient.delete(
    `${routes.projectProgress.base}/${projectProgressId}`
  );
};

export const getProjectProgress = async (projectProgressId) => {
  return await axiosClient.get(
    `${routes.projectProgress.base}/${projectProgressId}`
  );
};

export const getAllProjectProgress = async () => {
  return await axiosClient.get(routes.projectProgress.getAllProjectProgress);
};

export const getProjectProgressByProject = async (projectId) => {
  return await axiosClient.get(
    `${routes.projectProgress.getProgressByProject}/${projectId}`
  );
};
