import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addLeaveDays,
  deleteLeaveTracker,
  getAllUsersLeaveTrackers,
  getLeaveDaysRequest,
  getLeaveTracker,
  getLeaveTrackers,
  getRemainingDays,
  getUserTrackers,
  updateLeaveTracker,
} from "../apis/leaveTracker";
import { LEAVE_TRACKER_KEY } from "../lib/constants";

export const useLeaveTracker = (id) => {
  return useQuery([LEAVE_TRACKER_KEY, id], () => getLeaveTracker(id));
};

export const useLeaveTrackers = () => {
  return useQuery(LEAVE_TRACKER_KEY, getLeaveTrackers);
};

export const useLeaveDayRequest = () => {
  return useQuery([LEAVE_TRACKER_KEY, "REQUEST"], getLeaveDaysRequest);
};

export const useRemainingDays = () => {
  return useQuery([LEAVE_TRACKER_KEY, "REMAINING"], getRemainingDays);
};

export const useUserTrackers = () => {
  return useQuery([LEAVE_TRACKER_KEY, "USER"], getUserTrackers);
};

export const useUsersLeaveTrackers = () => {
  return useQuery([LEAVE_TRACKER_KEY, "ALL_USERS"], getAllUsersLeaveTrackers);
};

export const useAddLeaveDays = () => {
  const queryClient = useQueryClient();
  return useMutation(addLeaveDays, {
    onSuccess: (data) => {
      const previousLeaveTracker = queryClient.getQueryData(LEAVE_TRACKER_KEY);
      if (previousLeaveTracker) {
        queryClient.setQueryData(LEAVE_TRACKER_KEY, (previousLeaveTracker) => {
          return produce(previousLeaveTracker, (draft) => {
            draft.leaveTrackers.push(data.leaveTracker);
          });
        });
      } else {
        queryClient.setQueryData(LEAVE_TRACKER_KEY, () => {
          return { leaveTrackers: [data.leaveTracker] };
        });
      }
    },
  });
};

export const useUpdateLeaveTracker = () => {
  const queryClient = useQueryClient();
  return useMutation(updateLeaveTracker, {
    onSuccess: (data) => {
      const previousLeaveTracker = queryClient.getQueryData(LEAVE_TRACKER_KEY);
      if (previousLeaveTracker) {
        queryClient.setQueryData(LEAVE_TRACKER_KEY, (previousLeaveTracker) => {
          return produce(previousLeaveTracker, (draft) => {
            const index = draft.leaveTrackers.findIndex(
              (leaveTracker) => leaveTracker.id === data.leaveTracker.id
            );
            draft.leaveTrackers[index] = data.leaveTracker;
          });
        });
      } else {
        queryClient.setQueryData(LEAVE_TRACKER_KEY, () => {
          return { leaveTrackers: [data.leaveTracker] };
        });
      }
    },
  });
};

export const useDeleteLeaveTracker = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteLeaveTracker, {
    onSuccess: (data) => {
      const previousLeaveTracker = queryClient.getQueryData(LEAVE_TRACKER_KEY);
      if (previousLeaveTracker) {
        queryClient.setQueryData(LEAVE_TRACKER_KEY, (previousLeaveTracker) => {
          return produce(previousLeaveTracker, (draft) => {
            draft.leaveTrackers.filter(
              (leaveTracker) => leaveTracker.id !== data.leaveTracker.id
            );
          });
        });
      } else {
        queryClient.setQueryData(LEAVE_TRACKER_KEY, () => {
          return { leaveTrackers: [] };
        });
      }
    },
  });
};
