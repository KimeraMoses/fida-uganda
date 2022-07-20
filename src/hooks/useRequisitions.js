import { useMutation, useQuery, useQueryClient } from "react-query";
import { REQUISITIONS_KEY, REQUISITIONS_STATS } from "../lib/constants";
import {
  addRequisition,
  getAllApprovedRequisitions,
  getAllRequisitions, getRequisition,
  getRequisitionsStats,
} from "../apis/requisition";
import produce from "immer";

export const useRequisitions = () => {
  return useQuery(REQUISITIONS_KEY, getAllRequisitions);
};

export const useRequisition = (id) => {
  return useQuery([REQUISITIONS_KEY, id], ()=> getRequisition(id))
}
export const useRequisitionsStats = () => {
  return useQuery(REQUISITIONS_STATS, getRequisitionsStats);
};

export const useApprovedRequisitions = () => {
  return useQuery(REQUISITIONS_KEY, getAllApprovedRequisitions);
}

export const useAddRequisition = () => {
  const queryClient = useQueryClient();
  return useMutation(addRequisition, {
    onSuccess: (data) => {
      const previousProjects = queryClient.getQueryData(REQUISITIONS_KEY);

      if (previousProjects) {
        queryClient.setQueryData(REQUISITIONS_KEY, () => {
          return produce(previousProjects, (draft) => {
            draft.Requisitions.push(data?.requisition);
          });
        });
      } else {
        queryClient.setQueryData(REQUISITIONS_KEY, () => {
          return { Requisitions: [data?.requisition] };
        });
      }
    },
  });
};
