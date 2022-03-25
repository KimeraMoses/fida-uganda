import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addLeaveDays = (values) => {
  return axiosClient.post(routes.leaveTracker.addTracker, values);
};

export const getLeaveTracker = async (id) => {
  return await axiosClient.get(`${routes.leaveTracker.base}/${id}`);
};

export const getLeaveTrackers = async () => {
  return await axiosClient.get(routes.leaveTracker.getAllTrackers);
};

export const updateLeaveTracker = async (values) => {
  return await axiosClient.patch(
    `${routes.leaveTracker.editTracker}/${values.id}`,
    values
  );
};

export const deleteLeaveTracker = async (id) => {
  return await axiosClient.delete(`${routes.leaveTracker.base}/${id}`);
};

export const getLeaveDaysRequest = async () => {
  return await axiosClient.get(routes.leaveTracker.getLeaveDaysRequest);
};

export const getRemainingDays = async () => {
  return await axiosClient.get(routes.leaveTracker.getRemainingDays);
};

export const getUserTrackers = async () => {
  return await axiosClient.get(routes.leaveTracker.getUserTrackers);
};
