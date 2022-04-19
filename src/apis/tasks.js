import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllTasks = async () => {
  return await axiosClient.get(routes.tasks.getAllTasks);
};

export const getTask = async (taskId) => {
  return await axiosClient.get(`${routes.tasks.base}/${taskId}`);
};

export const addTask = async (task) => {
  return await axiosClient.post(routes.tasks.addTask, task);
};

export const editTask = async (task) => {
  return await axiosClient.put(`${routes.tasks.editTask}/${task.id}`, task);
};

export const deleteTask = async (taskId) => {
  return await axiosClient.delete(`${routes.tasks.base}/${taskId}`);
};

export const getUserTasks = async (userId) => {
  return await axiosClient.get(`${routes.tasks.getUserTasks}/${userId}`);
};

export const getTaskComments = async (taskId) => {
  return await axiosClient.get(
    `${routes.tasks.base}/${taskId}${routes.tasks.getTaskComments}`
  );
};

export const addTaskComment = async (values) => {
  return await axiosClient.post(routes.comments.addComment, values);
};
