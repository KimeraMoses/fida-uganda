import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getProject = async (projectId) => {
  // console.log(projectId.queryKey?.[1])
  return await axiosClient.get(`${routes.projects.base}/${projectId.queryKey?.[1]}`);
};

export const addProject = async (project) => {
  return await axiosClient.post(routes.projects.addProject, project);
};

export const getProjects = async () => {
  return await axiosClient.get(routes.projects.getProjects);
};

export const updateProject = async (project) => {
  return await axiosClient.patch(
    `${routes.projects.editProject}/${project.id}`,
    project
  );
};

export const deleteProject = async (projectId) => {
  return await axiosClient.delete(`${routes.projects.base}/${projectId}`);
};

export const getProjectComments = async (projectId) => {
  return await axiosClient.get(
    `${routes.projects.base}/${projectId}${routes.comments.getProjectComments}`
  );
};
