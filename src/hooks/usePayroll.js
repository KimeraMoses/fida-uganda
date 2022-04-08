import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createPayroll,
  deletePayroll,
  getAllPayrolls,
  getPayroll,
} from "../apis/payroll";
import { PAYROLL_KEY } from "../lib/constants";

export const usePayrolls = () => {
  return useQuery(PAYROLL_KEY, getAllPayrolls);
};

export const usePayroll = (id) => {
  return useQuery([PAYROLL_KEY, id], () => getPayroll(id));
};

export const useAddPayroll = () => {
  const queryClient = useQueryClient();
  return useMutation(createPayroll, {
    onSuccess: (data) => {
      const previousPayroll = queryClient.getQueryData(PAYROLL_KEY);
      if (previousPayroll) {
        queryClient.setQueryData(PAYROLL_KEY, (previousPayroll) => {
          return produce(previousPayroll, (draft) => {
            draft.reports.push(data.payroll);
          });
        });
      } else {
        queryClient.setQueryData(PAYROLL_KEY, () => {
          return { reports: [data.payroll] };
        });
      }
    },
  });
};

export const useUpdatePayroll = () => {
  const queryClient = useQueryClient();
  return useMutation(createPayroll, {
    onSuccess: (data) => {
      const previousPayroll = queryClient.getQueryData(PAYROLL_KEY);
      if (previousPayroll) {
        queryClient.setQueryData(PAYROLL_KEY, (previousPayroll) => {
          return produce(previousPayroll, (draft) => {
            const index = draft.payroll.findIndex(
              (file) => file.id === data.payroll.id
            );
            draft.payroll[index] = draft.payroll;
          });
        });
      } else {
        queryClient.setQueryData(PAYROLL_KEY, () => {
          return { reports: [data.payroll] };
        });
      }
    },
  });
};

export const useDeleteReport = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePayroll, {
    onMutate: async (payrollId) => {
      await queryClient.cancelMutations(PAYROLL_KEY);
      const previousPayroll = queryClient.getQueryData(PAYROLL_KEY);
      if (previousPayroll) {
        queryClient.setQueryData(PAYROLL_KEY, (previousPayroll) => {
          return produce(previousPayroll, (draft) => {
            draft.payroll.filter((file) => file.id !== payrollId);
          });
        });
      }
    },
    onError: (_error, _reportId, context) => {
      queryClient.setQueryData(PAYROLL_KEY, context.previousPayroll);
    },
    onSettled: () => {
      queryClient.invalidateQueries(PAYROLL_KEY);
    },
  });
};
