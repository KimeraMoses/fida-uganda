import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getMemberActivities = async () => {
  return await axiosClient.get(
    routes.membershipActivities.getMembershipActivities
  );
};

export const addMembershipActivity = async (activity) => {
  return await axiosClient.post(
    routes.membershipActivities.addMembershipActivity,
    activity
  );
};
