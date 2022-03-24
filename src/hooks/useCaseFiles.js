import { useQuery } from "react-query";
import { CASES_KEY } from "../lib/constants";
import { getAllCaseFiles } from "../apis/cases";

export const useCaseFiles = () => {
  return useQuery(CASES_KEY, getAllCaseFiles);
};
