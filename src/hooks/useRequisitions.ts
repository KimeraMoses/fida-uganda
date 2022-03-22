import { useMutation, useQuery, useQueryClient } from "react-query";
import { REQUISITIONS_KEY, REQUISITIONS_STATS } from "../lib/constants";
import {
  addRequisition,
  getAllRequisitions,
  getRequisitionsStats,
} from "../apis/requisition";
import { IRequisitionGetAll } from "../interfaces/Requisition";
import produce from "immer";

export const useRequisitions = () => {
  return useQuery(REQUISITIONS_KEY, getAllRequisitions);
};

export const useRequisitionsStats = () => {
  return useQuery(REQUISITIONS_STATS, getRequisitionsStats);
};

export const useAddRequisition = () => {
  const queryClient = useQueryClient();
  return useMutation(addRequisition, {
    onSuccess: (data) => {
      const previousProjects = queryClient.getQueryData<
        IRequisitionGetAll | undefined
      >(REQUISITIONS_KEY);

      if (previousProjects) {
        queryClient.setQueryData<IRequisitionGetAll>(REQUISITIONS_KEY, () => {
          return produce(previousProjects, (draft) => {
            draft.requisitions.push(data?.requisition);
          });
        });
      } else {
        queryClient.setQueryData<IRequisitionGetAll>(REQUISITIONS_KEY, () => {
          return { requisitions: [data?.requisition] };
        });
      }
    },
  });
};
