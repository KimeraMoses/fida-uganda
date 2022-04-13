import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addEmployee = async (values) => {
  return axiosClient.post(routes.employee.addEmployee, values);
};

export const getAllEmployees = async () => {
  return axiosClient.get(routes.employee.getAllEmployees);
};

export const editEmployee = async (values) => {
  return axiosClient.put(`${routes.employee.editEmployee}${values.id}`, values);
};

export const deleteEmployee = async (id) => {
  return axiosClient.delete(`${routes.employee.base}${id}`);
};

export const getEmployee = async (id) => {
  return axiosClient.get(`${routes.employee.base}${id}`);
};
