import axiosClient from "../lib/axiosClient";
import { ILoginUser, IUserIsLogged, IUserSignedIn } from "../interfaces/User";
import { IGenericResponse } from "../interfaces/Generics";
import { routes } from "../lib/routes";

export const getMe = async (): Promise<IUserIsLogged> => {
  return await axiosClient.get(routes.users.getMe);
};

export const logIn = async (values: ILoginUser): Promise<IUserSignedIn> => {
  return await axiosClient.post(routes.users.login, values);
};

export const forgotPassword = async (
  email: string
): Promise<IGenericResponse> => {
  return await axiosClient.post(routes.users.forgotPassword, { email });
};
