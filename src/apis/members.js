import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getMembers = async () => {
  return await axiosClient.get(routes.members.getAllMembers);
};

export const getMember = async (id) => {
  return await axiosClient.get(routes.members.base + id);
};

export const addMember = async (member) => {
  return await axiosClient.post(routes.members.addMember, member);
};

export const updateMember = async (member) => {
  return await axiosClient.patch(
    `${routes.members.editMember}/${member.id}`,
    member
  );
};

export const deleteMember = async (id) => {
  return await axiosClient.delete(routes.members.base + id);
};
