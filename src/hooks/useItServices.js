import { useMutation, useQuery, useQueryClient } from "react-query";
import produce from "immer";
import {
    getAllItServices,
    addItService
} from "../apis/itServices";
import { IT_SERVICES_KEY } from "../lib/constants";

export const useAddItService = () => {
  const queryClient = useQueryClient();
  return useMutation(addItService, {
    onSuccess: (data) => {
      const previousItService = queryClient.getQueryData(IT_SERVICES_KEY);
      if (previousItService) {
        queryClient.setQueryData(IT_SERVICES_KEY, (previousItService) => {
          return produce(previousItService, (draft) => {
            draft.assets.push(data.asset);
          });
        });
      } else {
        queryClient.setQueryData(IT_SERVICES_KEY, () => {
          return { assets: [data.itService] };
        });
      }
    },
  });
};

export const useItServices = () => {
  return useQuery(IT_SERVICES_KEY, getAllItServices);
};