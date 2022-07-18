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