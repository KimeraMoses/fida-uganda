import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getMyRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getMyRequisitions);
};

export const getAllRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getRequisitions);
};

export const getAllApprovedRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getAllApproved);
}

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

export const getPendingDopRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getPendingDopRequisitions);
};

export const getApprovedDopRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getApprovedDopRequisitions);
};

export const getRejectedDopRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getRejectedDopRequisitions);
};

export const getPendingAccountantRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getPendingAccountantRequisitions);
};

export const getApprovedAccountantRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getApprovedAccountantRequisitions);
};

export const getRejectedAccountantRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getRejectedAccountantRequisitions);
};

export const getPendingCeoRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getPendingCeoRequisitions);
};

export const getApprovedCeoRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getApprovedCeoRequisitions);
};

export const getRejectedCeoRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getRejectedCeoRequisitions);
};

export const getPendingProcurementRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getPendingProcurementRequisitions);
};

export const getApprovedProcurementRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getApprovedProcurementRequisitions);
};

export const getRejectedProcurementRequisitions = async () => {
  return await axiosClient.get(routes.requisitions.getRejectedProcurementRequisitions);
};