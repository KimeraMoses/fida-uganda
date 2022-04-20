import { useMutation, useQuery } from "react-query";
import {
  addAdvance,
  deleteAdvance,
  editAdvance,
  getAllAdvances,
} from "../apis/advances";
import { ADVANCES_KEY } from "../lib/constants";

export const useAdvances = () => {
  return useQuery(ADVANCES_KEY, getAllAdvances);
};

export const useAdvance = (id) => {
  return useQuery([ADVANCES_KEY, id], getAllAdvances(id));
};

export const useAddAdvance = () => {
  return useMutation(addAdvance);
};

export const useEditAdvance = () => {
  return useMutation(editAdvance);
};

export const useDeleteAdvance = () => {
  return useMutation(deleteAdvance);
};
