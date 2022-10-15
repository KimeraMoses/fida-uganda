import axiosClient from '../lib/axiosClient';
import { routes } from '../lib/routes';

export const getAllContracts = () => {
  return axiosClient.get(routes.contracts.getContracts);
};
