import { useMutation, useQuery, useQueryClient } from "react-query";
import { REQUISITIONS_KEY, REQUISITIONS_STATS } from "../lib/constants";
import {
  addRequisition, approveRequisition,
  getAllRequisitions, getRequisition,
  getRequisitionsStats, rejectRequisition,
} from "../apis/requisition";
import produce from "immer";
import requisitions from "../components/compound/Requisitions";

export const useRequisitions = () => {
  return useQuery(REQUISITIONS_KEY, getAllRequisitions);
};

export const useRequisition = (id) => {
  return useQuery([REQUISITIONS_KEY, id], ()=> getRequisition(id))
}
export const useRequisitionsStats = () => {
  return useQuery(REQUISITIONS_STATS, getRequisitionsStats);
};

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

export const useApproveRequisition = () => {
  const queryClient = useQueryClient()
  return useMutation(approveRequisition,{
    onMutate: async({reqName,remarks}) => {
      await queryClient.cancelMutations(REQUISITIONS_KEY)

      const previousRequisitions = queryClient.getQueryData(REQUISITIONS_KEY)
      if (previousRequisitions){
        queryClient.setQueryData(REQUISITIONS_KEY,(requisitions) =>{
          return produce(requisitions,(draft) =>{
            const index = draft.Requisitions.findIndex(
                (requisitions) => requisitions.id === reqName);
            draft.Requisitions[index] = {
              ...requisitions, remarks

            }
          });
        });
        // console.log("this is the remark",remarks,reqName)
      } else {
        queryClient.setQueryData(REQUISITIONS_KEY,() =>{
          return { Requisitions: [requisitions]

          }
        })
      }
    },
    onError: (_error,_setId,context)=> {
      queryClient.setQueryData(REQUISITIONS_KEY,context.Requisitions)
    },

    onSettled: () =>{
      queryClient.invalidateQueries(REQUISITIONS_KEY)
    }
  })
}


export const useRejectRequisition = () => {
  const queryClient = useQueryClient()
  return useMutation(rejectRequisition,{
    onMutate: async({reqName,remarks}) => {
      await queryClient.cancelMutations(REQUISITIONS_KEY)
      const previousRequisitions = queryClient.getQueryData(REQUISITIONS_KEY)
      if (previousRequisitions){
        queryClient.setQueryData(REQUISITIONS_KEY,(requisitions) =>{
          return produce(requisitions,(draft) =>{
            const index = draft.Requisitions.findIndex(
                (requisitions) => requisitions.id === reqName);
            draft.Requisitions[index] = {
              ...requisitions, remarks

            }
          });
        });
        // console.log("this is the remark",remarks,reqName)
      } else {
        queryClient.setQueryData(REQUISITIONS_KEY,() =>{
          return { Requisitions: [requisitions]
          }
        })
      }
    },
    onError: (_error,_setId,context)=> {
      queryClient.setQueryData(REQUISITIONS_KEY,context.Requisitions)
    },

    onSettled: () =>{
      queryClient.invalidateQueries(REQUISITIONS_KEY)
    }
  })
}
