import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getMe = async () => {
  return await axiosClient.get(routes.users.getMe);
};

export const logIn = async (values) => {
  return await axiosClient.post(routes.users.login, values);
};

export const forgotPassword = async (email) => {
  return await axiosClient.post(routes.users.forgotPassword, { email });
};