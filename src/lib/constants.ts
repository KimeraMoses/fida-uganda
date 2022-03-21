export const BASE_URL = "https://fida-ims-staging.herokuapp.com/api/v1";

export const routes = {
  users: {
    login: `${BASE_URL}/users/login`,
    signUp: `${BASE_URL}/users/signup`,
    forgotPassword: `${BASE_URL}/users/forgotPassword`,
  },
};
