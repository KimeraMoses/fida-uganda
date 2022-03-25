import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addTravelOrder,
  deleteTravelOrder,
  editTravelOrder,
  getAllTravelOrders,
  getApprovedTravelOrders,
  getMyTravelOrders,
  getPendingTravelOrders,
  getTravelOrder,
  getTravelOrdersStats,
} from "../apis/travelOrder";
import { TRAVEL_ORDER_KEY, TRAVEL_ORDER_STATS } from "../lib/constants";
import produce from "immer";

export const useTravelOrders = () => {
  return useQuery(TRAVEL_ORDER_KEY, getAllTravelOrders);
};

export const useTravelOrder = (travelOrderId) => {
  return useQuery([TRAVEL_ORDER_KEY, travelOrderId], getTravelOrder);
};

export const useTravelOrderStats = () => {
  return useQuery(TRAVEL_ORDER_STATS, getTravelOrdersStats);
};

export const useApprovedTravelOrders = () => {
  return useQuery([TRAVEL_ORDER_KEY, "APPROVED"], getApprovedTravelOrders);
};

export const usePendingTravelOrders = () => {
  return useQuery([TRAVEL_ORDER_KEY, "PENDING"], getPendingTravelOrders);
};

export const useMyTraveOrders = () => {
  return useQuery([TRAVEL_ORDER_KEY, "MY"], getMyTravelOrders);
};

export const useAddTravelOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(addTravelOrder, {
    onSuccess: (data) => {
      const previousTravelOrders = queryClient.getQueryData(TRAVEL_ORDER_KEY);

      if (previousTravelOrders) {
        queryClient.setQueryData(TRAVEL_ORDER_KEY, () => {
          return produce(previousTravelOrders, (draft) => {
            draft.travelOrders.push(data?.travelOrder);
          });
        });
      } else {
        queryClient.setQueryData(TRAVEL_ORDER_KEY, () => {
          return { travelOrders: [data?.travelOrder] };
        });
      }
    },
  });
};

export const useEditTravelOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(editTravelOrder, {
    onSuccess: (data) => {
      const previousTravelOrders = queryClient.getQueryData(TRAVEL_ORDER_KEY);

      if (previousTravelOrders) {
        queryClient.setQueryData(TRAVEL_ORDER_KEY, () => {
          return produce(previousTravelOrders, (draft) => {
            const index = draft.travelOrders.findIndex(
              (travelOrder) => travelOrder.id === data?.travelOrder.id
            );
            draft.travelOrders[index] = data?.travelOrder;
          });
        });
      } else {
        queryClient.setQueryData(TRAVEL_ORDER_KEY, () => {
          return { travelOrders: [data?.travelOrder] };
        });
      }
    },
  });
};

export const useDeleteTravelOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTravelOrder, {
    onSuccess: (data) => {
      const previousTravelOrders = queryClient.getQueryData(TRAVEL_ORDER_KEY);

      if (previousTravelOrders) {
        queryClient.setQueryData(TRAVEL_ORDER_KEY, () => {
          return produce(previousTravelOrders, (draft) => {
            draft.travelOrders.filter(
              (travelOrder) => travelOrder.id !== data?.travelOrderId
            );
          });
        });
      } else {
        queryClient.setQueryData(TRAVEL_ORDER_KEY, () => {
          return { travelOrders: [data?.travelOrder] };
        });
      }
    },
  });
};
