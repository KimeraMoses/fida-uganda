import axiosClient from '../lib/axiosClient';
import { routes } from '../lib/routes';

export const getAllContracts = () => {
  return axiosClient.get(routes.contracts.getContracts);
};

export const uploadContracts = (contracts) => {
  const formData = new FormData();
  contracts.forEach((contract) => {
    formData.append('file', contract.file);
  });
  return axiosClient.post(routes.contracts.uploadContracts, formData);
};

export const deleteContract = async (contractId) => {
  return await axiosClient.delete(`${routes.contracts.base}/${contractId}`)
}