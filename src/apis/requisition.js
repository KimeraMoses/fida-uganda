import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getRequisitions);
};

export const getRequisition = async (id) => {
  return await axiosClient.get(`${routes.requisitions.base}/${id}`);

};

export const getRequisitionsStats = async () => {
  return await axiosClient.get(routes.requisitions.stats);
};

export const addRequisition = async (values) => {
  return await axiosClient.post(routes.requisitions.addRequisition, values);
};

export const approveRequisition = async ({reqName, remarks}) => {
  return await axiosClient.post(`${routes.requisitions.approveRequisition}/${reqName}`, {remarks} );
}

export const rejectRequisition = async ({reqName, remarks}) => {
  return await axiosClient.post(`${routes.requisitions.rejectRequisition}/${reqName}`,{remarks});
}