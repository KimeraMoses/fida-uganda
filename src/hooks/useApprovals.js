import { useQuery } from "react-query";
import { getAllApprovals } from "../apis/approvals";

export const useApprovals = () => {
  return useQuery("APPROVALS", getAllApprovals);
};
