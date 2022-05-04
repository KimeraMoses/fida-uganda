import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addNotification = async (notification) => {
  return await axiosClient.post(routes.notifications.addNotification, notification);
};

export const getNotifications = async () => {
  return await axiosClient.get(routes.notifications.getNotifications);
};
