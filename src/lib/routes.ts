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
  cases: {
    getCaseFiles: `${BASE_URL}/cases/getAll`,
  },
  requisitions: {
    getRequisitions: `${BASE_URL}/requisitions/getAll`,
    addRequisition: `${BASE_URL}/requisitions/create`,
    editRequisition: `${BASE_URL}/requisitions/edit`,
    getPendingRequisitions: `${BASE_URL}/requisitions/getAllPendingRequisitions`,
    getAllApproved: `${BASE_URL}/requisitions/getAllApprovedRequisitions`,
    base: `${BASE_URL}/requisitions`,
  },
};
