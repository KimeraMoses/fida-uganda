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

export const signUp = async (values) => {
  return await axiosClient.post(routes.users.signUp, values);
};

export const setPassword = async (values) => {
  return await axiosClient.patch(
    `${routes.users.setPassword}/${values.token}`,
    values
  );
};

export const getAllDeactivatedUsers = async () => {
  return await axiosClient.get(routes.users.deactivatedUsers);
};

export const activateUser = async (id) => {
  return await axiosClient.post(routes.users.activateUser, id);
};

export const requestPasswordLink = async (id) => {
  return await axiosClient.post(routes.users.requestPasswordLink, id);
};
