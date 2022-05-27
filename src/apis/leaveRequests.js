import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getLeaveRequest = async (leaveRequestId) => {
  return await axiosClient.get(`${routes.leaveRequests.base}/${leaveRequestId}`);
};

export const getLeaveRequests = async () => {
  return await axiosClient.get(routes.leaveRequests.getLeaveRequests);
};

