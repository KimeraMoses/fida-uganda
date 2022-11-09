import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getLeaveRequest,
  getLeaveRequests,
  addLeaveRequests,
  approveLeaveRequest, rejectLeaveRequest, getMyLeaveRequests,
} from "../apis/leaveRequests";
import {LEAVE_REQUESTS_KEY} from "../lib/constants";
import Tracker from "../components/compound/Tracker";


export const useLeaveRequest = (leaveRequestId) => {
  return useQuery([LEAVE_REQUESTS_KEY, leaveRequestId], () => getLeaveRequest(leaveRequestId));
};

export const useLeaveRequests = () => {
  return useQuery(LEAVE_REQUESTS_KEY, getLeaveRequests);
};

export const useMyLeaveRequests = () => {
  return useQuery([LEAVE_REQUESTS_KEY, "MY"], getMyLeaveRequests);
};

export const useAddLeaveRequest = () => {
  const queryClient = useQueryClient();
  const key = [LEAVE_REQUESTS_KEY, "MY"];
  return useMutation(addLeaveRequests, {
    onSuccess: (data) => {
      const previousLeaveRequests = queryClient.getQueryData(key);
      if (previousLeaveRequests) {
        queryClient.setQueryData(key, (previousLeaveRequests) => {
          return produce(previousLeaveRequests, (draft) => {
            draft.leaves.push(data.leave);
          });
        });
      } else {
        queryClient.setQueryData(key, () => {
          return { leaves: [data.leave] };
        });
      }
    },
  });
};

// export const useApproveLeaveRequest = (id) => {
//   const queryClient = useQueryClient();
//   return useMutation(approveLeaveRequest(id), {
//     onSuccess: (data) => {
//       const previousAssets = queryClient.getQueryData(LEAVE_REQUESTS_KEY);
//       if (previousAssets) {
//         queryClient.setQueryData(LEAVE_REQUESTS_KEY, (previousAssets) => {
//           return produce(previousAssets, (draft) => {
//             const index = draft.leaves.findIndex(
//               (leave) => leave.id === data.leave.id
//             );
//             draft.leaves[index] = data.leave;
//           });
//         });
//       } else {
//         queryClient.setQueryData(LEAVE_REQUESTS_KEY, () => {
//           return { leaves: [data.leave] };
//         });
//       }
//     },
//   });
// };

export const useApproveLeaveRequest = () =>{
  const queryClient = useQueryClient()
  return useMutation(approveLeaveRequest,{
    onMutate: async({id,remarks}) => {
      await queryClient.cancelMutations(LEAVE_REQUESTS_KEY)

      const previousLeaveRequests = queryClient.getQueryData(LEAVE_REQUESTS_KEY)
      if (previousLeaveRequests){
        queryClient.setQueryData(LEAVE_REQUESTS_KEY,(leaveRequests) =>{
          return produce(leaveRequests,(draft) =>{
            const index = draft.leaves.findIndex(
                (leaves) => leaves.id === id);
            draft.leaves[index] = {
              ...leaveRequests, remarks

            }
          });
        });
        // console.log("this is the remark",remarks,id)
      } else {
        queryClient.setQueryData(LEAVE_REQUESTS_KEY,() =>{
          return { leaves: [Tracker]

          }
        })
      }
    },
    onError: (_error,_setId,context)=> {
      queryClient.setQueryData(LEAVE_REQUESTS_KEY,context.leaves)
    },

    onSettled: () =>{
      queryClient.invalidateQueries(LEAVE_REQUESTS_KEY)
    }
  })

}

export const useRejectLeaveRequest  = () =>{
  const queryClient = useQueryClient();
  return useMutation(rejectLeaveRequest,{
    onMutate: async({id,remarks}) => {
      await queryClient.cancelMutations(LEAVE_REQUESTS_KEY)

      const previousLeaveRequests = queryClient.getQueryData(LEAVE_REQUESTS_KEY)
      if (previousLeaveRequests){
        queryClient.setQueryData(LEAVE_REQUESTS_KEY,(leaves) =>{
          return produce(leaves,(draft) =>{
            const index = draft.leaves.findIndex(
                (leaves) => leaves.id === id);
            draft.leaves[index] = {
              ...leaves, remarks

            }
          });
        });
        // console.log("this is the remark",remarks,id)
      } else {
        queryClient.setQueryData(LEAVE_REQUESTS_KEY,() =>{
          return { leaves: [Tracker]

          }
        })
      }
    },
    onError: (_error,_setId,context)=> {
      queryClient.setQueryData(LEAVE_REQUESTS_KEY,context.leaves)
    },

    onSettled: () =>{
      queryClient.invalidateQueries(LEAVE_REQUESTS_KEY)
    }
  })
}