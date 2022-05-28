import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getLeaveRequest,
  getLeaveRequests,
  addLeaveRequests
} from "../apis/leaveRequests";
import { LEAVE_REQUESTS_KEY } from "../lib/constants";


export const useLeaveRequest = (leaveRequestId) => {
  return useQuery([LEAVE_REQUESTS_KEY, leaveRequestId], () => getLeaveRequest(leaveRequestId));
};

export const useLeaveRequests = () => {
  return useQuery(LEAVE_REQUESTS_KEY, getLeaveRequests);
};

export const useAddLeaveRequest = () => {
  const queryClient = useQueryClient();
  return useMutation(addLeaveRequests, {
    onSuccess: (data) => {
      const previousLeaveRequests = queryClient.getQueryData(LEAVE_REQUESTS_KEY);
      if (previousLeaveRequests) {
        queryClient.setQueryData(LEAVE_REQUESTS_KEY, (previousLeaveRequests) => {
          return produce(previousLeaveRequests, (draft) => {
            draft.leaves.push(data.leave);
          });
        });
      } else {
        queryClient.setQueryData(LEAVE_REQUESTS_KEY, () => {
          return { leaves: [data.leave] };
        });
      }
    },
  });
};