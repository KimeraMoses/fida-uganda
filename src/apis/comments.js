import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addComment = async (comment) => {
  return axiosClient.post(routes.comments.addComment, comment);
};

export const getComment = async (commentId) => {
  return axiosClient.get(`${routes.comments.base}/${commentId}`);
};

export const getComments = async () => {
  return axiosClient.get(routes.comments.getComments);
};

export const updateComment = async (comment) => {
  return axiosClient.patch(
    `${routes.comments.editComment}/${comment.id}`,
    comment
  );
};

export const deleteComment = async (commentId) => {
  return axiosClient.delete(`${routes.comments.base}/${commentId}`);
};
