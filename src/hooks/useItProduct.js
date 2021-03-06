import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addItProduct, getAllItProducts } from "../apis/itProducts";
import { IT_PRODUCTS_KEY } from "../lib/constants";

export const useItProducts = () => {
  return useQuery(IT_PRODUCTS_KEY, getAllItProducts);
};

export const useAddItProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(addItProduct, {
    onSuccess: (data) => {
      const previousItProducts = queryClient.getQueryData(IT_PRODUCTS_KEY);
      if (previousItProducts) {
        queryClient.setQueryData(IT_PRODUCTS_KEY, (previousItProducts) => {
          return produce(previousItProducts, (draft) => {
            draft.ITProducts.push(data.iTProduct);
          });
        });
      } else {
        queryClient.setQueryData(IT_PRODUCTS_KEY, () => {
          return { ITProducts: [data.itProduct] };
        });
      }
    },
  });
};
