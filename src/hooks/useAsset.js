import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addAsset,
  deleteAsset,
  getAsset,
  getAssets,
  updateAsset,
} from "../apis/assets";
import { ASSETS_KEY } from "../lib/constants";

export const useAsset = (assetId) => {
  return useQuery([ASSETS_KEY, assetId], () => getAsset(assetId));
};

export const useAssets = () => {
  return useQuery(ASSETS_KEY, getAssets);
};

export const useAddAsset = () => {
  const queryClient = useQueryClient();
  return useMutation(addAsset, {
    onSuccess: (data) => {
      const previousAssets = queryClient.getQueryData(ASSETS_KEY);
      if (previousAssets) {
        queryClient.setQueryData(ASSETS_KEY, (previousAssets) => {
          return produce(previousAssets, (draft) => {
            draft.assets.push(data.asset);
          });
        });
      } else {
        queryClient.setQueryData(ASSETS_KEY, () => {
          return { assets: [data.asset] };
        });
      }
    },
  });
};

export const useUpdateAsset = () => {
  const queryClient = useQueryClient();
  return useMutation(updateAsset, {
    onSuccess: (data) => {
      const previousAssets = queryClient.getQueryData(ASSETS_KEY);
      if (previousAssets) {
        queryClient.setQueryData(ASSETS_KEY, (previousAssets) => {
          return produce(previousAssets, (draft) => {
            const index = draft.assets.findIndex(
              (asset) => asset.id === data.asset.id
            );
            draft.assets[index] = data.asset;
          });
        });
      } else {
        queryClient.setQueryData(ASSETS_KEY, () => {
          return { assets: [data.asset] };
        });
      }
    },
  });
};

export const useDeleteAsset = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAsset, {
    onMutate: async (data) => {
      await queryClient.cancelMutations(ASSETS_KEY);

      const previousAssets = queryClient.getQueryData(ASSETS_KEY);
      if (previousAssets) {
        queryClient.setQueryData(ASSETS_KEY, (previousAssets) => {
          return produce(previousAssets, (draft) => {
            draft.assets.filter((asset) => asset.id !== data.asset.id);
          });
        });
      }
    },
    onError: (_error, _assetId, context) => {
      queryClient.setQueryData(ASSETS_KEY, context.prevAssets);
    },
    onSettled: () => {
      queryClient.invalidateQueries(ASSETS_KEY);
    },
  });
};
