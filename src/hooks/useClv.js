import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addClv, deleteClv, editClv, getClv, getClvs } from "../apis/clv";
import { CLVS_KEY, CLVS_STATS } from "../lib/constants";

export const useClv = (clvId) => {
  return useQuery([CLVS_KEY, clvId], () => getClv(clvId));
};

export const useClvs = () => {
  return useQuery(CLVS_KEY, getClvs);
};

export const useClvsStats = () => {
  return useQuery(CLVS_STATS, getClvs);
};

export const useAddClv = () => {
  const queryClient = useQueryClient();
  return useMutation(addClv, {
    onSuccess: (data) => {
      const previousClvs = queryClient.getQueryData(CLVS_KEY);

      if (previousClvs) {
        queryClient.setQueryData(CLVS_KEY, () => {
          return produce(previousClvs, (draft) => {
            draft.clvs.push(data?.clv);
          });
        });
      } else {
        return { clvs: [data?.clv] };
      }
    },
  });
};

export const useEditClv = () => {
  const queryClient = useQueryClient();
  return useMutation(editClv, {
    onSuccess: (data) => {
      const previousClvs = queryClient.getQueryData(CLVS_KEY);
      if (previousClvs) {
        queryClient.setQueryData(CLVS_KEY, () => {
          return produce(previousClvs, (draft) => {
            const index = draft.clvs.findIndex(
              (clv) => clv.id === data?.clv.id
            );
            draft.clvs[index] = data?.clv;
          });
        });
      } else {
        return { clvs: [data?.clv] };
      }
    },
  });
};

export const useDeleteClv = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteClv, {
    onSuccess: (data) => {
      const previousClvs = queryClient.getQueryData(CLVS_KEY);

      if (previousClvs) {
        queryClient.setQueryData(CLVS_KEY, () => {
          return produce(previousClvs, (draft) => {
            const index = draft.clvs.findIndex(
              (clv) => clv.id === data?.clv.id
            );
            draft.clvs.splice(index, 1);
          });
        });
      } else {
        return { clvs: [] };
      }
    },
  });
};
