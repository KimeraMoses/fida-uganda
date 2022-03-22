import { useMutation, useQuery, useQueryClient } from "react-query";
import { REQUISITIONS_KEY } from "../lib/constants";
import { addRequisition, getAllRequisitions } from "../apis/requisition";
import { IRequisitionGetAll } from "../interfaces/Requisition";
import produce from "immer";

export const useRequisitions = () => {
  return useQuery(REQUISITIONS_KEY, getAllRequisitions);
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
