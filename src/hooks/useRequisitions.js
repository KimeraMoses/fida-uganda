import { useMutation, useQuery, useQueryClient } from "react-query";
import {REQUISITIONS_KEY, REQUISITIONS_STATS} from "../lib/constants";
import {
  addRequisition,
  approveRequisition,
  getAllRequisitions,
  getRequisition,
  getRequisitionsStats,
  rejectRequisition,
  getAllApprovedRequisitions,
  getMyRequisitions,
  getPendingDopRequisitions,
  getApprovedDopRequisitions,
  getRejectedDopRequisitions,
  getPendingAccountantRequisitions,
  getApprovedAccountantRequisitions,
  getRejectedAccountantRequisitions,
  getPendingCeoRequisitions,
  getApprovedCeoRequisitions,
  getRejectedCeoRequisitions,
  getPendingProcurementRequisitions, getApprovedProcurementRequisitions, getRejectedProcurementRequisitions
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

export const useApprovedRequisitions = () => {
  return useQuery(REQUISITIONS_KEY, getAllApprovedRequisitions);
}

export const useMyRequisitions = () =>{
  return useQuery([REQUISITIONS_KEY, "MY"], getMyRequisitions)
}

export const usePendingDopRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "PENDINGDOP"], getPendingDopRequisitions);
};

export const useApprovedDopRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "APPROVEDDOP"], getApprovedDopRequisitions);
};

export const useRejectedDopRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "REJECTEDDOP"], getRejectedDopRequisitions);
};

export const usePendingAccountantRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "PENDINGACCOUNTANT"], getPendingAccountantRequisitions);
};

export const useApprovedAccountantRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "APPROVEDACCOUNTANT"], getApprovedAccountantRequisitions);
};

export const useRejectedAccountantRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "REJECTEDACCOUNTANT"], getRejectedAccountantRequisitions);
};

export const usePendingCeoRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "PENDINGCEO"], getPendingCeoRequisitions);
};

export const useApprovedCeoRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "APPROVEDCEO"], getApprovedCeoRequisitions);
};

export const useRejectedCeoRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "REJECTEDCEO"], getRejectedCeoRequisitions);
};
export const usePendingProcurementRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "PENDINGPROCUREMENT"], getPendingProcurementRequisitions);
};

export const useApprovedProcurementRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "APPROVEDPROCUREMENT"], getApprovedProcurementRequisitions);
};

export const useRejectedProcurementRequisitions = () => {
  return useQuery([REQUISITIONS_KEY, "REJECTEDPROCUREMENT"], getRejectedProcurementRequisitions);
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
