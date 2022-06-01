import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addAdvance,
  deleteAdvance,
  editAdvance,
  getAllAdvances,
  getAdvance,
} from "../apis/advances";
import { ADVANCES_KEY } from "../lib/constants";

export const useAdvances = () => {
  return useQuery(ADVANCES_KEY, getAllAdvances);
};

export const useAdvance = (id) => {
  return useQuery([ADVANCES_KEY, id], () => getAdvance(id));
};

export const useAddAdvance = () => {
  const queryClient = useQueryClient();
  return useMutation(addAdvance, {
    onSuccess: (data) => {
      const previousAdvances = queryClient.getQueryData(ADVANCES_KEY);
      if (previousAdvances) {
        queryClient.setQueryData(ADVANCES_KEY, (previousAdvances) => {
          return produce(previousAdvances, (draft) => {
            draft.advances.push(data.advance);
          });
        });
      } else {
        queryClient.setQueryData(ADVANCES_KEY, () => {
          return { advances: [data.advance] };
        });
      }
    },
  });
};

export const useEditAdvance = () => {
  return useMutation(editAdvance);
};

export const useDeleteAdvance = () => {
  return useMutation(deleteAdvance);
};
