import { BASE_URL } from "./constants";

export const routes = {
  users: {
    login: `${BASE_URL}/users/login`,
    signUp: `${BASE_URL}/users/signup`,
    forgotPassword: `${BASE_URL}/users/forgotPassword`,
    getMe: `${BASE_URL}/users/me`,
  },
  clients: {
    getClients: `${BASE_URL}/clients/getAll`,
  },
};
