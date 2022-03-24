import { useQuery } from "react-query";
import { getAllClients } from "../apis/clients";
import { CLIENTS_KEY } from "../lib/constants";

export const useClients = () => {
  return useQuery(CLIENTS_KEY, getAllClients);
};
