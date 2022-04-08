import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const createPayroll = async (values) => {
  return await axiosClient.post(routes.payroll.addPayroll, values);
};

export const getPayroll = async (id) => {
  return await axiosClient.get(`${routes.payroll.base}${id}`);
};

export const getAllPayrolls = async () => {
  return await axiosClient.get(routes.payroll.getAllPayrolls);
};

export const editPayroll = async (values) => {
  return await axiosClient.patch(
    `${routes.payroll.editPayroll}${values.id}`,
    values
  );
};

export const deletePayroll = async (id) => {
  return await axiosClient.delete(`${routes.payroll.base}${id}`);
};
