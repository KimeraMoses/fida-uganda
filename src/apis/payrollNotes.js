import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const createPayrollNote = async (values) => {
  return await axiosClient.post(routes.payrollNotes.addPayrollNote, values);
};

export const editPayrollNote = async (values) => {
  return await axiosClient.patch(
    `${routes.payrollNotes.editPayrollNote}${values.id}`,
    values
  );
};

export const deletePayrollNote = async (id) => {
  return await axiosClient.delete(`${routes.payrollNotes.base}${id}`);
};

export const getAllPayrollNotes = async () => {
  return await axiosClient.get(routes.payrollNotes.getAllPayrollNotes);
};

export const getPayrollNote = async (id) => {
  return await axiosClient.get(`${routes.payrollNotes.base}${id}`);
};
