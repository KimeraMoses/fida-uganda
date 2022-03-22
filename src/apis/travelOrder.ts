import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";
import {
  ITravelOrderCreate,
  ITravelOrderGetAll,
  ITravelOrderStat,
  ITravelOrderGetOne,
} from "../interfaces/TravelOrder";

export const getAllTravelOrders = async (): Promise<ITravelOrderGetAll> => {
  return await axiosClient.get(routes.travelOrders.getTravelOrders);
};

export const getTravelOrdersStats = async (): Promise<ITravelOrderStat> => {
  return await axiosClient.get(routes.travelOrders.stats);
};

export const addTravelOrder = async (
  values: ITravelOrderCreate
): Promise<ITravelOrderGetOne> => {
  return await axiosClient.post(routes.travelOrders.addTravelOrder, values);
};
