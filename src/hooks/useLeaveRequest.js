import { useQuery } from "react-query";
import {
  getLeaveRequest,
  getLeaveRequests
} from "../apis/leaveRequests";
import { LEAVE_REQUESTS_KEY } from "../lib/constants";

export const useLeaveRequest = (leaveRequestId) => {
  return useQuery([LEAVE_REQUESTS_KEY, leaveRequestId], () => getLeaveRequest(leaveRequestId));
};

export const useLeaveRequests = () => {
  return useQuery(LEAVE_REQUESTS_KEY, getLeaveRequests);
};

