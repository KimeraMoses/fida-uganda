import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
    addItProduct
} from "../apis/itProducts";
import { IT_PRODUCTS_KEY } from "../lib/constants";

export const useAddItProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(addItProduct, {
    onSuccess: (data) => {
      const previousItProducts = queryClient.getQueryData(IT_PRODUCTS_KEY);
      if (previousItProducts) {
        queryClient.setQueryData(IT_PRODUCTS_KEY, (previousItProducts) => {
          return produce(previousItProducts, (draft) => {
            draft.assets.push(data.asset);
          });
        });
      } else {
        queryClient.setQueryData(IT_PRODUCTS_KEY, () => {
          return { assets: [data.itProduct] };
        });
      }
    },
  });
};

