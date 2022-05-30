import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getLeaveRequest = async (leaveRequestId) => {
  return await axiosClient.get(
    `${routes.leaveRequests.base}/${leaveRequestId}`
  );
};

export const getLeaveRequests = async () => {
  return await axiosClient.get(routes.leaveRequests.getLeaveRequests);
};

export const addLeaveRequests = async (leaveRequest) => {
  return await axiosClient.post(
    routes.leaveRequests.createLeaveRequest,
    leaveRequest
  );
};

export const approveLeaveRequest = async (id, remarks) => {
  return await axiosClient.post(
    `${routes.leaveRequests.approveLeaveRequest}/${id}`,
    { remarks }
  );
};
