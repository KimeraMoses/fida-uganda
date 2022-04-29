import { useQuery } from "react-query";
import {
  getMembers
} from "../apis/members";
import { ASSETS_KEY } from "../lib/constants";

export const useMembers = () => {
  return useQuery(ASSETS_KEY, getMembers);
};



