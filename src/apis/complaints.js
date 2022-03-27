import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getComplaints = async () => {
  return await axiosClient.get(routes.complaints.getComplaints);
};

export const getComplaintsStats = async () => {
  return await axiosClient.get(routes.complaints.stats);
};

export const addComplaint = async (complaint) => {
  return await axiosClient.post(routes.complaints.addComplaint, complaint);
};

export const getComplaint = async (complaintId) => {
  return await axiosClient.get(`${routes.complaints.base}/${complaintId}`);
};

export const editComplaint = async (complaint) => {
  return await axiosClient.patch(
    `${routes.complaints.editComplaint}/${complaint.id}`,
    complaint
  );
};

export const deleteComplaint = async (complaintId) => {
  return await axiosClient.delete(`${routes.complaints.base}/${complaintId}`);
};
