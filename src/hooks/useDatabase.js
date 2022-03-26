import { useQuery } from "react-query";
import { getDatabases } from "../apis/databases";
import { DATABASE_KEY } from "../lib/constants";

export const useDatabases = () => {
  return useQuery(DATABASE_KEY, getDatabases);
};
