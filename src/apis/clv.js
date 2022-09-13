import axiosClient from '../lib/axiosClient';
import { routes } from '../lib/routes';

export const getClvs = async () => {
  return await axiosClient.get(routes.clvs.getClvs);
};

export const getClv = async (clvId) => {
  return await axiosClient.get(`${routes.clvs.base}/${clvId}`);
};

export const addClv = async (clv) => {
  return await axiosClient.post(routes.clvs.addClv, clv);
};

export const editClv = async (clv) => {
  const id = clv.get('id');
  return await axiosClient.patch(`${routes.clvs.editClv}/${id}`, clv);
};

export const deleteClv = async (clvId) => {
  return await axiosClient.delete(`${routes.clvs.base}/${clvId}`);
};

export const getClvStats = async () => {
  return await axiosClient.get(routes.clvs.stats);
};
