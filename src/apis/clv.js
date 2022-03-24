import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getClvs = async () => {
  return await axiosClient.get(routes.clvs.getClvs);
};

export const getClv = async (clvId) => {
  return await axiosClient.get(`${routes.clvs.base}/${clvId}`);
};

export const addClv = async (clv) => {
  return await axiosClient.post(routes.complaints.addClv, clv);
};

export const editClv = async (clv) => {
  return await axiosClient.patch(`${routes.complaints.editClv}/${clv.id}`, clv);
};

export const deleteClv = async (clvId) => {
  return await axiosClient.delete(`${routes.complaints.base}/${clvId}`);
};

export const getClvStats = async () => {
  return await axiosClient.get(routes.clvs.stats);
};
