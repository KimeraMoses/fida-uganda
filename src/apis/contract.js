import axiosClient from '../lib/axiosClient';
import { routes } from '../lib/routes';

export const getAllContracts = () => {
  return axiosClient.get(routes.contracts.getContracts);
};

export const uploadContracts = (contracts) => {
  const formData = new FormData();
  contracts.forEach(file => {
    formData.append(file.name, file)
  });
  return axiosClient.post(routes.contracts.uploadContracts, formData);
};
