import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getTravelOrders);
};

export const getTravelOrder = async (id) => {
  return await axiosClient.get(`${routes.travelOrders.base}/${id}`);
};

export const getTravelOrdersStats = async () => {
  return await axiosClient.get(routes.travelOrders.stats);
};

export const addTravelOrder = async (values) => {
  return await axiosClient.post(routes.travelOrders.addTravelOrder, values);
};

export const editTravelOrder = async (values) => {
  return await axiosClient.patch(
    `${routes.travelOrders.editTravelOrder}/${values.id}`,
    values
  );
};

export const deleteTravelOrder = async (travelOrderId) => {
  return await axiosClient.delete(
    `${routes.travelOrders.base}/${travelOrderId}`
  );
};

export const getApprovedTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getApprovedTravelOrders);
};

export const getPendingDopTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getPendingDopTravelOrders);
};

export const getApprovedDopTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getApprovedDopTravelOrders);
};

export const getRejectedDopTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getRejectedDopTravelOrders);
};

export const getPendingAccountantTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getPendingAccountantTravelOrders);
};

export const getApprovedAccountantTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getApprovedAccountantTravelOrders);
};

export const getRejectedAccountantTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getRejectedAccountantTravelOrders);
};

export const getPendingFleetManagerTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getPendingFleetManagerTravelOrders);
};

export const getApprovedFleetManagerTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getApprovedFleetManagerTravelOrders);
};

export const getRejectedFleetManagerTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getRejectedFleetManagerTravelOrders);
};

export const getPendingTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getPendingTravelOrders);
};

export const getMyTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getMyTravelOrders);
};

export const approveTravelOrder = async ({travelName, remarks}) => {
  return await axiosClient.post(`${routes.travelOrders.approveTravelOrder}/${travelName}`, {remarks} );
}

export const rejectTravelOrder = async ({travelName, remarks}) => {
  return await axiosClient.post(`${routes.travelOrders.rejectTravelOrder}/${travelName}`,{remarks});
}