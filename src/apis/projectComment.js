import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addProjectComment = async (projectComment) => {
  return await axiosClient.post(
    routes.projectComments.addProjectComment,
    projectComment
  );
};

export const getProjectComment = async (projectCommentId) => {
  return await axiosClient.get(
    `${routes.projectComments.base}/${projectCommentId}`
  );
};

export const getProjectComments = async (projectId) => {
  return await axiosClient.get(
    `${routes.projectComments.getAllProjectComments}/${projectId}`
  );
};

export const updateProjectComment = async (projectComment) => {
  return await axiosClient.patch(
    `${routes.projectComments.editProjectComment}/${projectComment.id}`,
    projectComment
  );
};

export const deleteProjectComment = async (projectCommentId) => {
  return await axiosClient.delete(
    `${routes.projectComments.base}/${projectCommentId}`
  );
};
