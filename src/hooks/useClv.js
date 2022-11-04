import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { addClv, deleteClv, editClv, getClv, getClvs } from "../apis/clv";
import { CLVS_KEY, CLVS_STATS } from "../lib/constants";

export const useClv = (clvId) => {
  return useQuery([CLVS_KEY, clvId], () => getClv(clvId));
};

export const useClvs = () => {
  return useQuery(CLVS_KEY, getClvs);
};

export const useClvsDetails = () => {
  const { data } = useClvs();
  return data?.clvs.map((clv) => {
    return { ...clv, id: clv.id, name: `${clv.first_name} ${clv.last_name}` };
  });
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
              (clv) => clv.id === data?.updatedClv.id
            );
            draft.clvs[index] = data?.updatedClv;
          });
        });
      } else {
        return { clvs: [data?.updatedClv] };
      }
    },
  });
};

export const useDeleteClv = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteClv, {
    onMutate: async (id) => {
      await queryClient.cancelMutations(CLVS_KEY);

      const previousClvs = queryClient.getQueryData(CLVS_KEY);
      if (previousClvs) {
        queryClient.setQueryData(CLVS_KEY, (previousClvs) => {
          return produce(previousClvs, (draft) => {
            draft.cases.filter((clv) => clv.id !== id);
          });
        });
      }
    },
    onError: (_error, _clvId, context) => {
      queryClient.setQueryData(CLVS_KEY, context.previousClvs);
    },
    onSettled: () => {
      queryClient.invalidateQueries(CLVS_KEY);
    },
  });
};

export const useCLVId = () => {
  return useSelector((state) => state.CLV.CLV);
};
