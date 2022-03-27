import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllTravelOrders = async () => {
  return await axiosClient.get(routes.travelOrders.getTravelOrders);
};

export const getTravelOrdersStats = async () => {
  return await axiosClient.get(routes.travelOrders.stats);
};

export const addTravelOrder = async (values) => {
  return await axiosClient.post(routes.travelOrders.addTravelOrder, values);
};
