import axiosClient from "../lib/axiosClient";
import { ILoginUser, IUserSignedIn } from "../interfaces/User";
import { routes } from "../lib/constants";
import { IGenericResponse } from "../interfaces/Generics";

export const logIn = async (values: ILoginUser): Promise<IUserSignedIn> => {
  return await axiosClient.post(routes.users.login, values);
};

export const forgotPassword = async (
  email: string
): Promise<IGenericResponse> => {
  return await axiosClient.post(routes.users.forgotPassword, { email });
};
