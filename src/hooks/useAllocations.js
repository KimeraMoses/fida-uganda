import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addAllocation,
  deleteAllocation,
  getAllocations,
  getAllocation,
} from "../apis/allocations";
import { ALLOCATIONS_KEY } from "../lib/constants";

export const useAllocation = (allocationId) => {
  return useQuery([ALLOCATIONS_KEY, allocationId], getAllocation);
};

export const useAllocations = () => {
  return useQuery(ALLOCATIONS_KEY, getAllocations);
};

export const useAddAllocation = () => {
  const queryClient = useQueryClient();
  return useMutation(addAllocation, {
    onSuccess: (data) => {
      const previousAllocations = queryClient.getQueryData(ALLOCATIONS_KEY);
      if (previousAllocations) {
        queryClient.setQueryData(ALLOCATIONS_KEY, () => {
          return produce(previousAllocations, (draft) => {
            draft.allocations.push(data?.allocation);
          });
        });
      } else {
        queryClient.setQueryData(ALLOCATIONS_KEY, () => {
          return { allocations: [data?.allocation] };
        });
      }
    },
  });
};

export const useUpdateAllocation = () => {
  const queryClient = useQueryClient();
  return useMutation(addAllocation, {
    onSuccess: (data) => {
      const previousAllocations = queryClient.getQueryData(ALLOCATIONS_KEY);
      if (previousAllocations) {
        queryClient.setQueryData(ALLOCATIONS_KEY, () => {
          return produce(previousAllocations, (draft) => {
            const index = draft.allocations.findIndex(
              (allocation) => allocation.id === data.allocation.id
            );
            draft.allocations[index] = data.allocation;
          });
        });
      } else {
        queryClient.setQueryData(ALLOCATIONS_KEY, () => {
          return { allocations: [data?.allocation] };
        });
      }
    },
  });
};

export const useDeleteAllocation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAllocation, {
    onSuccess: (data) => {
      const previousAllocations = queryClient.getQueryData(ALLOCATIONS_KEY);
      if (previousAllocations) {
        queryClient.setQueryData(ALLOCATIONS_KEY, () => {
          return produce(previousAllocations, (draft) => {
            draft.allocations.filter((allocation) => allocation.id !== data.allocation.id);
          });
        });
      } else {
        queryClient.setQueryData(ALLOCATIONS_KEY, () => {
          return { allocations: [] };
        });
      }
    },
  });
};
