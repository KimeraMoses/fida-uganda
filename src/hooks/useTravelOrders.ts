import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addTravelOrder,
  getAllTravelOrders,
  getTravelOrdersStats,
} from "../apis/travelOrder";
import { TRAVEL_ORDER_KEY, TRAVEL_ORDER_STATS } from "../lib/constants";
import { ITravelOrderGetAll } from "../interfaces/TravelOrder";
import produce from "immer";

export const useTravelOrder = () => {
  return useQuery(TRAVEL_ORDER_KEY, getAllTravelOrders);
};

export const useTravelOrderStats = () => {
  return useQuery(TRAVEL_ORDER_STATS, getTravelOrdersStats);
};

export const useAddTravelOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(addTravelOrder, {
    onSuccess: (data) => {
      const previousProjects = queryClient.getQueryData<
        ITravelOrderGetAll | undefined
      >(TRAVEL_ORDER_KEY);

      if (previousProjects) {
        queryClient.setQueryData<ITravelOrderGetAll>(TRAVEL_ORDER_KEY, () => {
          return produce(previousProjects, (draft) => {
            draft.travelOrders.push(data?.travelOrder);
          });
        });
      } else {
        queryClient.setQueryData<ITravelOrderGetAll>(TRAVEL_ORDER_KEY, () => {
          return { travelOrders: [data?.travelOrder] };
        });
      }
    },
  });
};
