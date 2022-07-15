import {
  createPayrollNote,
  deletePayrollNote,
  editPayrollNote,
  getAllPayrollNotes,
  getPayrollNote,
} from "../apis/payrollNotes";
import { PAYROLL_NOTES_KEY } from "../lib/constants";
import { useMutation, useQuery, useQueryClient } from "react-query";
import produce from "immer";

export const usePayrollNotes = () => {
  return useQuery(PAYROLL_NOTES_KEY, getAllPayrollNotes);
};

export const usePayrollNote = (id) => {
  return useQuery([PAYROLL_NOTES_KEY, id], () => getPayrollNote(id));
};

export const useAddPayrollNote = () => {
  const queryClient = useQueryClient();
  return useMutation(createPayrollNote, {
    onSuccess: (data) => {
      const previousPayrollNotes = queryClient.getQueryData(PAYROLL_NOTES_KEY);
      if (previousPayrollNotes) {
        queryClient.setQueryData(PAYROLL_NOTES_KEY, (previousPayrollNotes) => {
          return produce(previousPayrollNotes, (draft) => {
            draft.PayrollNotes.push(data.uploaded_PayrollNote);
          });
        });
      } else {
        queryClient.setQueryData(PAYROLL_NOTES_KEY, () => {
          return { PayrollNotes: [data.uploaded_PayrollNote] };
        });
      }
    },
  });
};

export const useUpdatePayrollNote = () => {
  const queryClient = useQueryClient();
  return useMutation(editPayrollNote, {
    onSuccess: (data) => {
      const previousPayrollNotes = queryClient.getQueryData(PAYROLL_NOTES_KEY);
      if (previousPayrollNotes) {
        queryClient.setQueryData(PAYROLL_NOTES_KEY, (previousPayrollNotes) => {
          return produce(previousPayrollNotes, (draft) => {
            const index = draft.payroll.findIndex(
              (file) => file.id === data.uploaded_PayrollNote.id
            );
            draft.payroll[index] = draft.payroll;
          });
        });
      } else {
        queryClient.setQueryData(PAYROLL_NOTES_KEY, () => {
          return { payroll: [data.uploaded_PayrollNote] };
        });
      }
    },
  });
};

export const useDeletePayrollNote = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePayrollNote, {
    onMutate: async (payrollNoteId) => {
      await queryClient.cancelMutations(PAYROLL_NOTES_KEY);
      const previousPayrollNotes = queryClient.getQueryData(PAYROLL_NOTES_KEY);
      if (previousPayrollNotes) {
        queryClient.setQueryData(PAYROLL_NOTES_KEY, (previousPayrollNotes) => {
          return produce(previousPayrollNotes, (draft) => {
            draft.payroll.filter((file) => file.id !== payrollNoteId);
          });
        });
      }
    },
    onError: (_error, _reportId, context) => {
      queryClient.setQueryData(PAYROLL_NOTES_KEY, context.previousPayrollNotes);
    },
    onSettled: () => {
      queryClient.invalidateQueries(PAYROLL_NOTES_KEY);
    },
  });
};
